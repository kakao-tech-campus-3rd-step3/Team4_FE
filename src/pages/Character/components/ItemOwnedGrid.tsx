import { LoadingSpinner, LoadingSpinnerWrapper } from '@/components/common/LoadingSpinner';
import { Typography } from '@/components/common/Typography';
import QUERY_KEY from '@/constants/queryKey';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { SelectedItem } from '../types/Item';
import { EmptyItemContainer, Grid, ItemImage, ItemInfo, OwnedItemCard } from './ItemGrid.styles';

function ItemOwnedGrid({ items }: { items: SelectedItem[] | undefined }) {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: ({ item, isUsed }: { item: SelectedItem; isUsed: boolean }) =>
      fetch(`${import.meta.env.VITE_API_BASE_URL}/api/me/items/${item.id}`, {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          isUsed,
        }),
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.OWNED_ITEMS] });
    },
    onError: (error) => {
      // eslint-disable-next-line no-console
      console.error(error);
    },
  });

  const handleClick = (item: SelectedItem) => {
    mutate({ item, isUsed: !item.isUsed });
  };

  return <ItemOwnedGridView items={items} handleClick={handleClick} isPending={isPending} />;
}

function ItemOwnedGridView({
  items,
  handleClick,
  isPending,
}: {
  items: SelectedItem[] | undefined;
  handleClick: (item: SelectedItem) => void;
  isPending: boolean;
}) {
  if (items && items.length === 0) {
    return (
      <EmptyItemContainer>
        <Typography variant="body2Regular" color="default">
          보유 중인 아이템이 없습니다
        </Typography>
      </EmptyItemContainer>
    );
  }

  if (isPending) {
    return (
      <LoadingSpinnerWrapper>
        <LoadingSpinner />
      </LoadingSpinnerWrapper>
    );
  }

  return (
    <Grid>
      {items &&
        items.map((item) => (
          <OwnedItemCard key={item.id} onClick={() => handleClick(item)} $isSelected={item.isUsed}>
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
