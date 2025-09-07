import { Typography } from '@/components/common/Typography';
import styled from '@emotion/styled';
import type { Item } from '../types/Item';

const Grid = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing[2]};
  padding-inline: ${({ theme }) => theme.spacing[2]};
  padding-top: ${({ theme }) => theme.spacing[2]};
`;

const ItemCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.brand.primary};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing[1]};
`;

const ItemImage = styled.img`
  height: 70px;
  object-fit: contain;
`;

function ItemGrid({ items }: { items: Item[] }) {
  return (
    <Grid>
      {items.map((item) => (
        <ItemCard key={item.id}>
          <ItemImage src={item.imageUrl} alt={item.name} />
          <Typography variant="body2Regular" color="default">
            {item.price}
          </Typography>
        </ItemCard>
      ))}
    </Grid>
  );
}

export default ItemGrid;
