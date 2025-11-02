import styled from '@emotion/styled';

export const Card = styled.div`
  width: 100%;
  max-width: 380px;
  padding: ${({ theme }) => theme.spacing[5]};
  position: relative;
`;

export const MoodDateText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  color: ${({ theme }) => theme.colors.colorScale.gray900};
  font-size: ${({ theme }) => theme.spacing[6]};
  margin-bottom: ${({ theme }) => theme.spacing[4]};

  svg {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const ToDetailButton = styled.button`
  background-color: transparent;
  border: none;
`;

export const BalloonWrap = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;

export const CatImg = styled.img`
  max-width: 100%;
  height: auto;
`;

export const Balloon = styled.div`
  background: ${({ theme }) => theme.colors.colorScale.brown400};
  color: ${({ theme }) => theme.colors.colorScale.gray900};
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
  border-radius: ${({ theme }) => theme.spacing[2]};
  font-size: 13px;
  position: relative;
`;

export const BalloonTail = styled.div`
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

export const MoodGrid = styled.div`
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing[4]};
  display: grid;
  grid-template-columns: repeat(5, max-content);
  justify-content: space-between;
  place-items: center;
`;

export const MoodButton = styled.button<{ selected: boolean }>`
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

export const NextButton = styled.button`
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

// Write.tsx--------------------------------------------------
export const WriteDateText = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.colors.colorScale.gray900};
  font-size: ${({ theme }) => theme.spacing[6]};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`;

export const ToMood = styled.button`
  background-color: transparent;
  border: none;
  padding-bottom: ${({ theme }) => theme.spacing[4]};
`;

export const WeatherButton = styled.button`
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  background-color: ${({ theme }) => theme.colors.colorScale.brown400};
  height: ${({ theme }) => theme.spacing[8]};
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DiaryBox = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  background: #f7efe4;
  border-radius: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[3]};
  margin-bottom: ${({ theme }) => theme.spacing[5]};
`;

export const DiaryText = styled.textarea`
  width: 100%;
  height: 100%;
  border: none;
  background: transparent;
  font-size: 14px;
  resize: none;
  outline: none;
`;

// 바텀시트 스타일
export const BottomSheetOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
`;

export const BottomSheet = styled.div`
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

export const Handle = styled.div`
  width: ${({ theme }) => theme.spacing[10]};
  height: ${({ theme }) => theme.spacing[1]};
  background: ${({ theme }) => theme.colors.colorScale.gray600};
  border-radius: 2px;
  margin: 0 auto ${({ theme }) => theme.spacing[3]};
`;

export const WeatherOptions = styled.div`
  display: flex;
  justify-content: space-around;
  gap: ${({ theme }) => theme.spacing[2]};
`;

export const WeatherSelect = styled.button`
  flex: 1;
  padding: ${({ theme }) => theme.spacing[3]};
  font-size: 18px;
  background: ${({ theme }) => theme.colors.colorScale.brown100};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.colorScale.orange100};
  }
`;
