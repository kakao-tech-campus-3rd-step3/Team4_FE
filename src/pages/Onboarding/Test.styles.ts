import styled from '@emotion/styled';
import { colorScale, semanticColors } from '../../styles/theme/colors';

export const Container = styled.div`
  min-height: 92vh;
  background-color: ${semanticColors.brand.background};
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
`;

export const ProgressWrapper = styled.div``;

export const ProgressBar = styled.div`
  display: flex;
  height: 15px;
  background-color: ${colorScale.gray950};
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  position: relative;
`;

export const ProgressFill = styled.div<{ percent: number }>`
  position: absolute;
  left: 0;
  top: 0;
  width: ${({ percent }) => `${percent}%`};
  height: 100%;
  border-radius: 10px;
  background-color: ${colorScale.red600};
  z-index: 2;
`;

export const Question = styled.div`
  text-align: center;
  margin-bottom: 40px;
  color: ${semanticColors.text.default};
`;

export const ImageBox = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 60px;
`;

export const Image = styled.img`
  width: 200px;
  height: 200px;
  object-fit: contain;
`;

export const Answers = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const AnswerButton = styled.button<{ selected: boolean }>`
  padding-inline: 10px;
  padding-block: 10px;
  background-color: ${({ selected }) =>
    selected ? semanticColors.button.hover : semanticColors.button.default};
  border: 2px solid
    ${({ selected }) => (selected ? semanticColors.button.border : semanticColors.button.hover)};
  border-radius: 8px;
  color: ${semanticColors.text.default};
  cursor: pointer;
  transition: all 0.2s ease;
`;

export const NextButton = styled.button`
  padding: 13px;
  background-color: ${colorScale.gray950};
  border-radius: 8px;
  cursor: pointer;
`;
