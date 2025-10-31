import { useMemo } from 'react';
import { Screen } from './Missions.styles';
import CTABar from './components/CTABar';
import DailyPlanCard from './components/DailyPlanCard';
import MissionListSection from './components/MissionListSection';
import MissionSheet from './components/MissionSheet';
import formatKRDate from '@/utils/formatKRDate';
import { useDailyMissions } from './hooks/useDailyMissions';
import { useMissionMutations } from './hooks/useMissionMutations';
import { useMissionSheet } from './hooks/useMissionSheet';
import { Typography } from '@/components/common/Typography';
import { useMissions } from './hooks/useMissions';

function Missions() {
  const todayKR = useMemo(() => formatKRDate(new Date()), []);

  // 데이터 조회
  const { data: missions = [] } = useMissions();
  const { data: dailyPlans = [] } = useDailyMissions();

  // Mutations
  const { createCustomAndAddToPlan, addToPlan, deletePlan } = useMissionMutations();

  // Sheet 상태 관리
  const {
    isOpen,
    mode,
    missionContent,
    selectedCategory,
    selectedMissionId,
    selectedPlanId,
    openForRecommended,
    openForCustom,
    openForPlan,
    closeSheet,
    resetSheet,
    setMissionContent,
    setSelectedCategory,
  } = useMissionSheet();

  const handleConfirm = () => {
    if (mode === 'add-recommended') {
      // 추천 미션을 일일계획에 추가
      if (!selectedMissionId) {
        alert('추가할 미션이 선택되지 않았습니다.');
        return;
      }

      addToPlan.mutate(
        { missionId: selectedMissionId, missionType: 'REGULAR' },
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
    } else if (mode === 'create-custom') {
      // 커스텀 미션 생성 후 일일계획에 추가
      if (!missionContent || !selectedCategory) {
        alert('미션 내용과 카테고리를 모두 입력해주세요!');
        return;
      }

      createCustomAndAddToPlan.mutate(
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
    }
  };

  const handleDelete = () => {
    if (!selectedPlanId) {
      alert('삭제할 미션이 선택되지 않았습니다.');
      return;
    }

    if (!confirm('이 미션을 삭제하시겠습니까?')) return;

    deletePlan.mutate(selectedPlanId, {
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
        <Typography variant="title2Regular" color="default" style={{ marginBottom: '12px' }}>
          {todayKR}
        </Typography>
        <DailyPlanCard
          dailyPlans={dailyPlans}
          onClickAdd={openForCustom}
          onClickPlan={openForPlan}
        />
        <MissionListSection missions={missions} onAddMission={openForRecommended} />
        <CTABar onNext={onNext} />
      </Screen>

      <MissionSheet
        isOpen={isOpen}
        mode={mode}
        missionContent={missionContent}
        selectedCategory={selectedCategory}
        onClose={closeSheet}
        onContentChange={setMissionContent}
        onCategoryChange={setSelectedCategory}
        onConfirm={handleConfirm}
        onDelete={handleDelete}
      />
    </>
  );
}

export default Missions;
