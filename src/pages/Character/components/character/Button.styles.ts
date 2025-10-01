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
