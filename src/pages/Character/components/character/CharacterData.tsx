import { fetchOwnedItems, fetchStoreItems } from '@/api/api';
import QUERY_KEY from '@/constants/queryKey';
import { useInfiniteQuery, useSuspenseQuery } from '@tanstack/react-query';
import { useEffect, useMemo, useRef } from 'react';
import { Container } from './Character.styles';
import CharacterContent from './CharacterContent';
import CharacterTab from './CharacterTab';

function CharacterData() {
  const {
    data: storeItemsData,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: [QUERY_KEY.STORE_ITEMS],
    queryFn: fetchStoreItems,
    getNextPageParam: (lastPage, _, lastPageParam) =>
      !lastPage.last ? lastPageParam + 1 : undefined,
    initialPageParam: 1,
  });

  const flattenedStoreItems = useMemo(
    () => storeItemsData?.pages.flatMap((p) => p.content) ?? [],
    [storeItemsData],
  );

  const { data: ownedItems } = useSuspenseQuery({
    queryKey: [QUERY_KEY.OWNED_ITEMS],
    queryFn: fetchOwnedItems,
  });

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

  return (
    <Container>
      <CharacterContent ownedItems={ownedItems} />
      <CharacterTab storeItems={flattenedStoreItems} ownedItems={ownedItems} />
      <div ref={loadMoreRef} style={{ height: '200px' }} />
    </Container>
  );
}

export default CharacterData;
