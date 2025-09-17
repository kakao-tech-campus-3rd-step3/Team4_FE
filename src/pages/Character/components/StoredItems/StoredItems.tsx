import QUERY_KEY from '@/constants/queryKey';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import type { StoreItem } from '../../types/Item';
import { Grid } from '../ItemGrid.styles';
import ItemGrid from './ItemGrid';
import PurchaseItemModal from './PurchaseItemModal';

function ItemStoreGrid({ items }: { items: StoreItem[] }) {
  const [selectedItem, setSelectedItem] = useState<StoreItem | null>(null);

  const handleSelectItem = (item: StoreItem) => {
    setSelectedItem(item);
  };

  const handlePurchaseItem = (item: StoreItem) => {
    mutate(item);
  };

  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: (item: StoreItem) =>
      fetch(`${import.meta.env.VITE_API_BASE_URL}/api/items/${item.id}`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
        },
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.STORE_ITEMS] });
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.OWNED_ITEMS] });
    },
    onError: (error) => {
      // eslint-disable-next-line no-console
      console.error(error);
    },
  });

  return (
    <>
      <PurchaseItemModal
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
        handlePurchaseItem={handlePurchaseItem}
      />
      <Grid>
        <ItemGrid items={items} isPending={isPending} handleSelectItem={handleSelectItem} />
      </Grid>
    </>
  );
}

export default ItemStoreGrid;
