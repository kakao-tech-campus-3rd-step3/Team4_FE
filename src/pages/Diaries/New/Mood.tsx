import { useMemo, useState } from 'react';
import type { Emotion, EmotionEnum } from '@/api/types';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';
import formatKRDate from '../../../utils/formatKRDate';
import { Typography } from '@/components/common/Typography';
import { FaRegAngry, FaRegFrown, FaRegLaughSquint, FaRegMeh, FaRegSmile } from 'react-icons/fa';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import {
  Balloon,
  BalloonTail,
  BalloonWrap,
  Card,
  CatImg,
  MoodButton,
  MoodDateText,
  MoodGrid,
  NextButton,
  ToDetailButton,
} from './Diaries.New.styles';

function Mood() {
  const [mood, setMood] = useState<EmotionEnum | null>(null);
  const todayKR = useMemo(() => formatKRDate(new Date()), []);
  const navigate = useNavigate();

  const goToWrite = () => {
    const safeMood: EmotionEnum = mood ?? 'NONE';
    alert(`선택한 기분: ${safeMood}`);
    if (!mood) return;
    navigate(`${ROUTES.DIARIES}/${ROUTES.DIARIES_NEW}/${ROUTES.DIARIES_NEW_WRITE}`, {
      state: { emotion: mood },
    });
  };

  const goToDetail = () => {
    navigate(`${ROUTES.DIARIES}/${ROUTES.DIARIES_DETAIL}`);
  };

  return (
    <Card>
      <MoodDateText>
        <ToDetailButton onClick={goToDetail}>
          <HiArrowNarrowLeft size={24} />
        </ToDetailButton>
        <Typography variant="title2Regular">{todayKR}</Typography>
      </MoodDateText>
      <BalloonWrap>
        <Balloon>
          <Typography variant="body2Regular">오늘 기분이 어땠는지 말해달라냥!</Typography>
        </Balloon>
        <BalloonTail />
      </BalloonWrap>
      <CatImg
        alt="Image"
        src="https://github.com/user-attachments/assets/5450c372-b01a-46a1-b9c5-e1f21bf8257a"
      />
      <MoodGrid>
        {MOODS.map((m) => {
          const Icon = m.icon;

          return (
            <MoodButton
              key={m.key}
              aria-label={m.label}
              onClick={() => setMood(m.key)}
              selected={mood === m.key}
            >
              <span>
                <Icon size={23} style={{ verticalAlign: 'middle' }} />
              </span>
            </MoodButton>
          );
        })}
      </MoodGrid>

      <NextButton disabled={mood === null} onClick={goToWrite}>
        <Typography variant="body2Regular" color="gray0">
          다음
        </Typography>
      </NextButton>
    </Card>
  );
}

const MOODS: Emotion[] = [
  { key: 'EXCELLENT', label: '아주 좋아요', icon: FaRegLaughSquint },
  { key: 'GOOD', label: '좋아요', icon: FaRegSmile },
  { key: 'SOSO', label: '보통이에요', icon: FaRegMeh },
  { key: 'BAD', label: '별로예요', icon: FaRegFrown },
  { key: 'TERRIBLE', label: '최악이에요', icon: FaRegAngry },
];

export default Mood;
