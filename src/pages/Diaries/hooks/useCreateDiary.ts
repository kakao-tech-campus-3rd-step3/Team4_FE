import { useMutation, useQueryClient } from '@tanstack/react-query';
import { DiariesAPI } from '@/api/diaries';
import type { EmotionEnum } from '@/api/types';

export const useCreateDiary = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: { emotion: EmotionEnum; content: string }) => DiariesAPI.create(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['diaries'] });
    },
    onError: (error) => {
      console.error('일기 생성 중 오류 발생:', error);
    },
  });
};
