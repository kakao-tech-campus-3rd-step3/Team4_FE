import styled from '@emotion/styled';
import { Typography } from '../../../components/common/Typography';
import theme from '../../../styles/theme';
import type { Item } from '../types/Item';

const Grid = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  padding-inline: 10px;
`;

const ItemCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.brand.primary};
  border-radius: 10px;
  padding: 10px;
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
