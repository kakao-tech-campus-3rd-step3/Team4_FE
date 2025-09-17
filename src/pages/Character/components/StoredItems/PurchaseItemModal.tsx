import type { StoreItem } from '../../types/Item';
import { ModalBackdrop } from '../ItemModal.styles';
import ItemModal from './ItemModal';

function PurchaseItemModal({
  selectedItem,
  setSelectedItem,
  handlePurchaseItem,
}: {
  selectedItem: StoreItem | null;
  setSelectedItem: (item: StoreItem | null) => void;
  handlePurchaseItem: (item: StoreItem) => void;
}) {
  const isModalOpen = !selectedItem?.isOwned;

  if (!isModalOpen || !selectedItem) {
    return null;
  }

  return (
    <ModalBackdrop onClick={() => setSelectedItem(null)}>
      <ItemModal selectedItem={selectedItem} handlePurchaseItem={handlePurchaseItem} />
    </ModalBackdrop>
  );
}

export default PurchaseItemModal;
