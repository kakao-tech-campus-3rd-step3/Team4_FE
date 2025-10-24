import { useEffect, useRef, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
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
  const [chatLog, setChatLog] = useState<Chat[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const { mutateAsync: send } = useMutation({
    mutationFn: (payload: { message: string }) => CatsAPI.sendMessage(payload),
  });

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatLog]);

  const handleSendMessage = async () => {
    const message = inputRef.current?.value;

    if (!message) {
      return;
    }

    if (inputRef.current) {
      inputRef.current.value = '';
    }

    setChatLog([
      ...chatLog,
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

    setChatLog((prev) => {
      const newChatLog = [...prev];
      newChatLog.pop();
      newChatLog.push({ role: 'assistant', message: response });
      return newChatLog;
    });
  };

  return (
    <StyledChatContainer>
      <ChatHeader />
      <ChatMessages chatLog={chatLog} messagesEndRef={messagesEndRef} />
      <ChatInput onSendMessage={handleSendMessage} inputRef={inputRef} />
    </StyledChatContainer>
  );
};
