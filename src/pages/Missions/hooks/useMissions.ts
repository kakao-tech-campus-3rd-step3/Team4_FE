import { useQuery } from '@tanstack/react-query';
import { MissionsAPI } from '@/api/missions';

export const useMissions = () => {
  return useQuery({
    queryKey: ['missions', 'recommended'],
    queryFn: MissionsAPI.listRecommended,
  });
};
