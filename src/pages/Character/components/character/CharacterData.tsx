import QUERY_KEY from '@/constants/queryKey';
import { useSuspenseQuery } from '@tanstack/react-query';
import type { StoreItem } from '../../types/Item';
import { Container } from './Character.styles';
import CharacterContent from './CharacterContent';
import CharacterTab from './CharacterTab';

function CharacterData() {
  const { data: storeItems } = useSuspenseQuery({
    queryKey: [QUERY_KEY.STORE_ITEMS],
    queryFn: () =>
      fetch(`${import.meta.env.VITE_API_BASE_URL}/api/items?page=1&category=HAT`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
        },
      })
        .then((res) => res.json())
        .then((data) =>
          data.content.sort((a: StoreItem, b: StoreItem) => {
            if (a.isOwned && !b.isOwned) {
              return 1;
            }
            if (!a.isOwned && b.isOwned) {
              return -1;
            }
            return 0;
          }),
        ),
  });

  const { data: ownedItems } = useSuspenseQuery({
    queryKey: [QUERY_KEY.OWNED_ITEMS],
    queryFn: () =>
      fetch(`${import.meta.env.VITE_API_BASE_URL}/api/me/items`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
        },
      }).then((res) => res.json()),
  });

  return (
    <Container>
      <CharacterContent ownedItems={ownedItems} />
      <CharacterTab storeItems={storeItems} ownedItems={ownedItems} />
    </Container>
  );
}

export default CharacterData;
