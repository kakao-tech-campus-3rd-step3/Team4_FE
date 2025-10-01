import { LoadingSpinner, LoadingSpinnerWrapper } from '@/components/common/LoadingSpinner';
import { Typography } from '@/components/common/Typography';
import { BASE_URL } from '@/constants/routes';
import type { StoreItem } from '@/pages/Character/types/Item';
import { EmptyItemContainer, ItemImage, ItemInfo } from '../ItemGrid.styles';
import { ItemHeart, StoreItemCard } from './StoredItems.styles';

function ItemGrid({
  items,
  isPending,
  handleSelectItem,
}: {
  items: StoreItem[];
  isPending: boolean;
  handleSelectItem: (item: StoreItem) => void;
}) {
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
    </>
  );
}

export default ItemGrid;
