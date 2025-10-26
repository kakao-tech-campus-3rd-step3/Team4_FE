import { useEffect, useMemo } from 'react';
import { ChatContainer as StyledChatContainer } from '@/components/Chat/Chat.styles';
import { ChatHeader } from './ChatHeader';
import { ChatMessages } from './ChatMessages';
import { ChatInput } from './ChatInput';
import { useChatHistory } from './hooks/useChatHistory';
import { useChatScroll } from './hooks/useChatScroll';
import { useSendMessage } from './hooks/useSendMessage.tsx';

export const ChatContainer = () => {
  // 채팅 히스토리 로드
  const { chatHistory, fetchNextPage, hasNextPage, isFetchingNextPage, totalPages } =
    useChatHistory();

  // 스크롤 관리
  const { loadRef, messagesAreaRef, messagesEndRef, requestScrollToBottom, executeScrollIfNeeded } =
    useChatScroll({
      fetchNextPage,
      hasNextPage,
      isFetchingNextPage,
      totalPages,
      chatHistoryLength: chatHistory.length,
    });

  // 메시지 전송
  const sendMessageResult = useSendMessage({
    onBeforeSend: requestScrollToBottom,
    onAfterSend: requestScrollToBottom,
  });
  const { newMessages, inputRef, handleSendMessage } = sendMessageResult;

  const allChats = useMemo(() => [...chatHistory, ...newMessages], [chatHistory, newMessages]);

  // 새로운 채팅이 추가되면 아래로 스크롤
  useEffect(() => {
    executeScrollIfNeeded();
  }, [allChats, executeScrollIfNeeded]);

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
