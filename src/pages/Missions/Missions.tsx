import type { Mission } from '@/api/types';
import { Typography } from '@/components/common/Typography';
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
import { MissionsAPI } from '@/api/missions';

function Missions() {
  const [openSheet, setOpenSheet] = useState(false);
  const [missions, setMissions] = useState<Mission[]>([]);
  const [dailyMissions, setDailyMissions] = useState<Mission[]>([]);
  const [missionContent, setMissionContent] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Mission['category'] | null>(null);

  const onAddMission = (mission?: Mission) => {
    if (mission) {
      setMissionContent(mission.content); //  클릭한 미션 내용을 Input에 세팅
      setSelectedCategory(mission.category); //  카테고리도 같이 선택 (선택사항)
    }
    setOpenSheet(true);
  };

  const onCloseSheet = () => setOpenSheet(false);
  const onNext = () => alert('다음');
  const todayKR = useMemo(() => formatKRDate(new Date()), []);

  const handleAddToPlan = async () => {
    if (!missionContent || !selectedCategory) {
      alert('미션 내용과 카테고리를 모두 입력해주세요!');
      return;
    }

    console.log('보내는 데이터:', { content: missionContent, category: selectedCategory });

    const newMission = { content: missionContent, category: selectedCategory };

    try {
      // 서버에 POST 요청
      const createdMission = await MissionsAPI.createCustom(newMission);

      // 즉시 반영
      setDailyMissions((prev) => [...prev, createdMission]);
      alert('일일 계획에 추가되었습니다!');
      onCloseSheet();

      // 입력값 초기화
      setMissionContent('');
      setSelectedCategory(null);
    } catch (error) {
      console.error(error);
      alert('추가 중 오류가 발생했습니다.');
    }
  };

  useEffect(() => {
    // 추천 리스트 조회, GET, /api/missions
    const fetchMissions = async () => {
      try {
        const data = await MissionsAPI.listRecommended();
        setMissions(data);
      } catch (error) {
        console.error('미션 목록 불러오기 실패:', error);
        setMissions([]);
      }
    };

    fetchMissions();
  }, []);

  useEffect(() => {
    // 일일계획 조회, GET, /api/missions/custom
    const fetchMissions = async () => {
      try {
        const data = await MissionsAPI.getDailyMissions();
        setDailyMissions(data);
      } catch (error) {
        console.error('미션 목록 불러오기 실패:', error);
        setDailyMissions([]);
      }
    };

    fetchMissions();
  }, []);

  return (
    <>
      <Screen>
        <Title>{todayKR}</Title>

        {/* 일일 계획 카드 */}
        <DailyPlanCard dailyMissions={dailyMissions} onClickAdd={onAddMission} />

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

            <Input
              placeholder="자기소개서 나의 강점 3가지 정리해보기"
              value={missionContent}
              onChange={(e) => setMissionContent(e.target.value)}
            />

            <ChipRow>
              {MISSION_TAGS.map(({ key, label, icon }) => (
                <Chip
                  key={key}
                  onClick={() => setSelectedCategory(key)}
                  data-selected={selectedCategory === key}
                >
                  <span aria-hidden>{icon}</span>
                  <Typography as="span" variant="body1Regular" color="default">
                    {label}
                  </Typography>
                </Chip>
              ))}
            </ChipRow>

            <Primary onClick={handleAddToPlan}>일일 계획에 추가</Primary>

            <Danger onClick={onCloseSheet}>삭제하기</Danger>
          </Sheet>
        </Overlay>
      )}
    </>
  );
}

export default Missions;
