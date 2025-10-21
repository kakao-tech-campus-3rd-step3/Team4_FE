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
    {
      role: 'user',
      message: '고마워! 스트레칭 해보니까 좀 나아진 것 같아',
    },
    {
      role: 'assistant',
      message:
        '정말 다행이에요! 😊 몸이 피곤할 때는 가벼운 운동이 도움이 많이 돼요. 오늘 하루도 화이팅하세요!',
    },
    {
      role: 'user',
      message: '그런데 요즘 일이 너무 많아서 스트레스가 심해',
    },
    {
      role: 'assistant',
      message:
        '일이 많으시군요 😟 스트레스 관리도 정말 중요해요. 혹시 어떤 방법으로 스트레스를 해소하고 계신가요?',
    },
    {
      role: 'user',
      message: '음... 음악 듣는 것 정도?',
    },
    {
      role: 'assistant',
      message:
        '음악 듣기 좋은 방법이에요! 🎵 혹시 산책도 해보시면 어떨까요? 신선한 공기와 함께 걷는 것도 스트레스 해소에 도움이 많이 돼요.',
    },
    {
      role: 'user',
      message: '산책... 좋은 아이디어네. 내일 아침에 한번 해볼게',
    },
    {
      role: 'assistant',
      message:
        '좋은 계획이에요! 🌅 아침 산책은 하루를 상쾌하게 시작할 수 있게 해줘요. 내일 아침 날씨도 좋을 것 같으니 즐거운 산책 되세요!',
    },
    {
      role: 'user',
      message: '고마워! 너와 이야기하니까 기분이 좋아졌어',
    },
    {
      role: 'assistant',
      message:
        '저도 정말 기뻐요! 😊 언제든지 힘들거나 이야기하고 싶을 때 찾아주세요. 항상 여기 있을게요!',
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
