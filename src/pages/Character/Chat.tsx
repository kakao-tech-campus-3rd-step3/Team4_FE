import type { ChatResponse } from '@/api/types';
import { Typography } from '@/components/common/Typography';
import { BASE_URL } from '@/constants/routes';
import { useRef, useState } from 'react';
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

type Chat = {
  role: 'user' | 'assistant';
} & ChatResponse;

function CharacterChat() {
  const navigate = useNavigate();
  const [chatLog, setChatLog] = useState<Chat[]>([]);

  const { mutateAsync: send } = useMutation({
    mutationFn: (payload: { message: string }) => CatsAPI.sendMessage(payload),
  });

  const inputRef = useRef<HTMLInputElement>(null);

  const handleSendMessage = async () => {
    const message = inputRef.current?.value;

    if (!message) {
      return;
    }

    setChatLog([...chatLog, { role: 'user', message }]);

    if (inputRef.current) {
      inputRef.current.value = '';
    }

    const response = await send({ message });

    setChatLog((prev) => [...prev, { role: 'assistant', message: response.message }]);
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
                  <Typography variant="label2Regular" color="gray900">
                    {chat.message}
                  </Typography>
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
