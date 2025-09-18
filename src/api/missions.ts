import { http } from '@/lib/http';
import type { Mission } from './types';

export const MissionsAPI = {
  listRecommended() {
    return http.get<Mission>('/api/missions').then((r) => r.data);
  },

  createCustom(payload: { title: string; category: Mission['category'] }) {
    return http.post<Mission>('/api/custom-missions', payload).then((r) => r.data);
  },
  updateCustom(id: string, payload: Partial<{ title: string; category: Mission['category'] }>) {
    return http.patch<Mission>(`/api/custom-missions/${id}`, payload).then((r) => r.data);
  },
};
