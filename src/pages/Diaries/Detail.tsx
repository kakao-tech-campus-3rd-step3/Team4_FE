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
import { Typography } from '@/components/common/Typography';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';
import { HiArrowNarrowLeft } from 'react-icons/hi';

// 감정별 색상 + 아이콘 매핑
export const emotionConfig: Record<EmotionEnum, { color: string; icon: any }> = {
  EXCELLENT: { color: '#A8E6A3', icon: FaRegLaughSquint }, // 아주 좋음 😊 (밝은 초록)
  GOOD: { color: '#FFD66B', icon: FaRegSmile }, // 좋음 🙂
  SOSO: { color: '#F2B663', icon: FaRegMeh }, // 보통 😐
  BAD: { color: '#F37A7A', icon: FaRegFrown }, // 나쁨 😢
  TERRIBLE: { color: '#C77E7E', icon: FaRegAngry }, // 최악 😡
  NONE: { color: '#EEDDBD', icon: null }, // 미기록 🥱
};

const DateContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`;

const ToHome = styled.button`
  padding-top: 6px;
  background-color: transparent;
  border: none;
`;

const NewDiaryButton = styled.button`
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
  height: 60px;
`;

const Circle = styled.div<{ bg: string; selected: boolean }>`
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

const DayNumber = styled.small`
  margin-top: ${({ theme }) => theme.spacing[1]};
  font-size: ${({ theme }) => theme.spacing[5]};
`;

const DiaryBox = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  padding: ${({ theme }) => theme.spacing[2]};
`;

const FeedBackMessage = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  background-color: ${({ theme }) => theme.colors.colorScale.brown400};
  padding: ${({ theme }) => theme.spacing[3]};
`;

function DiariesDetail() {
  const todayKR = useMemo(() => formatKRDate(new Date()), []);
  const [month, setMonth] = useState(dayjs().format('YYYYMM'));
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const navigate = useNavigate();

  const gotoWrite = () => {
    navigate(`${ROUTES.DIARIES}/${ROUTES.DIARIES_NEW}/mood`);
  };

  const gotoHome = () => {
    navigate(`${ROUTES.HOME}`);
  };

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
  if (isError || !diaries) return <div>데이터를 불러오지 못했어요 </div>;

  return (
    <>
      <DateContainer>
        <ToHome onClick={gotoHome}>
          <HiArrowNarrowLeft size={24} />
        </ToHome>

        <Typography variant="title2Bold" color="gray900">
          {todayKR}
        </Typography>
        <NewDiaryButton onClick={gotoWrite}>
          <Typography variant="label2Regular">일기쓰기</Typography>
        </NewDiaryButton>
      </DateContainer>
      <Container>
        <Title>
          <Typography variant="body2Regular">월간 표정</Typography>
          <MonthNav>
            <ArrowButton onClick={handlePrevMonth}>
              <FaChevronLeft size={18} />
            </ArrowButton>
            <Typography variant="body2Regular">{currentMonthLabel}</Typography>
            <ArrowButton onClick={handleNextMonth}>
              <FaChevronRight size={18} />
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
        {isDetailLoading && <FeedBackMessage>일기 불러오는 중...</FeedBackMessage>}
        {!selectedId && !isDetailLoading && (
          <>
            <Typography variant="body2Regular">
              {selectedDate ? formatKRDate(new Date(selectedDate)) : todayKR}
            </Typography>
            <DiaryBox>
              <Typography variant="label2Regular">
                날짜를 선택하면 일기와 피드백이 표시됩니다.
              </Typography>
            </DiaryBox>
          </>
        )}

        {selectedId && diaryDetail && (
          <>
            <Typography variant="body2Regular">
              {formatKRDate(new Date(diaryDetail.createdAt))}
            </Typography>
            <DiaryBox>
              <Typography variant="label2Regular">{diaryDetail.content}</Typography>
            </DiaryBox>
            <FeedBackMessage>
              <Typography variant="label2Regular">{diaryDetail.feedback}</Typography>
            </FeedBackMessage>
          </>
        )}
      </Container>
    </>
  );
}

export default DiariesDetail;
