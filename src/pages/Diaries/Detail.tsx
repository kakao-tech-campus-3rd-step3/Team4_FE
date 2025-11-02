import { useMemo, useState } from 'react';
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
import {
  ArrowButton,
  CalendarGrid,
  Cell,
  Circle,
  Container,
  DateContainer,
  DayNumber,
  DiaryBox,
  EmptyCell,
  FeedBackMessage,
  MonthNav,
  NewDiaryButton,
  Title,
  ToHome,
  WeekHeader,
} from './Diaries.styles';

// 감정별 색상 + 아이콘 매핑
export const emotionConfig: Record<EmotionEnum, { color: string; icon: any }> = {
  EXCELLENT: { color: '#A8E6A3', icon: FaRegLaughSquint }, // 아주 좋음 😊 (밝은 초록)
  GOOD: { color: '#FFD66B', icon: FaRegSmile }, // 좋음 🙂
  SOSO: { color: '#F2B663', icon: FaRegMeh }, // 보통 😐
  BAD: { color: '#F37A7A', icon: FaRegFrown }, // 나쁨 😢
  TERRIBLE: { color: '#C77E7E', icon: FaRegAngry }, // 최악 😡
  NONE: { color: '#EEDDBD', icon: null }, // 미기록 🥱
};

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
  const startDayOfWeek = dayjs(`${month}01`).day(); // 일요일=0, 월요일=1 ...
  const offset = startDayOfWeek;

  const weekdays = ['일', '월', '화', '수', '목', '금', '토'];

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

        {/*  요일 헤더 (일요일 시작) */}
        <WeekHeader>
          {weekdays.map((day) => (
            <div key={day}>{day}</div>
          ))}
        </WeekHeader>

        <CalendarGrid>
          {/*  1일 시작 요일 전까지 빈 셀 렌더링 */}
          {Array.from({ length: offset }).map((_, i) => (
            <EmptyCell key={`empty-${i}`} />
          ))}

          {/*  실제 날짜 표시 */}
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
