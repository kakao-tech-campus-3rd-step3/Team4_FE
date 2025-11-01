import { useMemo, useState } from 'react';
import styled from '@emotion/styled';
import type { Emotion, EmotionEnum } from '@/api/types';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';
import formatKRDate from '../../../utils/formatKRDate';
import { Typography } from '@/components/common/Typography';
import { FaRegAngry, FaRegFrown, FaRegLaughSquint, FaRegMeh, FaRegSmile } from 'react-icons/fa';

const Card = styled.div`
  width: 100%;
  max-width: 380px;
  padding: ${({ theme }) => theme.spacing[5]};
  position: relative;
`;

const DateText = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.colorScale.gray900};
  font-size: ${({ theme }) => theme.spacing[6]};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`;

const BalloonWrap = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;

const CatImg = styled.img`
  max-width: 100%;
  height: auto;
`;

const Balloon = styled.div`
  background: ${({ theme }) => theme.colors.colorScale.brown400};
  color: ${({ theme }) => theme.colors.colorScale.gray900};
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
  border-radius: ${({ theme }) => theme.spacing[2]};
  font-size: 13px;
  position: relative;
`;

const BalloonTail = styled.div`
  position: absolute;
  left: 72px;
  bottom: -8px;
  width: 0;
  height: 0;
  border-left: ${({ theme }) => theme.spacing[2]} solid transparent;
  border-right: ${({ theme }) => theme.spacing[2]} solid transparent;
  border-top: ${({ theme }) => theme.spacing[2]} solid
    ${({ theme }) => theme.colors.colorScale.brown400};
`;

const MoodGrid = styled.div`
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing[4]};
  display: grid;
  grid-template-columns: repeat(5, max-content);
  justify-content: space-between;
  place-items: center;
`;

const MoodButton = styled.button<{ selected: boolean }>`
  flex: 1;
  max-width: ${({ theme }) => theme.spacing[9]};
  height: ${({ theme }) => theme.spacing[9]};
  border-radius: 50%;
  border: 1px solid ${({ selected }) => (selected ? '#000' : 'rgba(0, 0, 0, 0.2)')};
  background: ${({ theme }) => theme.colors.colorScale.brown200};
  transition: 0.2s;
  ${({ selected }) => selected && `box-shadow: 0 0 0 2px rgba(0,0,0,0.4); border-color:#000;`}

  .icon-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const NextButton = styled.button`
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

function Mood() {
  const [mood, setMood] = useState<EmotionEnum | null>(null);
  const todayKR = useMemo(() => formatKRDate(new Date()), []);
  const navigate = useNavigate();

  const goToWrite = () => {
    const safeMood: EmotionEnum = mood ?? 'NONE';
    alert(`선택한 기분: ${safeMood}`);
    if (!mood) return;
    navigate(`/${ROUTES.DIARIES}/${ROUTES.DIARIES_NEW}/${ROUTES.DIARIES_NEW_WRITE}`, {
      state: { emotion: mood },
    });
  };

  return (
    <Card>
      <DateText>{todayKR}</DateText>
      <BalloonWrap>
        <Balloon>오늘 기분이 어땠는지 말해달라냥!</Balloon>
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
        <Typography variant="label2Regular" color="gray0">
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
