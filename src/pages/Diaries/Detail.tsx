// 월간표정
import { useMemo, useState } from 'react';
import styled from '@emotion/styled';
import formatKRDate from '../../utils/formatKRDate';

const emotions = ['😀', '😐', '😡', '😢', '😊'] as const;
type Emotion = (typeof emotions)[number] | null;

type EmotionRecord = {
  [date: string]: Emotion;
};

const DateText = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.colorScale.gray900};
  font-size: ${({ theme }) => theme.spacing[6]};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`;

const Container = styled.div`
  background: ${({ theme }) => theme.colors.colorScale.brown100};
  padding: ${({ theme }) => theme.spacing[4]};
  border-radius: ${({ theme }) => theme.spacing[3]};
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
`;

const Title = styled.div`
  font-weight: bold;
  margin-bottom: ${({ theme }) => theme.spacing[3]};
`;

const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: ${({ theme }) => theme.spacing[1]};
`;

const Cell = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Emoji = styled.div`
  font-size: ${({ theme }) => theme.spacing[5]};
`;

const DayNumber = styled.small`
  margin-top: ${({ theme }) => theme.spacing[1]};
  font-size: ${({ theme }) => theme.spacing[3]};
`;

const FeedbackDate = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing[3]};
`;

const Message = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  background-color: ${({ theme }) => theme.colors.colorScale.brown400};
`;

const totalDays = 31; // 8월 기준

function DiariesDetail() {
  const todayKR = useMemo(() => formatKRDate(new Date()), []);

  // 예시 데이터
  const [records] = useState<EmotionRecord>({
    '2025-08-01': '😊',
    '2025-08-02': '😀',
    '2025-08-03': '😐',
    '2025-08-04': '😡',
    '2025-08-05': '😢',
    '2025-08-06': '😀',
  });

  return (
    <>
      <DateText>{todayKR}</DateText>
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
      </Container>
      <br />
      <Container>
        <FeedbackDate>{todayKR}</FeedbackDate>
        <Message>오늘의 피드백 메시지</Message>
      </Container>
    </>
  );
}

export default DiariesDetail;
