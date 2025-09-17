import { Typography } from '@/components/common/Typography';
import { BASE_URL } from '@/constants/routes';
import type { StoreItem } from '../types/Item';
import { ItemImage } from './ItemGrid.styles';
import { ModalContent, PurchaseButton } from './ItemModal.styles';
import { ItemHeart } from './ItemStoreGrid';

function ItemPurchaseModal({
  selectedItem,
  mutate,
}: {
  selectedItem: StoreItem;
  mutate: (item: StoreItem) => void;
}) {
  const handleClick = async () => {
    mutate(selectedItem);
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
