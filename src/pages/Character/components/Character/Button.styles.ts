import { colorScale } from '@/styles/theme/colors';
import styled from '@emotion/styled';

export const ChatButtonContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 40px;
  left: 0;
  right: 0;
`;

export const ChatButton = styled.button`
  background: rgba(255, 246, 229, 0.5);
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[5]};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border: 2px solid ${colorScale.brown500};
  width: 50%;
  cursor: pointer;
  text-align: center;

  &:hover {
    background: rgba(255, 246, 229, 0.7);
    border-color: ${colorScale.brown600};
  }

  &:active {
    background: rgba(255, 246, 229, 0.8);
    transform: translateY(1px);
  }
`;

export const BackButtonContainer = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 10;
`;

export const BackButton = styled.button`
  background: rgba(255, 246, 229, 0.8);
  border: 2px solid ${colorScale.brown200};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing[2]};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[1]};
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 246, 229, 1);
    border-color: ${colorScale.brown400};
  }

  &:active {
    transform: translateY(1px);
  }
`;

export const BackArrowIcon = styled.svg`
  width: 20px;
  height: 20px;
  fill: ${colorScale.gray800};
`;
