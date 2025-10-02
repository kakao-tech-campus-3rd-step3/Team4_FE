import { useMemo, useState } from 'react';
import styled from '@emotion/styled';
import type { EmotionEnum } from '@/api/types';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';
import formatKRDate from '../constants/formatKRDate';

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

const Balloon = styled.div`
  background: ${({ theme }) => theme.colors.colorScale.brown400};
  color: ${({ theme }) => theme.colors.colorScale.gray900};
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
  border-radius: 8px;
  font-size: 13px;
  position: relative;
`;

const BalloonTail = styled.div`
  position: absolute;
  left: 72px;
  bottom: -8px;
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: 8px solid ${({ theme }) => theme.colors.colorScale.brown400};
`;

const MoodGrid = styled.div`
  margin-top: ${({ theme }) => theme.spacing[4]};
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: ${({ theme }) => theme.spacing[3]};
  place-items: center;
`;

const MoodButton = styled.button<{ selected: boolean }>`
  width: ${({ theme }) => theme.spacing[10]};
  height: ${({ theme }) => theme.spacing[10]};
  border-radius: 50%;
  border: 1px solid ${({ selected }) => (selected ? '#000' : 'rgba(0, 0, 0, 0.2)')};
  background: ${({ theme }) => theme.colors.colorScale.brown200};
  font-size: 20px;
  transition: 0.2s;
  ${({ selected }) => selected && `box-shadow: 0 0 0 2px rgba(0,0,0,0.4); border-color:#000;`}
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
    alert(`선택한 기분: ${MOOD_LABEL[mood ?? ('' as unknown as EmotionEnum)] ?? '없음'}`);
    navigate(`/diaries/${ROUTES.DIARIES_NEW}/${ROUTES.DIARIES_NEW_WRITE}`);
  };

  return (
    <Card>
      <DateText>{todayKR}</DateText>
      <BalloonWrap>
        <Balloon>오늘 기분이 어땠는지 말해달라냥!</Balloon>
        <BalloonTail />
      </BalloonWrap>
      <img
        alt="Image"
        src="https://github.com/user-attachments/assets/5450c372-b01a-46a1-b9c5-e1f21bf8257a"
        style={{ maxWidth: '100%', height: 'auto' }}
      />
      <MoodGrid>
        {MOODS.map((m) => (
          <MoodButton
            key={m.key}
            aria-label={m.label}
            onClick={() => setMood(m.key)}
            selected={mood === m.key}
          >
            <span role="img" aria-hidden>
              {m.emoji}
            </span>
          </MoodButton>
        ))}
      </MoodGrid>

      <NextButton disabled={mood === null} onClick={goToWrite}>
        다음
      </NextButton>
    </Card>
  );
}

const MOODS: { key: EmotionEnum; label: string; emoji: string }[] = [
  { key: 'EXCELLENT', label: '아주 좋아요', emoji: '😊' },
  { key: 'GOOD', label: '좋아요', emoji: '🙂' },
  { key: 'SOSO', label: '보통이에요', emoji: '😐' },
  { key: 'BAD', label: '별로예요', emoji: '🙁' },
  { key: 'TERRIBLE', label: '최악이에요', emoji: '😣' },
];

const MOOD_LABEL: Record<EmotionEnum, string> = Object.fromEntries(
  MOODS.map((m) => [m.key, m.label])
) as Record<EmotionEnum, string>;

export default Mood;
