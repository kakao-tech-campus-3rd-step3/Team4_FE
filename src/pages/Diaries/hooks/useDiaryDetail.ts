import { useQuery } from '@tanstack/react-query';
import { DiariesAPI } from '@/api/diaries';
import type { Diary } from '@/api/types';

export const useDiaryDetail = (id: number | null) => {
  return useQuery<Diary>({
    queryKey: ['diary-detail', id],
    queryFn: () => DiariesAPI.detail(String(id)),
    enabled: !!id, // id가 있을 때만 API 호출
  });
};
