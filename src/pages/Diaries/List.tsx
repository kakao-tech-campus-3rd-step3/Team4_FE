// 주간표정
import { useState } from 'react';
import styled from '@emotion/styled';

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

const WeekRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Day = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

const Emoji = styled.div`
  font-size: 24px;
`;

const ToggleButton = styled.button`
  margin-top: 12px;
  width: 100%;
  padding: 4px;
  border: none;
  background: none;
  font-size: 20px;
  cursor: pointer;
`;

function DiariesList() {
  // 예시 데이터
  const [records] = useState<EmotionRecord>({
    '2025-08-03': '😊',
    '2025-08-04': '😀',
    '2025-08-05': '😡',
    '2025-08-06': '😢',
    '2025-08-07': '😀',
  });

  const days = ['일', '월', '화', '수', '목', '금', '토'];
  const dates = [
    '2025-08-03',
    '2025-08-04',
    '2025-08-05',
    '2025-08-06',
    '2025-08-07',
    '2025-08-08',
    '2025-08-09',
  ];

  return (
    <Container>
      <Title>주간 표정</Title>
      <WeekRow>
        {days.map((day, idx) => {
          const date = dates[idx];
          return (
            <Day key={day}>
              <div>{day}</div>
              <Emoji>{records[date] ?? '⬜'}</Emoji>
              <small>{date.slice(-2)}</small>
            </Day>
          );
        })}
      </WeekRow>
      <ToggleButton>⬇</ToggleButton>
    </Container>
  );
}

export default DiariesList;
