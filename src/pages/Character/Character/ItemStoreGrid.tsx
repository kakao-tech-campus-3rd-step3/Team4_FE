import { Typography } from '@/components/common/Typography';
import { BASE_URL } from '@/constants/routes';
import styled from '@emotion/styled';
import { useState } from 'react';
import type { StoreItem } from '../types/Item';
import { EmptyItemContainer, Grid, ItemImage, ItemInfo, StoreItemCard } from './ItemGrid.styles';
import ItemModal from './ItemModal';
import { ModalBackdrop } from './ItemModal.styles';

export const ItemHeart = styled.img`
  width: 13px;
  height: 13px;
`;

function ItemStoreGrid({ items }: { items: StoreItem[] }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<StoreItem | null>(null);

  const handleSelectItem = (item: StoreItem) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

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
      {!selectedItem?.isOwned && modalOpen && selectedItem && (
        <ModalBackdrop onClick={() => setModalOpen(false)}>
          <ItemModal selectedItem={selectedItem} />
        </ModalBackdrop>
      )}
      <Grid>
        {items.map((item) => (
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
        ))}
      </Grid>
    </>
  );
}

export default ItemStoreGrid;
