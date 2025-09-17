import { Typography } from '@/components/common/Typography';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { BASE_URL } from '../../../constants/routes';
import type { StoreItem } from '../types/Item';
import { ItemImage } from './ItemGrid.styles';
import { ModalContent, PurchaseButton } from './ItemModal.styles';
import { ItemHeart } from './ItemStoreGrid';

function ItemPurchaseModal({ selectedItem }: { selectedItem: StoreItem }) {
  const queryClient = useQueryClient();

  const purchaseMutation = useMutation({
    mutationFn: (item: StoreItem) =>
      fetch(`${import.meta.env.VITE_API_BASE_URL}/api/items/${item.id}`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
        },
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['storeItems'] });
      queryClient.invalidateQueries({ queryKey: ['ownedItems'] });
    },
    onError: (error) => {
      // eslint-disable-next-line no-console
      console.error(error);
    },
  });

  const handleClick = () => {
    purchaseMutation.mutate(selectedItem);
  };

  return <ItemPurchaseView selectedItem={selectedItem} handleClick={handleClick} />;
}

function ItemPurchaseView({
  selectedItem,
  handleClick,
}: {
  selectedItem: StoreItem;
  handleClick: () => void;
}) {
  return (
    <ModalContent>
      <ItemImage src={selectedItem?.imageUrl} alt={selectedItem?.name} />
      <Typography variant="body1Regular" color="default">
        {selectedItem?.name} 구매하기
      </Typography>
      <PurchaseButton onClick={handleClick}>
        <ItemHeart src={`${BASE_URL}assets/character/hearts.png`} alt="heart" />
        <Typography variant="body2Regular" color="default">
          {selectedItem?.price}
        </Typography>
      </PurchaseButton>
    </ModalContent>
  );
}

export default ItemPurchaseModal;
