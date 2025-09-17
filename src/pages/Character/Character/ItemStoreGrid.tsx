import { LoadingSpinner, LoadingSpinnerWrapper } from '@/components/common/LoadingSpinner';
import { Typography } from '@/components/common/Typography';
import { BASE_URL } from '@/constants/routes';
import styled from '@emotion/styled';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import QUERY_KEY from '../../../constants/queryKey';
import type { StoreItem } from '../types/Item';
import { EmptyItemContainer, Grid, ItemImage, ItemInfo, StoreItemCard } from './ItemGrid.styles';
import ItemModal from './ItemModal';
import { ModalBackdrop } from './ItemModal.styles';

export const ItemHeart = styled.img`
  width: 13px;
  height: 13px;
`;

function ItemStoreGrid({ items }: { items: StoreItem[] }) {
  const [selectedItem, setSelectedItem] = useState<StoreItem | null>(null);
  const isModalOpen = !selectedItem?.isOwned;

  const handleSelectItem = (item: StoreItem) => {
    setSelectedItem(item);
  };

  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: (item: StoreItem) =>
      fetch(`${import.meta.env.VITE_API_BASE_URL}/api/items/${item.id}`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
        },
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.STORE_ITEMS] });
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.OWNED_ITEMS] });
    },
    onError: (error) => {
      // eslint-disable-next-line no-console
      console.error(error);
    },
  });

  if (items && items.length === 0) {
    return (
      <EmptyItemContainer>
        <Typography variant="body2Regular" color="default">
          아이템이 없습니다
        </Typography>
      </EmptyItemContainer>
    );
  }

  return (
    <>
      {isModalOpen && selectedItem && (
        <ModalBackdrop onClick={() => setSelectedItem(null)}>
          <ItemModal selectedItem={selectedItem} mutate={mutate} />
        </ModalBackdrop>
      )}
      <Grid>
        {isPending ? (
          <LoadingSpinnerWrapper>
            <LoadingSpinner />
          </LoadingSpinnerWrapper>
        ) : (
          items.map((item) => (
            <StoreItemCard
              key={item.id}
              $isOwned={item.isOwned}
              onClick={() => handleSelectItem(item)}
            >
              <ItemImage src={item.imageUrl} alt={item.name} />
              <ItemInfo>
                <ItemHeart src={`${BASE_URL}assets/character/hearts.png`} alt="heart" />
                <Typography variant="body2Regular" color="default">
                  {item.price}
                </Typography>
              </ItemInfo>
            </StoreItemCard>
          ))
        )}
      </Grid>
    </>
  );
}

export default ItemStoreGrid;
