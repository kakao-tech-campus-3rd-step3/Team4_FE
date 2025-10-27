import type { Mission } from '@/api/types';
import { Typography } from '@/components/common/Typography';
import mocks from '@/mockSetup';
import { useEffect, useMemo, useState } from 'react';
import {
  Chip,
  ChipRow,
  Danger,
  Handle,
  Input,
  Overlay,
  Primary,
  Screen,
  Sheet,
  SheetTitle,
  Title,
} from './Missions.styles';
import CTABar from './components/CTABar';
import DailyPlanCard from './components/DailyPlanCard';
import MissionListSection from './components/MissionListSection';
import { MISSION_TAGS } from './constants/icon';
import formatKRDate from '@/utils/formatKRDate';

function Missions() {
  const [openSheet, setOpenSheet] = useState(false);
  const [missions, setMissions] = useState<Mission[]>([]);

  const onAddMission = () => setOpenSheet(true);
  const onCloseSheet = () => setOpenSheet(false);
  const onNext = () => alert('다음');
  const todayKR = useMemo(() => formatKRDate(new Date()), []);

  useEffect(() => {
    // 미션 리스트 조회, GET, /api/missions
    const missionsMock = mocks.data.missionsMock;
    if (missionsMock) {
      setMissions([...missionsMock]);
    } else {
      setMissions([]);
    }
  }, []);

  return (
    <>
      <Screen>
        <Title>{todayKR}</Title>

        {/* 일일 계획 카드 */}
        <DailyPlanCard dailyMissions={missions} onClickAdd={onAddMission} />

        {/* 추천 리스트 */}
        <MissionListSection missions={missions} onAddMission={onAddMission} />

        {/* 하단 CTA */}
        <CTABar onNext={onNext} />
      </Screen>
      {openSheet && (
        <Overlay onClick={onCloseSheet}>
          <Sheet onClick={(e) => e.stopPropagation()}>
            <Handle />
            <SheetTitle>미션 추가</SheetTitle>

            <Input placeholder="자기소개서 나의 강점 3가지 정리해보기" />

            <ChipRow>
              {MISSION_TAGS.map(({ key, label, icon }) => (
                <Chip key={key}>
                  <span aria-hidden>{icon}</span>
                  <Typography as="span" variant="body1Regular" color="default">
                    {label}
                  </Typography>
                </Chip>
              ))}
            </ChipRow>

            <Primary
              onClick={() => {
                // TODO: 실제 추가 로직
                alert('추가');
                onCloseSheet();
              }}
            >
              일일 계획에 추가
            </Primary>

            <Danger onClick={onCloseSheet}>삭제하기</Danger>
          </Sheet>
        </Overlay>
      )}
    </>
  );
}

export default Missions;
