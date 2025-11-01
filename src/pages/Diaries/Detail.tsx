import { useMemo, useState } from 'react';
import styled from '@emotion/styled';
import formatKRDate from '../../utils/formatKRDate';
import dayjs from 'dayjs';
import {
  FaRegSmile,
  FaRegAngry,
  FaRegMeh,
  FaRegFrown,
  FaChevronLeft,
  FaChevronRight,
  FaRegLaughSquint,
} from 'react-icons/fa';
import { useMonthlyDiaries } from './hooks/useMonthlyDiaries';
import { useDiaryDetail } from './hooks/useDiaryDetail';
import type { EmotionEnum } from '@/api/types';

// 감정별 색상 + 아이콘 매핑
export const emotionConfig: Record<EmotionEnum, { color: string; icon: any }> = {
  EXCELLENT: { color: '#A8E6A3', icon: FaRegLaughSquint }, // 아주 좋음 😊 (밝은 초록)
  GOOD: { color: '#FFD66B', icon: FaRegSmile }, // 좋음 🙂
  SOSO: { color: '#F2B663', icon: FaRegMeh }, // 보통 😐
  BAD: { color: '#F37A7A', icon: FaRegFrown }, // 나쁨 😢
  TERRIBLE: { color: '#C77E7E', icon: FaRegAngry }, // 최악 😡
  NONE: { color: '#EEDDBD', icon: null }, // 미기록 🥱
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
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MonthNav = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const ArrowButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  color: ${({ theme }) => theme.colors.colorScale.gray800};
  &:hover {
    opacity: 0.7;
  }
`;

const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: ${({ theme }) => theme.spacing[1]};
  padding: ${({ theme }) => theme.spacing[1]} 0;
`;

const Cell = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 56px;
`;

const Circle = styled.div<{ bg: string; selected: boolean }>`
  width: 36px;
  height: 36px;
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
  padding: ${({ theme }) => theme.spacing[3]};
`;

function DiariesDetail() {
  const todayKR = useMemo(() => formatKRDate(new Date()), []);
  const [month, setMonth] = useState(dayjs().format('YYYYMM'));
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  // 월간 일기 데이터
  const { data: diaries, isLoading, isError } = useMonthlyDiaries(month);

  // 선택된 일기 상세 데이터
  const { data: diaryDetail, isFetching: isDetailLoading } = useDiaryDetail(selectedId);

  const currentMonthLabel = useMemo(() => {
    const parsed = dayjs(month + '01');
    return parsed.format('YYYY.MM');
  }, [month]);

  const handlePrevMonth = () => {
    const prev = dayjs(month + '01').subtract(1, 'month');
    setMonth(prev.format('YYYYMM'));
    setSelectedId(null);
    setSelectedDate(null);
  };

  const handleNextMonth = () => {
    const next = dayjs(month + '01').add(1, 'month');
    setMonth(next.format('YYYYMM'));
    setSelectedId(null);
    setSelectedDate(null);
  };

  const daysInMonth = dayjs(`${month}01`).daysInMonth();

  // 날짜별 데이터 매핑
  const diaryByDate = useMemo(() => {
    if (!diaries) return {};
    return diaries.reduce<Record<string, { id: number; emotion: string }>>((acc, d) => {
      const dateKey = dayjs(d.createdAt).format('YYYY-MM-DD');
      acc[dateKey] = { id: d.id, emotion: d.emotion };
      return acc;
    }, {});
  }, [diaries]);

  if (isLoading) return <div>로딩 중...</div>;
  if (isError || !diaries) return <div>데이터를 불러오지 못했어요 😭</div>;

  return (
    <>
      <DateText>{todayKR}</DateText>
      <Container>
        <Title>
          <span>월간 표정</span>
          <MonthNav>
            <ArrowButton onClick={handlePrevMonth}>
              <FaChevronLeft size={16} />
            </ArrowButton>
            <span>{currentMonthLabel}</span>
            <ArrowButton onClick={handleNextMonth}>
              <FaChevronRight size={16} />
            </ArrowButton>
          </MonthNav>
        </Title>

        <CalendarGrid>
          {Array.from({ length: daysInMonth }, (_, i) => {
            const date = dayjs(`${month}${String(i + 1).padStart(2, '0')}`).format('YYYY-MM-DD');
            const diary = diaryByDate[date];
            const diaryEmotion = (diary?.emotion ?? 'NONE') as EmotionEnum;
            const config = emotionConfig[diaryEmotion];
            const Icon = config.icon;

            return (
              <Cell key={date}>
                <Circle
                  bg={config.color}
                  selected={selectedDate === date}
                  onClick={() => {
                    setSelectedDate(date);
                    setSelectedId(diary?.id ?? null);
                  }}
                >
                  {Icon && <Icon size={16} color="#333" />}
                </Circle>
                <DayNumber>{i + 1}</DayNumber>
              </Cell>
            );
          })}
        </CalendarGrid>
      </Container>

      <br />

      <Container>
        {isDetailLoading && <Message>일기 불러오는 중...</Message>}
        {!selectedId && !isDetailLoading && (
          <>
            <FeedbackDate>
              {selectedDate ? formatKRDate(new Date(selectedDate)) : todayKR}
            </FeedbackDate>
            <Message>날짜를 선택하면 일기와 피드백이 표시됩니다.</Message>
          </>
        )}

        {selectedId && diaryDetail && (
          <>
            <FeedbackDate>{formatKRDate(new Date(diaryDetail.createdAt))}</FeedbackDate>
            <Message>
              <strong>제목:</strong>
              <br />
              <strong>내용:</strong> {diaryDetail.content}
            </Message>
          </>
        )}
      </Container>
    </>
  );
}

export default DiariesDetail;
