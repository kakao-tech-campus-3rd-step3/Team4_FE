import { useMemo } from 'react';
import { BackArrowIcon, Content, Header, Screen } from './Missions.styles';
import DailyPlanCard from './components/DailyPlanCard';
import MissionListSection from './components/MissionListSection';
import MissionSheet from './components/MissionSheet';
import formatKRDate from '@/utils/formatKRDate';
import { useDailyMissions } from './hooks/useDailyMissions';
import { useMissionMutations } from './hooks/useMissionMutations';
import { useMissionSheet } from './hooks/useMissionSheet';
import { Typography } from '@/components/common/Typography';
import { useMissions } from './hooks/useMissions';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';

function Missions() {
  const navigate = useNavigate();

  const todayKR = useMemo(() => formatKRDate(new Date()), []);

  // 데이터 조회
  const { data: missions = [] } = useMissions();
  const { data: dailyPlans = [] } = useDailyMissions();

  // Mutations
  const { createCustomAndAddToPlan, addToPlan, togglePlan, deletePlan, editCustom } =
    useMissionMutations();

  // Sheet 상태 관리
  const {
    isOpen,
    mode,
    missionContent,
    selectedCategory,
    selectedMissionId,
    selectedPlanId,
    selectedMissionType,
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

  const handleEdit = () => {
    if (!selectedMissionId) {
      alert('수정할 미션이 선택되지 않았습니다.');
      return;
    }

    if (!missionContent || !selectedCategory) {
      alert('미션 내용과 카테고리를 모두 입력해주세요!');
      return;
    }

    editCustom.mutate(
      {
        id: String(selectedMissionId),
        payload: { content: missionContent, category: selectedCategory },
      },
      {
        onSuccess: () => {
          alert('미션이 수정되었습니다!');
          closeSheet();
          resetSheet();
        },
        onError: () => {
          alert('수정 중 오류가 발생했습니다.');
        },
      },
    );
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

  return (
    <>
      <Screen>
        <div onClick={() => navigate(ROUTES.HOME)}>
          <BackArrowIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 108.06">
            <path d="M63.94,24.28a14.28,14.28,0,0,0-20.36-20L4.1,44.42a14.27,14.27,0,0,0,0,20l38.69,39.35a14.27,14.27,0,0,0,20.35-20L48.06,68.41l60.66-.29a14.27,14.27,0,1,0-.23-28.54l-59.85.28,15.3-15.58Z" />
          </BackArrowIcon>
        </div>
        <Header>
          <Typography variant="title1Regular" color="default">
            {todayKR}
          </Typography>
        </Header>
        <Content>
          <DailyPlanCard
            dailyPlans={dailyPlans}
            onClickAdd={openForCustom}
            onClickPlan={openForPlan}
            onTogglePlan={(id, isDone) => togglePlan.mutate({ id, isDone })}
          />
          <MissionListSection missions={missions} onAddMission={openForRecommended} />
        </Content>
        {/* <CTABar onNext={onNext} /> */}
      </Screen>

      <MissionSheet
        isOpen={isOpen}
        mode={mode}
        missionContent={missionContent}
        selectedCategory={selectedCategory}
        missionType={selectedMissionType}
        onClose={closeSheet}
        onContentChange={setMissionContent}
        onCategoryChange={setSelectedCategory}
        onConfirm={handleConfirm}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </>
  );
}

export default Missions;
