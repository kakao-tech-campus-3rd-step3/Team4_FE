import { useState } from 'react';
import type { Mission } from '@/api/types';

export const useMissionSheet = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [missionContent, setMissionContent] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Mission['category'] | null>(null);
  const [selectedMissionId, setSelectedMissionId] = useState<number | null>(null);

  const openSheet = (mission?: Mission) => {
    if (mission) {
      setMissionContent(mission.content);
      setSelectedCategory(mission.category);
      setSelectedMissionId(mission.id);
    } else {
      resetSheet();
    }
    setIsOpen(true);
  };

  const closeSheet = () => {
    setIsOpen(false);
  };

  const resetSheet = () => {
    setMissionContent('');
    setSelectedCategory(null);
    setSelectedMissionId(null);
  };

  return {
    isOpen,
    missionContent,
    selectedCategory,
    selectedMissionId,
    openSheet,
    closeSheet,
    resetSheet,
    setMissionContent,
    setSelectedCategory,
  };
};
