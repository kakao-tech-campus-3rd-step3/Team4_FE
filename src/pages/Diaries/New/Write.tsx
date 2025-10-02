import styled from '@emotion/styled';
import { useMemo, useState } from 'react';
import formatKRDate from '../constants/formatKRDate';

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
  border-radius: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[3]};
  margin-bottom: ${({ theme }) => theme.spacing[5]};
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
  right: ${({ theme }) => theme.spacing[3]};
  bottom: ${({ theme }) => theme.spacing[3]};
  font-size: ${({ theme }) => theme.spacing[3]};
  background: ${({ theme }) => theme.colors.colorScale.gray1000};
  color: ${({ theme }) => theme.colors.colorScale.gray0};
  padding: 6px ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.spacing[2]};
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

// 바텀시트 스타일
const BottomSheetOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
`;

const BottomSheet = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background: #fffbea;
  border-radius: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[4]} 0 0;
  padding: ${({ theme }) => theme.spacing[4]};
  animation: slideUp 0.3s ease-out;

  @keyframes slideUp {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
  }
`;

const Handle = styled.div`
  width: ${({ theme }) => theme.spacing[10]};
  height: ${({ theme }) => theme.spacing[1]};
  background: #aaa;
  border-radius: 2px;
  margin: 0 auto ${({ theme }) => theme.spacing[3]};
`;

const WeatherOptions = styled.div`
  display: flex;
  justify-content: space-around;
  gap: ${({ theme }) => theme.spacing[2]};
`;

const WeatherSelect = styled.button`
  flex: 1;
  padding: ${({ theme }) => theme.spacing[3]};
  font-size: 18px;
  background: #f6ead7;
  border: none;
  border-radius: ${({ theme }) => theme.spacing[3]};
  cursor: pointer;

  &:hover {
    background: #f0dbb5;
  }
`;

function DiariesNewWrite() {
  const todayKR = useMemo(() => formatKRDate(new Date()), []);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <HeaderContainer>
        <DateText>{todayKR}</DateText>
        <WeatherButton onClick={() => setIsOpen(true)}>+날씨</WeatherButton>
      </HeaderContainer>

      <DiaryBox>
        <DiaryText placeholder="오늘의 일기를 자유롭게 적어주세요" />
        <MissionButton>오늘 완료한 미션 가져오기</MissionButton>
      </DiaryBox>

      <NextButton>다음</NextButton>
      {/* 바텀시트 */}
      {isOpen && (
        <BottomSheetOverlay onClick={() => setIsOpen(false)}>
          <BottomSheet onClick={(e) => e.stopPropagation()}>
            <Handle />
            <WeatherOptions>
              <WeatherSelect>☀️ 맑음</WeatherSelect>
              <WeatherSelect>☁️ 흐림</WeatherSelect>
              <WeatherSelect>🌧 비</WeatherSelect>
              <WeatherSelect>⚡ 번개</WeatherSelect>
              <WeatherSelect>❄️ 눈</WeatherSelect>
            </WeatherOptions>
          </BottomSheet>
        </BottomSheetOverlay>
      )}
    </>
  );
}

export default DiariesNewWrite;
