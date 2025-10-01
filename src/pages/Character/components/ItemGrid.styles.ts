import styled from '@emotion/styled';

export const Grid = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing[2]};
  padding-inline: ${({ theme }) => theme.spacing[2]};
  padding-top: ${({ theme }) => theme.spacing[2]};
`;

export const OwnedItemCard = styled.div<{ $isSelected?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.brand.primary};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing[1]};
  opacity: ${({ $isSelected }) => (!$isSelected ? 1 : 0.5)};

  cursor: pointer;
`;

export const ItemImage = styled.img`
  height: 70px;
  object-fit: contain;
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[1]};
`;

export const EmptyItemContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: ${({ theme }) => theme.spacing[8]};
`;
