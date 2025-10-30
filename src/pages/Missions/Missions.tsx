import { useMemo } from 'react';
import { Screen, Title } from './Missions.styles';
import CTABar from './components/CTABar';
import DailyPlanCard from './components/DailyPlanCard';
import MissionListSection from './components/MissionListSection';
import MissionSheet from './components/MissionSheet';
import formatKRDate from '@/utils/formatKRDate';
import { useMissions } from './hooks/useMissions';
import { useDailyMissions } from './hooks/useDailyMissions';
import { useMissionMutations } from './hooks/useMissionMutations';
import { useMissionSheet } from './hooks/useMissionSheet';

function Missions() {
  const todayKR = useMemo(() => formatKRDate(new Date()), []);

  // 데이터 조회
  const { data: missions = [] } = useMissions();
  const { data: dailyMissions = [] } = useDailyMissions();

  // Mutations
  const { createMission, deleteMission } = useMissionMutations();

  // Sheet 상태 관리
  const {
    isOpen,
    missionContent,
    selectedCategory,
    selectedMissionId,
    openSheet,
    closeSheet,
    resetSheet,
    setMissionContent,
    setSelectedCategory,
  } = useMissionSheet();

  const handleAddToPlan = () => {
    if (!missionContent || !selectedCategory) {
      alert('미션 내용과 카테고리를 모두 입력해주세요!');
      return;
    }

    createMission.mutate(
      { content: missionContent, category: selectedCategory },
      {
        onSuccess: () => {
          alert('일일 계획에 추가되었습니다!');
          closeSheet();
          resetSheet();
        },
        onError: () => {
          alert('추가 중 오류가 발생했습니다.');
        },
      },
    );
  };

  const handleDeleteMission = () => {
    if (!selectedMissionId) {
      alert('삭제할 미션이 선택되지 않았습니다.');
      return;
    }

    if (!confirm('이 미션을 삭제하시겠습니까?')) return;

    deleteMission.mutate(selectedMissionId, {
      onSuccess: () => {
        alert('미션이 삭제되었습니다.');
        closeSheet();
        resetSheet();
      },
      onError: () => {
        alert('삭제 중 오류가 발생했습니다.');
      },
    });
  };

  const onNext = () => alert('다음');

  return (
    <>
      <Screen>
        <Title>{todayKR}</Title>
        <DailyPlanCard dailyMissions={dailyMissions} onClickAdd={openSheet} />
        <MissionListSection missions={missions} onAddMission={openSheet} />
        <CTABar onNext={onNext} />
      </Screen>

      <MissionSheet
        isOpen={isOpen}
        missionContent={missionContent}
        selectedCategory={selectedCategory}
        selectedMissionId={selectedMissionId}
        onClose={closeSheet}
        onContentChange={setMissionContent}
        onCategoryChange={setSelectedCategory}
        onAdd={handleAddToPlan}
        onDelete={handleDeleteMission}
      />
    </>
  );
}

export default Missions;
