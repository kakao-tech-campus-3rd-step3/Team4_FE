import { fetchOwnedItems, fetchStoreItems } from '@/api/api';
import { LoadingSpinner, LoadingSpinnerWrapper } from '@/components/common/LoadingSpinner';
import QUERY_KEY from '@/constants/queryKey';
import { useSuspenseQuery } from '@tanstack/react-query';
import { useStoreItemsInfinite } from '../../hooks/useStoreItemsInfinite';
import { Container, LoadingContainer, ObserverContainer } from './Character.styles';
import CharacterContent from './CharacterContent';
import CharacterTab from './CharacterTab';

function CharacterData() {
  const { flattenedStoreItems, loadMoreRef, isFetchingNextPage } = useStoreItemsInfinite({
    queryKey: [QUERY_KEY.STORE_ITEMS],
    queryFn: fetchStoreItems,
  });

  const { data: ownedItems } = useSuspenseQuery({
    queryKey: [QUERY_KEY.OWNED_ITEMS],
    queryFn: fetchOwnedItems,
  });

  return (
    <Container>
      <CharacterContent ownedItems={ownedItems} />
      <CharacterTab storeItems={flattenedStoreItems} ownedItems={ownedItems} />
      {isFetchingNextPage ? (
        <LoadingContainer>
          <LoadingSpinnerWrapper>
            <LoadingSpinner />
          </LoadingSpinnerWrapper>
        </LoadingContainer>
      ) : (
        <ObserverContainer ref={loadMoreRef} />
      )}
    </Container>
  );
}

export default CharacterData;
