import { Typography } from '@/components/common/Typography';
import type { SelectedItem } from '@/pages/Character/types/Item';
import { EmptyItemContainer, Grid, ItemImage, OwnedItemCard } from '../ItemGrid.styles';

function OwnedItemsGridView({
  items,
  handleClick,
}: {
  items: SelectedItem[] | undefined;
  handleClick: (item: SelectedItem) => void;
}) {
  if (items && items.length === 0) {
    return (
      <EmptyItemContainer>
        <Typography variant="body2Regular" color="default">
          보유 중인 아이템이 없습니다
        </Typography>
      </EmptyItemContainer>
    );
  }

  return (
    <Grid>
      {items &&
        items.map((item) => (
          <OwnedItemCard key={item.id} onClick={() => handleClick(item)} $isSelected={item.isUsed}>
            <ItemImage src={item.imageUrl} alt={item.name} />
          </OwnedItemCard>
        ))}
    </Grid>
  );
}

export default OwnedItemsGridView;
