import { Typography } from '@/components/common/Typography';
import { BASE_URL } from '@/constants/routes';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ChatContainer,
  HeaderSection,
  BackButton,
  BackIcon,
  ChatMessagesArea,
  AssistantMessageContainer,
  UserMessageContainer,
  CharacterAvatar,
  AssistantBubble,
  UserBubble,
  InputSection,
  InputContainer,
  MessageInput,
  SendButton,
  SendIcon,
} from './Chat.styles';
import { useMutation } from '@tanstack/react-query';
import { CatsAPI } from '@/api/cats';
import { LoadingSpinner, LoadingSpinnerWrapper } from '@/components/common/LoadingSpinner';

type Chat = {
  role: 'user' | 'assistant';
  message: string | React.ReactNode;
};

function CharacterChat() {
  const navigate = useNavigate();
  const [chatLog, setChatLog] = useState<Chat[]>([]);

  const { mutateAsync: send } = useMutation({
    mutationFn: (payload: { message: string }) => CatsAPI.sendMessage(payload),
  });

  const inputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

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
            <LoadingSpinner />
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
    <ChatContainer>
      {/* 상단 뒤로가기 버튼 */}
      <HeaderSection>
        <BackButton
          onClick={() => {
            navigate('/character');
          }}
        >
          <BackIcon>←</BackIcon>
          <Typography variant="body2Regular" color="gray900">
            뒤로가기
          </Typography>
        </BackButton>
      </HeaderSection>

      {/* 채팅 메시지 영역 (스크롤) */}
      <ChatMessagesArea>
        {chatLog.map((chat, index) => (
          <div key={index}>
            {chat.role === 'assistant' ? (
              <AssistantMessageContainer>
                <CharacterAvatar src={`${BASE_URL}assets/character/default.png`} alt="character" />
                <AssistantBubble>
                  {typeof chat.message === 'string' ? (
                    <Typography variant="label2Regular" color="gray900">
                      {chat.message}
                    </Typography>
                  ) : (
                    chat.message
                  )}
                </AssistantBubble>
              </AssistantMessageContainer>
            ) : (
              <UserMessageContainer>
                <UserBubble>
                  <Typography variant="label2Regular" color="gray900">
                    {chat.message}
                  </Typography>
                </UserBubble>
              </UserMessageContainer>
            )}
          </div>
        ))}
        {/* 스크롤 마커 */}
        <div ref={messagesEndRef} />
      </ChatMessagesArea>

      {/* 하단 입력란 */}
      <InputSection>
        <InputContainer>
          <MessageInput type="text" placeholder="메시지를 입력하세요..." ref={inputRef} />
          <SendButton onClick={handleSendMessage}>
            <SendIcon>→</SendIcon>
          </SendButton>
        </InputContainer>
      </InputSection>
    </ChatContainer>
  );
}

export default CharacterChat;
