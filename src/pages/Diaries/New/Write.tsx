import { useMemo, useState } from 'react';
import formatKRDate from '../../../utils/formatKRDate';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  TiWeatherCloudy,
  TiWeatherShower,
  TiWeatherSnow,
  TiWeatherStormy,
  TiWeatherSunny,
} from 'react-icons/ti';
import { Typography } from '@/components/common/Typography';
import type { EmotionEnum } from '@/api/types';
import { ROUTES } from '@/constants/routes';
import { useCreateDiary } from '../hooks/useCreateDiary';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { toast } from 'react-toastify';
import {
  BottomSheet,
  BottomSheetOverlay,
  DiaryBox,
  DiaryText,
  Handle,
  HeaderContainer,
  NextButton,
  ToMood,
  WeatherButton,
  WeatherOptions,
  WeatherSelect,
  WriteDateText,
} from './Diaries.New.styles';

function DiariesNewWrite() {
  const todayKR = useMemo(() => formatKRDate(new Date()), []);
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as { emotion?: EmotionEnum };

  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState('');
  const [emotion, setEmotion] = useState<EmotionEnum | null>(state?.emotion ?? null);

  const gotoMood = () => {
    navigate(`${ROUTES.DIARIES}/${ROUTES.DIARIES_NEW}/mood`);
  };

  const createDiary = useCreateDiary();

  const handleSubmit = () => {
    if (!content.trim()) {
      toast.warn('일기 내용을 입력해주세요!');
      return;
    }

    if (!emotion) {
      toast.warn('감정을 선택해주세요!');
      return;
    }

    createDiary.mutate(
      { content, emotion },
      {
        onSuccess: (data) => {
          toast.success('일기가 등록되었습니다!');
          navigate(`${ROUTES.DIARIES}/${data.id}/feedback`);
        },
        onError: () => {
          toast('일기 작성에 실패했습니다.');
        },
      },
    );
  };

  return (
    <>
      <HeaderContainer>
        <ToMood onClick={gotoMood}>
          <HiArrowNarrowLeft size={24} />
        </ToMood>

        <WriteDateText>
          <Typography variant="title2Regular">{todayKR}</Typography>
        </WriteDateText>
        <WeatherButton onClick={() => setIsOpen(true)}>
          <Typography variant="body2Regular">+날씨</Typography>
        </WeatherButton>
      </HeaderContainer>

      <DiaryBox>
        <DiaryText
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="오늘의 일기를 자유롭게 적어주세요"
        />
      </DiaryBox>

      <NextButton onClick={handleSubmit} disabled={createDiary.isPending}>
        <Typography variant="body2Regular" color="gray0">
          {createDiary.isPending ? '등록 중...' : '다음'}
        </Typography>
      </NextButton>
      {/* 바텀시트 */}
      {isOpen && (
        <BottomSheetOverlay onClick={() => setIsOpen(false)}>
          <BottomSheet onClick={(e) => e.stopPropagation()}>
            <Handle />
            <WeatherOptions>
              {[
                { icon: <TiWeatherSunny />, value: 'EXCELLENT' },
                { icon: <TiWeatherCloudy />, value: 'GOOD' },
                { icon: <TiWeatherShower />, value: 'SOSO' },
                { icon: <TiWeatherStormy />, value: 'BAD' },
                { icon: <TiWeatherSnow />, value: 'TERRIBLE' },
              ].map((item) => (
                <WeatherSelect
                  key={item.value}
                  onClick={() => {
                    setEmotion(item.value as EmotionEnum);
                    setIsOpen(false);
                  }}
                >
                  {item.icon}
                </WeatherSelect>
              ))}
            </WeatherOptions>
          </BottomSheet>
        </BottomSheetOverlay>
      )}
    </>
  );
}

export default DiariesNewWrite;
