import { ItemsAPI } from '@/api/items';
import QUERY_KEY from '@/constants/queryKey';
import type { StoreItem } from '@/pages/Character/types/Item';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { Grid } from '../ItemGrid.styles';
import ItemGrid from './ItemGrid';
import PurchaseItemModal from './PurchaseItemModal';

function ItemStoreGrid({ items }: { items: StoreItem[] }) {
  const [selectedItem, setSelectedItem] = useState<StoreItem | null>(null);

  const handleSelectItem = (item: StoreItem) => {
    setSelectedItem(item);
  };

  const handlePurchaseItem = (item: StoreItem) => {
    mutate(item.id);
  };

  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: ItemsAPI.buy,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.STORE_ITEMS] });
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.OWNED_ITEMS] });
    },
    onError: (error) => {
      throw new Error(error.message);
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
