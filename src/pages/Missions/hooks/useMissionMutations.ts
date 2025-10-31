import { useMutation, useQueryClient } from '@tanstack/react-query';
import { MissionsAPI } from '@/api/missions';
import type { Mission } from '@/api/types';

export const useMissionMutations = () => {
  const queryClient = useQueryClient();

  const createCustomAndAddToPlan = useMutation({
    mutationFn: async (payload: { content: string; category: Mission['category'] }) => {
      // 1단계: 커스텀 미션 생성
      const createdMission = await MissionsAPI.createCustom(payload);

      // 2단계: 생성된 미션을 일일계획에 추가
      await MissionsAPI.addToPlan({ missionId: createdMission.id, missionType: 'CUSTOM' });
      return createdMission;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['missions', 'daily'] });
    },
  });

  const addToPlan = useMutation({
    mutationFn: (payload: { missionId: number; missionType: 'REGULAR' }) =>
      MissionsAPI.addToPlan(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['missions', 'daily'] });
    },
  });

  const deletePlan = useMutation({
    mutationFn: (id: number) => MissionsAPI.deletePlan(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['missions', 'daily'] });
    },
  });

  return {
    createCustomAndAddToPlan,
    addToPlan,
    deletePlan,
  };
};
