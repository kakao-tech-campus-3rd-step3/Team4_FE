import { updateItemUsage } from '@/api/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import {
  LoadingSpinner,
  LoadingSpinnerWrapper,
} from '../../../../components/common/LoadingSpinner';
import QUERY_KEY from '../../../../constants/queryKey';
import type { SelectedItem } from '../../types/Item';
import OwnedItemsGridView from './OwnedItemsView';

function OwnedItemsGrid({ items }: { items: SelectedItem[] | undefined }) {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: ({ item, isUsed }: { item: SelectedItem; isUsed: boolean }) =>
      updateItemUsage(item.id, isUsed),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.OWNED_ITEMS] });
    },
    onError: (error) => {
      throw new Error(error.message);
    },
  });

  const handleClick = (item: SelectedItem) => {
    mutate({ item, isUsed: !item.isUsed });
  };

  if (isPending) {
    return (
      <LoadingSpinnerWrapper>
        <LoadingSpinner />
      </LoadingSpinnerWrapper>
    );
  }

  return <OwnedItemsGridView items={items} handleClick={handleClick} />;
}

export default OwnedItemsGrid;
