import type { ChatResponse } from '@/api/types';
import { Typography } from '@/components/common/Typography';
import { BASE_URL } from '@/constants/routes';
import { useState } from 'react';
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

type Chat = {
  role: 'user' | 'assistant';
} & ChatResponse;

function CharacterChat() {
  const navigate = useNavigate();
  const [chatLog] = useState<Chat[]>([
    {
      role: 'assistant',
      message: '안녕하세요! 오늘 기분은 어떠신가요? 😊',
    },
    {
      role: 'user',
      message: '안녕! 오늘은 좀 피곤해',
    },
    {
      role: 'assistant',
      message: '피곤하시군요 😔 그러면 가벼운 스트레칭을 해보는 건 어떨까요?',
    },
    {
      role: 'user',
      message: '좋은 아이디어야! 어떤 스트레칭을 하면 좋을까?',
    },
    {
      role: 'assistant',
      message: '목과 어깨 스트레칭이 좋을 것 같아요! 천천히 머리를 좌우로 돌려보세요 🧘‍♀️',
    },
  ]);

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
          <MessageInput type="text" placeholder="메시지를 입력하세요..." />
          <SendButton>
            <SendIcon>→</SendIcon>
          </SendButton>
        </InputContainer>
      </InputSection>
    </ChatContainer>
  );
}

export default CharacterChat;
