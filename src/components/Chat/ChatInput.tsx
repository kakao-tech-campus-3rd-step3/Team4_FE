import {
  InputSection,
  InputContainer,
  MessageInput,
  SendButton,
  SendArrowIcon,
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
          <SendArrowIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 108.06">
            <path d="M58.94,24.28a14.27,14.27,0,0,1,20.35-20l39.49,40.16a14.28,14.28,0,0,1,0,20L80.09,103.79a14.27,14.27,0,1,1-20.35-20L74.82,68.41l-60.67-.29a14.27,14.27,0,0,1,.24-28.54l59.85.28L58.94,24.28Z" />
          </SendArrowIcon>
        </SendButton>
      </InputContainer>
    </InputSection>
  );
};
