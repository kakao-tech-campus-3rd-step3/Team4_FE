import { Typography } from '@/components/common/Typography';
import styled from '@emotion/styled';
import type { StoreItem } from '../types/Item';
import { Grid, ItemImage, ItemInfo, StoreItemCard } from './ItemGrid.styles';

const ItemHeart = styled.img`
  width: 13px;
  height: 13px;
`;

function ItemStoreGrid({ items }: { items: StoreItem[] }) {
  const purchaseItem = (item: StoreItem) => {
    if (item.isOwned) {
      return;
    }

    // 상점 아이템 구매, POST, /api/items/{id}
    console.log('상점 아이템 구매: ', item.id);
  };

  return (
    <Grid>
      {items.map((item) => (
        <StoreItemCard key={item.id} $isOwned={item.isOwned} onClick={() => purchaseItem(item)}>
          <ItemImage src={item.imageUrl} alt={item.name} />
          <ItemInfo>
            <ItemHeart src={`${import.meta.env.BASE_URL}assets/character/hearts.png`} alt="heart" />
            <Typography variant="body2Regular" color="default">
              {item.price}
            </Typography>
          </ItemInfo>
        </StoreItemCard>
      ))}
    </Grid>
  );
}

export default ItemStoreGrid;
