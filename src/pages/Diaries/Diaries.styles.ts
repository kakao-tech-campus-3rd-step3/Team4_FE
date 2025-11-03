import styled from '@emotion/styled';

// Detail.tsx--------------
export const DateContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`;

export const ToHome = styled.button`
  padding-top: 6px;
  background-color: transparent;
  border: none;
`;

export const NewDiaryButton = styled.button`
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: none;
  background-color: ${({ theme }) => theme.colors.colorScale.brown100};
  box-shadow: 1px 1px 1px 1px gray;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.colorScale.brown300};
    transform: translateY(-2px);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  }
`;

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.colorScale.brown100};
  padding: ${({ theme }) => theme.spacing[4]};
  border-radius: ${({ theme }) => theme.spacing[3]};
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
`;

export const Title = styled.div`
  font-weight: bold;
  margin-bottom: ${({ theme }) => theme.spacing[3]};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MonthNav = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const ArrowButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  color: ${({ theme }) => theme.colors.colorScale.gray800};
  &:hover {
    opacity: 0.7;
  }
`;

export const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: ${({ theme }) => theme.spacing[1]};
  padding: ${({ theme }) => theme.spacing[1]} 0;
`;

export const Cell = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60px;
`;

export const Circle = styled.div<{ bg: string; selected: boolean }>`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${({ bg }) => bg};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: ${({ selected }) => (selected ? '2px solid #8B5E34' : '2px solid transparent')};
  transition: all 0.15s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

export const DayNumber = styled.small`
  margin-top: ${({ theme }) => theme.spacing[1]};
  font-size: ${({ theme }) => theme.spacing[5]};
`;

export const DiaryBox = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  padding: ${({ theme }) => theme.spacing[2]};
`;

export const FeedBackMessage = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  background-color: ${({ theme }) => theme.colors.colorScale.brown400};
  padding: ${({ theme }) => theme.spacing[3]};
`;

export const WeekHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  font-weight: bold;
  margin-bottom: ${({ theme }) => theme.spacing[2]};
  color: ${({ theme }) => theme.colors.colorScale.gray900};
`;

export const EmptyCell = styled.div`
  height: 60px;
`;

// Feedback.tsx-------------
export const BalloonWrap = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;

export const Balloon = styled.div`
  background: ${({ theme }) => theme.colors.colorScale.brown400};
  color: ${({ theme }) => theme.colors.colorScale.gray900};
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
  border-radius: ${({ theme }) => theme.spacing[2]};
  font-size: 13px;
  position: relative;
  max-height: 180px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: ${({ theme }) => theme.spacing[1]};
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.colorScale.gray600};
    border-radius: ${({ theme }) => theme.spacing[3]};
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
`;

export const BalloonTail = styled.div`
  position: absolute;
  left: 92px;
  bottom: -8px;
  width: 0;
  height: 0;
  border-left: ${({ theme }) => theme.spacing[3]} solid transparent;
  border-right: ${({ theme }) => theme.spacing[3]} solid transparent;
  border-top: ${({ theme }) => theme.spacing[4]} solid
    ${({ theme }) => theme.colors.colorScale.brown400};
`;

export const CatImg = styled.img`
  max-width: 100%;
  height: auto;
`;

export const NextButton = styled.button`
  margin-top: ${({ theme }) => theme.spacing[6]};
  width: 100%;
  padding: ${({ theme }) => theme.spacing[3]} 0;
  border-radius: ${({ theme }) => theme.spacing[3]};
  background: ${({ theme }) => theme.colors.colorScale.gray1000};
  color: ${({ theme }) => theme.colors.colorScale.gray0};
  font-size: 14px;
  cursor: pointer;
  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;
