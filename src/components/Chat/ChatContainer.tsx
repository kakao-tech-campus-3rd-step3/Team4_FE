import { useEffect, useRef, useState, useMemo } from 'react';
import { useMutation, useInfiniteQuery } from '@tanstack/react-query';
import { CatsAPI } from '@/api/cats';
import { LoadingSpinner, LoadingSpinnerWrapper } from '@/components/common/LoadingSpinner';
import { ChatContainer as StyledChatContainer } from '@/components/Chat/Chat.styles';
import { ChatHeader } from './ChatHeader';
import { ChatMessages } from './ChatMessages';
import { ChatInput } from './ChatInput';

type Chat = {
  role: 'user' | 'assistant';
  message: string | React.ReactNode;
};

export const ChatContainer = () => {
  const shouldScrollToBottomRef = useRef(false);
  const loadRef = useRef<HTMLDivElement>(null);
  const messagesAreaRef = useRef<HTMLDivElement>(null);

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: ['chatHistory'],
    queryFn: ({ pageParam = 0 }) =>
      CatsAPI.loadChatHistory({ params: { size: 10, page: pageParam } }),
    getNextPageParam: (lastPage) => {
      if (lastPage.number + 1 < lastPage.totalPages) {
        return lastPage.number + 1;
      }
      return undefined;
    },
    initialPageParam: 0,
  });

  const chatHistory = useMemo(
    () =>
      data?.pages
        .slice()
        .reverse()
        .flatMap((page) =>
          page.content
            .sort((a, b) => a.chatId - b.chatId)
            .flatMap((log) => [{ role: log.role, message: log.message }]),
        ) || [],
    [data],
  );

  // 이전 채팅 무한 스크롤
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 0.1 },
    );

    const currentLoadRef = loadRef.current;
    if (currentLoadRef) {
      observer.observe(currentLoadRef);
    }

    return () => {
      if (currentLoadRef) {
        observer.unobserve(currentLoadRef);
      }
    };
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  const [newMessages, setNewMessages] = useState<Chat[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const allChats = useMemo(() => [...chatHistory, ...newMessages], [chatHistory, newMessages]);

  const { mutateAsync: send } = useMutation({
    mutationFn: (payload: { message: string }) => CatsAPI.sendMessage(payload),
  });

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (shouldScrollToBottomRef.current) {
      scrollToBottom();
      shouldScrollToBottomRef.current = false;
    }
  }, [allChats]);

  // 초기 로드 시 맨 아래로 스크롤 (한 번만)
  const hasScrolledOnce = useRef(false);
  useEffect(() => {
    if (!hasScrolledOnce.current && chatHistory.length > 0) {
      shouldScrollToBottomRef.current = true;
      hasScrolledOnce.current = true;
    }
  }, [chatHistory.length]);

  // 이전 채팅 로드 후 옵저버 영역에서 벗어나기
  const previousPagesLength = useRef(0);
  useEffect(() => {
    const currentPagesLength = data?.pages.length || 0;

    if (currentPagesLength > 1 && currentPagesLength > previousPagesLength.current) {
      // 새 페이지가 로드되었을 때만 스크롤
      messagesAreaRef.current?.scrollBy({ top: 100, behavior: 'auto' });
    }

    previousPagesLength.current = currentPagesLength;
  }, [data?.pages.length]);

  const handleSendMessage = async () => {
    const message = inputRef.current?.value;

    if (!message) {
      return;
    }

    if (inputRef.current) {
      inputRef.current.value = '';
    }

    shouldScrollToBottomRef.current = true;

    setNewMessages((prev) => [
      ...prev,
      { role: 'user', message },
      {
        role: 'assistant',
        message: (
          <LoadingSpinnerWrapper>
            <LoadingSpinner size={30} />
          </LoadingSpinnerWrapper>
        ),
      },
    ]);

    const response = (await send({ message })).message;

    shouldScrollToBottomRef.current = true;

    setNewMessages((prev) => {
      const updated = [...prev];
      updated.pop();
      updated.push({ role: 'assistant', message: response });
      return updated;
    });
  };

  return (
    <StyledChatContainer>
      <ChatHeader />
      <ChatMessages
        chatLog={allChats}
        messagesEndRef={messagesEndRef}
        loadRef={loadRef}
        messagesAreaRef={messagesAreaRef}
        isLoadingHistory={isFetchingNextPage}
      />
      <ChatInput onSendMessage={handleSendMessage} inputRef={inputRef} />
    </StyledChatContainer>
  );
};
