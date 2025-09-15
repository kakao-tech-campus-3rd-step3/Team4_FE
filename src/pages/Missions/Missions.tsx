import { useEffect, useState } from 'react';
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
import { MISSION_TAGS } from './constants/icon';
import { Typography } from '@/components/common/Typography';
import mocks from '@/mockSetup';
import DailyPlanCard from './components/DailyPlanCard';
import MissionListSection from './components/MissionListSection';
import CTABar from './components/CTABar';

function Missions() {
  const [openSheet, setOpenSheet] = useState(false);
  const [missions, setMissions] = useState<any[]>([]);

  const onAddMission = () => setOpenSheet(true);
  const onCloseSheet = () => setOpenSheet(false);
  const onNext = () => alert('다음');

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
        <Title>missions</Title>

        {/* 일일 계획 카드 */}
        <DailyPlanCard />

        {/* 미션 리스트 */}
        <MissionListSection missions={missions} onClickAdd={onAddMission} />

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
