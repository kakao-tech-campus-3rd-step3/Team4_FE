import { useMemo } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { CatsAPI } from '@/api/cats';

export const useChatHistory = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: ['chatHistory'],
    queryFn: ({ pageParam = 0 }) =>
      CatsAPI.loadChatHistory({ params: { size: 10, page: pageParam } }),
    getNextPageParam: (lastPage) => {
      if (lastPage.number + 1 < lastPage.totalPages) {
        return lastPage.number + 1;
      }
      return undefined;
    },
    initialPageParam: 0,
  });

  const chatHistory = useMemo(
    () =>
      data?.pages
        .slice()
        .reverse()
        .flatMap((page) =>
          page.content
            .sort((a, b) => a.chatId - b.chatId)
            .flatMap((log) => [{ role: log.role, message: log.message }]),
        ) || [],
    [data],
  );

  return {
    chatHistory,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    totalPages: data?.pages.length || 0,
  };
};
