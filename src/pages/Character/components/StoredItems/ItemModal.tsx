import { Typography } from '@/components/common/Typography';
import { BASE_URL } from '@/constants/routes';
import type { StoreItem } from '@/pages/Character/types/Item';
import { ItemImage } from '../ItemGrid.styles';
import { ModalContent, PurchaseButton } from './ItemModal.styles';
import { ItemHeart } from './StoredItems.styles';

function ItemModal({
  selectedItem,
  handlePurchaseItem,
}: {
  selectedItem: StoreItem;
  handlePurchaseItem: (item: StoreItem) => void;
}) {
  const handleClick = () => {
    handlePurchaseItem(selectedItem);
  };

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

export default ItemModal;
