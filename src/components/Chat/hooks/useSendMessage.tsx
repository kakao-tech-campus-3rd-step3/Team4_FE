import { useState, useRef } from 'react';
import { useMutation } from '@tanstack/react-query';
import { CatsAPI } from '@/api/cats';
import { LoadingSpinner, LoadingSpinnerWrapper } from '@/components/common/LoadingSpinner';

type Chat = {
  role: 'user' | 'assistant';
  message: string | React.ReactNode;
};

interface UseSendMessageProps {
  onBeforeSend?: () => void;
  onAfterSend?: () => void;
}

interface UseSendMessageReturn {
  newMessages: Chat[];
  inputRef: React.RefObject<HTMLInputElement | null>;
  handleSendMessage: () => Promise<void>;
}

export const useSendMessage = ({
  onBeforeSend,
  onAfterSend,
}: UseSendMessageProps = {}): UseSendMessageReturn => {
  const [newMessages, setNewMessages] = useState<Chat[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const { mutateAsync: send } = useMutation({
    mutationFn: (payload: { message: string }) => CatsAPI.sendMessage(payload),
  });

  const handleSendMessage = async () => {
    const message = inputRef.current?.value;

    if (!message) {
      return;
    }

    // 입력창 초기화
    if (inputRef.current) {
      inputRef.current.value = '';
    }

    onBeforeSend?.();

    // 낙관적 업데이트: 사용자 메시지와 로딩 상태 추가
    setNewMessages((prev) => [
      ...prev,
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

    // 메시지 전송
    const response = (await send({ message })).message;

    onAfterSend?.();

    // 로딩 상태를 실제 응답으로 교체
    setNewMessages((prev) => {
      const updated = [...prev];
      updated.pop();
      updated.push({ role: 'assistant', message: response });
      return updated;
    });
  };

  return {
    newMessages,
    inputRef,
    handleSendMessage,
  };
};
