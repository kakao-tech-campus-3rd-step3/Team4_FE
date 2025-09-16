import { Typography } from '@/components/common/Typography';
import type { SelectedItem } from '../types/Item';
import { Grid, ItemImage, ItemInfo, OwnedItemCard } from './ItemGrid.styles';

function ItemOwnedGrid({
  items,
  setSelectedItemId,
}: {
  items: SelectedItem[];
  setSelectedItemId: (itemId: number | null) => void;
}) {
  const handleItemEquip = (item: SelectedItem) => {
    // 아이템 장착/해제, POST, /api/me/items/{id}

    if (item.isUsed) {
      // 아이템 해제
      console.log('아이템 해제: ', item.id);
      console.log('body: ', {
        isUsed: false,
      });

      setSelectedItemId(null);
      return;
    }

    // 아이템 장착, POST, /api/me/items/{id}
    console.log('아이템 장착: ', item.id);
    console.log('body: ', {
      isUsed: true,
    });
    setSelectedItemId(item.id);
  };

  return (
    <Grid>
      {items.length &&
        items.map((item) => (
          <OwnedItemCard
            key={item.id}
            onClick={() => {
              handleItemEquip(item);
            }}
            $isSelected={item.isUsed}
          >
            <ItemImage src={item.imageUrl} alt={item.name} />
            <ItemInfo>
              <Typography variant="body2Regular" color="default">
                {item.price}
              </Typography>
            </ItemInfo>
          </OwnedItemCard>
        ))}
    </Grid>
  );
}

export default ItemOwnedGrid;
