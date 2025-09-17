import type { StoreItem } from '../../types/Item';
import ItemModal from './ItemModal';
import { ModalBackdrop } from './ItemModal.styles';

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
