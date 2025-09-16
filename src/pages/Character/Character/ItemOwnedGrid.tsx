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
  const handleItemEquip = async (item: SelectedItem) => {
    if (item.isUsed) {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/me/items/${item.id}`, {
          method: 'PATCH',
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            isUsed: false,
          }),
        });

        if (!res.ok) {
          throw new Error(`error:  ${res.status}`);
        }

        setSelectedItemId(null);
      } catch (error) {
        console.error(error);
      }
      return;
    }

    try {
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/me/items/${item.id}`, {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          isUsed: true,
        }),
      });

      if (!res.ok) {
        throw new Error(`error:  ${res.status}`);
      }

      setSelectedItemId(item.id);
    } catch (error) {
      console.error(error);
    }
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
