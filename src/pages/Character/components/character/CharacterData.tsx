import { fetchOwnedItems, fetchStoreItems } from '@/api/api';
import QUERY_KEY from '@/constants/queryKey';
import { useInfiniteQuery, useSuspenseQuery } from '@tanstack/react-query';
import { useEffect, useRef } from 'react';
import mocks from '../../../../mockSetup';
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

  console.log(storeItemsData);
  console.log('hasNextPage', hasNextPage);

  const hasNextPageRef = useRef(hasNextPage);

  const { data: ownedItems } = useSuspenseQuery({
    queryKey: [QUERY_KEY.OWNED_ITEMS],
    queryFn: fetchOwnedItems,
  });

  const loadMoreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    hasNextPageRef.current = hasNextPage;
    console.log('hasNextPageRef.current', hasNextPageRef.current);

    if (!loadMoreRef.current) {
      return;
    }

    const observer = new IntersectionObserver(
      async (entries) => {
        const target = entries[0];
        // 현재 함수 내부의 ref 가 정의될때의 값을 바라보고 있음. 클로저 문제
        // 이건 왜 다시 실행이 안되냐?
        console.log('함수 내부: hasNextPageRef.current', hasNextPageRef.current);
        if (target.isIntersecting && hasNextPageRef.current) {
          console.log('intersecting');
          fetchNextPage();
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      },
    );

    observer.observe(loadMoreRef.current);

    return () => {
      loadMoreRef.current = null;
      observer.disconnect();
    };
  }, [hasNextPage]);

  return (
    <Container>
      <CharacterContent ownedItems={ownedItems} />
      <CharacterTab storeItems={mocks.data.characterStoreItemsMock} ownedItems={ownedItems} />
      <div style={{ width: '100%', height: '100px', background: 'red' }} ref={loadMoreRef}></div>
    </Container>
  );
}

export default CharacterData;
