import { useQuery } from '@tanstack/react-query';
import { DiariesAPI } from '@/api/diaries';
import type { MonthlyDiary } from '@/api/types';

export const useMonthlyDiaries = (month: string) => {
  return useQuery<MonthlyDiary[]>({
    queryKey: ['monthly-diaries', month],
    queryFn: () => DiariesAPI.getMonthlyDiaries(month),
  });
};
