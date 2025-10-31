import { useState } from 'react';
import type { Mission, Plan } from '@/api/types';

type SheetMode = 'add-recommended' | 'create-custom' | 'view-plan';

export const useMissionSheet = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<SheetMode>('create-custom');
  const [missionContent, setMissionContent] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Mission['category'] | null>(null);
  const [selectedMissionId, setSelectedMissionId] = useState<number | null>(null);
  const [selectedPlanId, setSelectedPlanId] = useState<number | null>(null);
  const [selectedMissionType, setSelectedMissionType] = useState<'RECOMMENDED' | 'CUSTOM' | null>(
    null,
  );

  const openForRecommended = (mission: Mission) => {
    setMode('add-recommended');
    setMissionContent(mission.content);
    setSelectedCategory(mission.category);
    setSelectedMissionId(mission.id);
    setSelectedPlanId(null);
    setIsOpen(true);
  };

  const openForCustom = () => {
    setMode('create-custom');
    setMissionContent('');
    setSelectedCategory(null);
    setSelectedMissionId(null);
    setSelectedPlanId(null);
    setIsOpen(true);
  };

  const openForPlan = (plan: Plan) => {
    setMode('view-plan');
    setMissionContent(plan.content);
    setSelectedCategory(plan.category);
    setSelectedMissionId(plan.missionId);
    setSelectedPlanId(plan.id);
    setSelectedMissionType(plan.missionType);
    setIsOpen(true);
  };

  const closeSheet = () => {
    setIsOpen(false);
  };

  const resetSheet = () => {
    setMissionContent('');
    setSelectedCategory(null);
    setSelectedMissionId(null);
    setSelectedPlanId(null);
    setSelectedMissionType(null);
  };

  return {
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
  };
};
