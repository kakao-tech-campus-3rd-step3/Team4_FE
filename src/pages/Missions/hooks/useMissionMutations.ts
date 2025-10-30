import { useMutation, useQueryClient } from '@tanstack/react-query';
import { MissionsAPI } from '@/api/missions';
import type { Mission } from '@/api/types';

export const useMissionMutations = () => {
  const queryClient = useQueryClient();

  const createMission = useMutation({
    mutationFn: (payload: { content: string; category: Mission['category'] }) =>
      MissionsAPI.createCustom(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['missions', 'daily'] });
    },
  });

  const deleteMission = useMutation({
    mutationFn: (id: number) => MissionsAPI.deletePlan(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['missions', 'daily'] });
    },
  });

  return {
    createMission,
    deleteMission,
  };
};
