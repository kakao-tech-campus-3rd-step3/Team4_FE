import { useQuery } from '@tanstack/react-query';
import { MissionsAPI } from '@/api/missions';

export const useDailyMissions = () => {
  return useQuery({
    queryKey: ['missions', 'daily'],
    queryFn: MissionsAPI.getDailyMissions,
  });
};
