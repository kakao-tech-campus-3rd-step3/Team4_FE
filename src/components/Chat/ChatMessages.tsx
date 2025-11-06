import { Typography } from '@/components/common/Typography';
import { LoadingSpinner, LoadingSpinnerWrapper } from '@/components/common/LoadingSpinner';
import { BASE_URL } from '@/constants/routes';
import {
  ChatMessagesArea,
  AssistantMessageContainer,
  UserMessageContainer,
  CharacterAvatar,
  AssistantBubble,
  UserBubble,
} from '@/components/Chat/Chat.styles';

type Chat = {
  role: 'user' | 'assistant';
  message: string | React.ReactNode;
};

interface ChatMessagesProps {
  chatLog: Chat[];
  messagesEndRef: React.RefObject<HTMLDivElement | null>;
  loadRef: React.RefObject<HTMLDivElement | null>;
  messagesAreaRef: React.RefObject<HTMLDivElement | null>;
  isLoadingHistory: boolean;
}

export const ChatMessages = ({
  chatLog,
  messagesEndRef,
  loadRef,
  messagesAreaRef,
  isLoadingHistory,
}: ChatMessagesProps) => {
  return (
    <ChatMessagesArea ref={messagesAreaRef}>
      <div ref={loadRef} style={{ height: '200px', width: '100%' }} />
      {isLoadingHistory && (
        <LoadingSpinnerWrapper>
          <LoadingSpinner size={30} />
        </LoadingSpinnerWrapper>
      )}
      {chatLog.length > 0 ? (
        <>
          {chatLog.map((chat, index) => (
            <div key={index}>
              {chat.role === 'assistant' ? (
                <AssistantMessageContainer>
                  <CharacterAvatar
                    src={`${BASE_URL}assets/character/default.png`}
                    alt="character"
                  />
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
        </>
      ) : (
        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '40px' }}>
          <Typography variant="label2Regular" color="gray800">
            자유롭게 채팅을 시작해보세요!
          </Typography>
        </div>
      )}
    </ChatMessagesArea>
  );
};
