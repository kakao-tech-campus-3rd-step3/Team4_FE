import type { StoreItem } from '@/api/types';
import { useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { useEffect, useMemo, useRef } from 'react';

export const useStoreItemsInfinite = ({
  queryKey,
  queryFn,
}: {
  queryKey: string[];
  queryFn: (ctx: { pageParam: number }) => Promise<{ content: StoreItem[]; last: boolean }>;
}) => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useSuspenseInfiniteQuery({
    queryKey: queryKey,
    queryFn: queryFn,
    getNextPageParam: (lastPage, _, lastPageParam) =>
      !lastPage.last ? lastPageParam + 1 : undefined,
    initialPageParam: 1,
  });

  const flattenedStoreItems = useMemo(() => data?.pages.flatMap((p) => p.content) ?? [], [data]);

  const loadMoreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = loadMoreRef.current;
    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (target.isIntersecting) {
          if (!hasNextPage || isFetchingNextPage) {
            return;
          }
          fetchNextPage();
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      },
    );

    observer.observe(node);
    return () => {
      observer.unobserve(node);
      observer.disconnect();
    };
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  return {
    flattenedStoreItems,
    loadMoreRef,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  };
};
