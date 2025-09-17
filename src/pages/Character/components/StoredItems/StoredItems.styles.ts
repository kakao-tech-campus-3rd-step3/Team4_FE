import styled from '@emotion/styled';

export const StoreItemCard = styled.div<{ $isOwned?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.brand.primary};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing[1]};
  opacity: ${({ $isOwned }) => (!$isOwned ? 1 : 0.5)};

  cursor: ${({ $isOwned }) => (!$isOwned ? 'pointer' : 'default')};
`;

export const ItemHeart = styled.img`
  width: 13px;
  height: 13px;
`;
