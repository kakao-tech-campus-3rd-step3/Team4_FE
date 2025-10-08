import { colorScale, semanticColors } from '@/styles/theme/colors';
import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AppTitle = styled.h1`
  font-size: 70px;
  margin: 0;
  color: ${semanticColors.text.default};
`;

export const CharacterImage = styled.img`
  width: 70%;
  max-height: 300px;
  object-fit: contain;
`;

export const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
`;

export const LoginButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spacing[2]} 0;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  width: 100%;
  background: ${colorScale.gray900};
  border: none;
  cursor: pointer;

  &:hover {
    background: ${colorScale.gray800};
  }

  &:active {
    background: ${colorScale.gray700};
  }
`;

export const ButtonContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
`;

export const GoogleIcon = styled.img`
  width: 20px;
  height: 20px;
`;

export const TermsSection = styled.div`
  padding: 0 ${({ theme }) => theme.spacing[8]};
  text-align: center;
`;
