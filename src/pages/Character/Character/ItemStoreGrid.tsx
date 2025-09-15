import { Typography } from '@/components/common/Typography';
import { DESIGN_BASE, DESIGN_RATIO } from '@/constants/layout';
import { BASE_URL } from '@/constants/routes';
import styled from '@emotion/styled';
import { useState } from 'react';
import type { StoreItem } from '../types/Item';
import { Grid, ItemImage, ItemInfo, StoreItemCard } from './ItemGrid.styles';

const ItemHeart = styled.img`
  width: 13px;
  height: 13px;
`;

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: clamp(
    ${DESIGN_BASE.MIN_WIDTH}px,
    calc(100vh * ${DESIGN_RATIO.W} / ${DESIGN_RATIO.H}),
    ${DESIGN_BASE.MAX_WIDTH}px
  );
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  width: 80%;
  height: 25%;
  background-color: ${({ theme }) => theme.colors.brand.primary};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing[4]};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[3]};
`;

const PurchaseButton = styled.button`
  width: 100%;
  height: 40px;
  border: 1px solid ${({ theme }) => theme.colors.brand.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background-color: ${({ theme }) => theme.colors.button.default};
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};

  &:hover {
    background-color: ${({ theme }) => theme.colors.button.hover};
  }

  &:active {
    transform: translateY(1px);
  }
`;

function ItemStoreGrid({ items }: { items: StoreItem[] }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<StoreItem | null>(null);

  const handleSelectItem = (item: StoreItem) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const purchaseItem = (item: StoreItem) => {
    if (item.isOwned) {
      return;
    }
  };

  return (
    <>
      {modalOpen && (
        <ModalBackdrop onClick={() => setModalOpen(false)}>
          <ModalContent>
            <ItemImage src={selectedItem?.imageUrl} alt={selectedItem?.name} />
            <Typography variant="body1Regular" color="default">
              {selectedItem?.name} 구매하기
            </Typography>
            <PurchaseButton onClick={() => selectedItem && purchaseItem(selectedItem)}>
              <ItemHeart src={`${BASE_URL}assets/character/hearts.png`} alt="heart" />
              <Typography variant="body2Regular" color="default">
                {selectedItem?.price}
              </Typography>
            </PurchaseButton>
          </ModalContent>
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
