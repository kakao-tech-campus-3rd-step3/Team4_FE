import { semanticColors } from '@/styles/theme/colors';
import styled from '@emotion/styled';

export const Container = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
`;

export const Title = styled.div`
  text-align: center;
`;

export const Image = styled.img`
  object-fit: contain;
  width: 300px;
  height: 300px;
`;

export const ResultContainer = styled.div`
  padding-inline: 10px;
  padding-block: 10px;
  background-color: ${semanticColors.button.default};
  border: 2px solid ${semanticColors.button.border};
  border-radius: 8px;
  color: ${semanticColors.text.default};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  gap: 25px;
`;
