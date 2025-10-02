// 월간표정
import { useState } from 'react';
import styled from '@emotion/styled';
import { FiChevronUp } from 'react-icons/fi';

const emotions = ['😀', '😐', '😡', '😢', '😊'] as const;
type Emotion = (typeof emotions)[number] | null;

type EmotionRecord = {
  [date: string]: Emotion;
};

const Container = styled.div`
  background: #f6ead7;
  padding: 16px;
  border-radius: 12px;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
`;

const Title = styled.div`
  font-weight: bold;
  margin-bottom: 12px;
`;

const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 12px;
`;

const Cell = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Emoji = styled.div`
  font-size: 20px;
`;

const DayNumber = styled.small`
  margin-top: 4px;
  font-size: 12px;
`;

const ToggleButton = styled.button`
  margin-top: 16px;
  width: 100%;
  padding: 4px;
  border: none;
  background: none;
  font-size: 20px;
  cursor: pointer;
`;

function DiariesDetail() {
  // 예시 데이터
  const [records] = useState<EmotionRecord>({
    '2025-08-01': '😊',
    '2025-08-02': '😀',
    '2025-08-03': '😐',
    '2025-08-04': '😡',
    '2025-08-05': '😢',
    '2025-08-06': '😀',
  });

  const totalDays = 31; // 8월 기준

  return (
    <Container>
      <Title>월간 표정</Title>
      <CalendarGrid>
        {Array.from({ length: totalDays }, (_, i) => {
          const date = `2025-08-${String(i + 1).padStart(2, '0')}`;
          return (
            <Cell key={date}>
              <Emoji>{records[date] ?? '⬜'}</Emoji>
              <DayNumber>{i + 1}</DayNumber>
            </Cell>
          );
        })}
      </CalendarGrid>
      <ToggleButton>
        <FiChevronUp size={24} />
      </ToggleButton>
    </Container>
  );
}

export default DiariesDetail;
