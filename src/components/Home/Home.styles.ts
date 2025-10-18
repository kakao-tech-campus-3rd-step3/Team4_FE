import styled from '@emotion/styled';
import { theme } from '@/styles/theme';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${theme.spacing[5]};
  padding-block: ${theme.spacing[5]};
`;

export const GreetingSection = styled.div``;

export const CharacterSection = styled.div`
  position: relative;
  border-color: ${theme.colors.brand.border};
  border-width: 1.5px;
  border-style: solid;
  border-radius: ${theme.spacing[2]};
  overflow: hidden;
  margin: 0;
  padding: 0;
`;

export const CharacterImage = styled.img`
  width: 200px;
  height: 200px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: ${theme.spacing[2]};
  object-fit: contain;
`;

export const BackgroundImage = styled.img`
  width: 100%;
  height: 350px;
  object-fit: cover;
  display: block;
  margin: 0;
  padding: 0;
`;

export const ActionsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[2]};
`;

export const MissionCard = styled.div`
  background-color: ${theme.colors.brand.primary};
  border-color: ${theme.colors.brand.border};
  border-width: 1.5px;
  border-radius: ${theme.spacing[2]};
  border-style: solid;
  padding-inline: ${theme.spacing[4]};
  padding-block: ${theme.spacing[3]};
`;

export const MissionItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing[2]};
`;

export const MissionIcon = styled.div`
  width: 16px;
  height: 16px;
  background-color: ${theme.colors.brand.border};
  border-radius: ${theme.borderRadius.xs};
`;

export const DiaryCard = styled.div`
  background-color: ${theme.colors.colorScale.gray500};
  border-color: ${theme.colors.colorScale.gray600};
  border-style: solid;
  border-width: 1.5px;
  border-radius: ${theme.spacing[2]};
  padding-inline: ${theme.spacing[4]};
  padding-block: ${theme.spacing[3]};
`;
