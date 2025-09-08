import { Typography } from '@/components/common/Typography';
import styled from '@emotion/styled';
import type { StoreItem } from '../types/Item';

const Grid = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing[2]};
  padding-inline: ${({ theme }) => theme.spacing[2]};
  padding-top: ${({ theme }) => theme.spacing[2]};
`;

const ItemCard = styled.div<{ $isOwned?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.brand.primary};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing[1]};
  opacity: ${({ $isOwned }) => ($isOwned ? 1 : 0.5)};

  cursor: ${({ $isOwned }) => ($isOwned ? 'pointer' : 'default')};
`;

const ItemImage = styled.img`
  height: 70px;
  object-fit: contain;
`;

const ItemInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[1]};
`;

const ItemHeart = styled.img`
  width: 13px;
  height: 13px;
`;

function ItemStoreGrid({ items }: { items: StoreItem[] }) {
  return (
    <Grid>
      {items.map((item) => (
        <ItemCard key={item.id} $isOwned={item.isOwned}>
          <ItemImage src={item.imageUrl} alt={item.name} />
          <ItemInfo>
            <ItemHeart src={`${import.meta.env.BASE_URL}assets/character/hearts.png`} alt="heart" />
            <Typography variant="body2Regular" color="default">
              {item.price}
            </Typography>
          </ItemInfo>
        </ItemCard>
      ))}
    </Grid>
  );
}

export default ItemStoreGrid;
