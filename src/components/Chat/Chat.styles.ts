import styled from '@emotion/styled';
import { theme } from '@/styles/theme';

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`;

export const HeaderSection = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1.5px solid ${theme.colors.colorScale.brown100};
  padding-inline: ${theme.spacing[2]};
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: ${theme.spacing[2]};
  border-radius: ${theme.borderRadius.sm};
  display: flex;
  align-items: center;
  gap: ${theme.spacing[2]};
  transition: background-color 0.2s ease;
`;

export const BackIcon = styled.span`
  font-size: 20px;
`;

export const BackArrowIcon = styled.svg`
  width: 20px;
  height: 20px;
  fill: ${theme.colors.colorScale.gray900};
`;

export const SendArrowIcon = styled.svg`
  width: 20px;
  height: 20px;
  fill: ${theme.colors.colorScale.brown900};
`;

export const ChatMessagesArea = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: ${theme.spacing[4]};
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[4]};
`;

export const AssistantMessageContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${theme.spacing[2]};
  align-self: flex-start;
`;

export const UserMessageContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${theme.spacing[2]};
  align-self: flex-end;
  justify-content: flex-end;
`;

export const CharacterAvatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: contain;
  flex-shrink: 0;
  background-color: ${theme.colors.brand.primary};
  padding: ${theme.spacing[1]};
`;

export const AssistantBubble = styled.div`
  background-color: ${theme.colors.brand.primary};
  border: 1.5px solid ${theme.colors.brand.border};
  border-radius: ${theme.borderRadius.xs} ${theme.borderRadius.lg} ${theme.borderRadius.lg}
    ${theme.borderRadius.lg};
  padding: ${theme.spacing[3]} ${theme.spacing[4]};
  max-width: 80%;
  width: 60%;
  word-wrap: break-word;
`;

export const UserBubble = styled.div`
  background-color: ${theme.colors.colorScale.orange100};
  border: 1.5px solid ${theme.colors.colorScale.orange200};
  border-radius: ${theme.borderRadius.lg} ${theme.borderRadius.xs} ${theme.borderRadius.lg}
    ${theme.borderRadius.lg};
  padding: ${theme.spacing[3]} ${theme.spacing[4]};
  max-width: 80%;
  word-wrap: break-word;
`;

export const InputSection = styled.div`
  border-top: 1.5px solid ${theme.colors.colorScale.brown100};
`;

export const InputContainer = styled.div`
  display: flex;
  gap: ${theme.spacing[2]};
  align-items: center;
  margin-block: ${theme.spacing[3]};
  margin-inline: ${theme.spacing[2]};
`;

export const MessageInput = styled.input`
  flex: 1;
  padding: ${theme.spacing[3]} ${theme.spacing[5]};
  border: 1.5px solid ${theme.colors.brand.border};
  border-radius: ${theme.borderRadius.md};
  outline: none;
  font-size: ${theme.typography.label2Regular.fontSize};
  background-color: ${theme.colors.brand.primary};
  transition: border-color 0.2s ease;
  font-family: 'OngleipEoyeonce';

  &:focus {
    border-color: ${theme.colors.colorScale.brown500};
  }
`;

export const SendButton = styled.button`
  background-color: ${theme.colors.brand.border};
  border: none;
  border-radius: ${theme.borderRadius.md};
  width: 50px;
  height: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${theme.colors.colorScale.brown500};
  }
`;

export const SendIcon = styled.span`
  color: ${theme.colors.colorScale.brown0};
  font-size: 18px;
`;
