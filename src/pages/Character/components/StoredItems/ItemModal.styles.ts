import { DESIGN_BASE, DESIGN_RATIO } from '@/constants/layout';
import styled from '@emotion/styled';

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: clamp(
    ${DESIGN_BASE.MIN_WIDTH}px,
    calc(100vh * ${DESIGN_RATIO.W} / ${DESIGN_RATIO.H}),
    ${DESIGN_BASE.MAX_WIDTH}px
  );
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  width: 80%;
  height: 25%;
  background-color: ${({ theme }) => theme.colors.brand.primary};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing[4]};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[3]};
`;

export const PurchaseButton = styled.button`
  width: 100%;
  height: 40px;
  border: 1px solid ${({ theme }) => theme.colors.brand.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background-color: ${({ theme }) => theme.colors.button.default};
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};

  &:hover {
    background-color: ${({ theme }) => theme.colors.button.hover};
  }

  &:active {
    transform: translateY(1px);
  }
`;
