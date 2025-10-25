import { useEffect, useRef } from 'react';

interface UseChatScrollProps {
  fetchNextPage: () => void;
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
  totalPages: number;
  chatHistoryLength: number;
}

export const useChatScroll = ({
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage,
  totalPages,
  chatHistoryLength,
}: UseChatScrollProps) => {
  const loadRef = useRef<HTMLDivElement>(null);
  const messagesAreaRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const shouldScrollToBottomRef = useRef(false);
  const hasScrolledOnce = useRef(false);
  const previousPagesLength = useRef(0);

  // 무한 스크롤 옵저버
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

  // 초기 로드 시 맨 아래로 스크롤 (한 번만)
  useEffect(() => {
    if (!hasScrolledOnce.current && chatHistoryLength > 0) {
      shouldScrollToBottomRef.current = true;
      hasScrolledOnce.current = true;
    }
  }, [chatHistoryLength]);

  // 이전 채팅 로드 후 스크롤 위치 유지
  useEffect(() => {
    if (totalPages > 1 && totalPages > previousPagesLength.current) {
      messagesAreaRef.current?.scrollBy({ top: 100, behavior: 'auto' });
    }
    previousPagesLength.current = totalPages;
  }, [totalPages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const requestScrollToBottom = () => {
    shouldScrollToBottomRef.current = true;
  };

  const executeScrollIfNeeded = () => {
    if (shouldScrollToBottomRef.current) {
      scrollToBottom();
      shouldScrollToBottomRef.current = false;
    }
  };

  return {
    loadRef,
    messagesAreaRef,
    messagesEndRef,
    requestScrollToBottom,
    executeScrollIfNeeded,
  };
};
