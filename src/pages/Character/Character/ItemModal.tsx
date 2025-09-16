import { Typography } from '@/components/common/Typography';
import { BASE_URL } from '../../../constants/routes';
import type { StoreItem } from '../types/Item';
import { ItemImage } from './ItemGrid.styles';
import { ModalContent, PurchaseButton } from './ItemModal.styles';
import { ItemHeart } from './ItemStoreGrid';

function ItemModal({ selectedItem }: { selectedItem: StoreItem }) {
  const purchaseItem = async (item: StoreItem) => {
    if (item.isOwned) {
      return;
    }

    try {
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/items/${item.id}`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
        },
      });

      if (!res.ok) {
        throw new Error(`error:  ${res.status}`);
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  };

  return (
    <ModalContent>
      <ItemImage src={selectedItem?.imageUrl} alt={selectedItem?.name} />
      <Typography variant="body1Regular" color="default">
        {selectedItem?.name} 구매하기
      </Typography>
      <PurchaseButton onClick={() => purchaseItem(selectedItem)}>
        <ItemHeart src={`${BASE_URL}assets/character/hearts.png`} alt="heart" />
        <Typography variant="body2Regular" color="default">
          {selectedItem?.price}
        </Typography>
      </PurchaseButton>
    </ModalContent>
  );
}

export default ItemModal;
