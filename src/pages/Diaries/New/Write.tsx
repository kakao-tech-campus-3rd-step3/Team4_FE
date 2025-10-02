import styled from '@emotion/styled';
import { useMemo } from 'react';

const DateText = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.colorScale.gray900};
  font-size: ${({ theme }) => theme.spacing[6]};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`;

const WeatherButton = styled.button`
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  background-color: ${({ theme }) => theme.colors.colorScale.brown400};
  height: ${({ theme }) => theme.spacing[8]};
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing[16]};
`;

const DiaryBox = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  background: #f7efe4;
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 20px;
`;

const DiaryText = styled.textarea`
  width: 100%;
  height: 100%;
  border: none;
  background: transparent;
  font-size: 14px;
  resize: none;
  outline: none;
`;

const MissionButton = styled.button`
  position: absolute;
  right: 12px;
  bottom: 12px;
  font-size: 12px;
  background: #000;
  color: #fff;
  padding: 6px 12px;
  border-radius: 8px;
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
function DiariesNewWrite() {
  const todayKR = useMemo(() => formatKRDate(new Date()), []);

  return (
    <>
      <HeaderContainer>
        <DateText>{todayKR}</DateText>
        <WeatherButton>+날씨</WeatherButton>
      </HeaderContainer>

      <DiaryBox>
        <DiaryText placeholder="오늘의 일기를 자유롭게 적어주세요" />
        <MissionButton>오늘 완료한 미션 가져오기</MissionButton>
      </DiaryBox>

      <NextButton>다음</NextButton>
    </>
  );
}

function formatKRDate(d: Date) {
  const y = d.getFullYear();
  const m = `${d.getMonth() + 1}`.padStart(2, '0');
  const day = `${d.getDate()}`.padStart(2, '0');
  return `${y}년 ${m}월 ${day}일`;
}

export default DiariesNewWrite;
