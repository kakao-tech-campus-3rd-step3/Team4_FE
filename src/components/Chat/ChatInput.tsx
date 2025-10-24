import {
  InputSection,
  InputContainer,
  MessageInput,
  SendButton,
  SendIcon,
} from '@/components/Chat/Chat.styles';

interface ChatInputProps {
  onSendMessage: () => void;
  inputRef: React.RefObject<HTMLInputElement | null>;
}

export const ChatInput = ({ onSendMessage, inputRef }: ChatInputProps) => {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onSendMessage();
    }
  };

  return (
    <InputSection>
      <InputContainer>
        <MessageInput
          type="text"
          placeholder="메시지를 입력하세요..."
          ref={inputRef}
          onKeyDown={handleKeyDown}
        />
        <SendButton onClick={onSendMessage}>
          <SendIcon>→</SendIcon>
        </SendButton>
      </InputContainer>
    </InputSection>
  );
};
