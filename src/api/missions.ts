import { http } from '@/lib/http';
import type { Mission, Plan } from './types';

export const MissionsAPI = {
  listRecommended() {
    return http.get<Mission[]>('/api/missions').then((r) => r.data);
  },

  createCustom(payload: { content: string; category: Mission['category'] }) {
    return http.post<Mission>('/api/missions/custom', payload).then((r) => r.data);
  },
  updateCustom(id: string, payload: Partial<{ title: string; category: Mission['category'] }>) {
    return http.patch<Mission>(`/api/missions/custom/${id}`, payload).then((r) => r.data);
  },

  getDailyMissions() {
    return http.get<{ plans: Plan[] }>('/api/plans').then((r) => r.data.plans);
  },

  addToPlan(payload: { missionId: number; missionType: 'REGULAR' | 'CUSTOM' }) {
    return http.post(`/api/plans`, payload).then((r) => r.data);
  },

  togglePlan({ id, isDone }: { id: number; isDone: boolean }) {
    return http.patch(`/api/plans/${id}`, { isDone }).then((r) => r.data);
  },
  deletePlan(id: number) {
    return http.delete(`/api/plans/${id}`).then(() => true);
  },
  editCustom({
    planId,
    payload,
  }: {
    planId: string;
    payload: Partial<{ content: string; category: Mission['category'] }>;
  }) {
    return http.put(`/api/plans/${planId}`, payload).then((r) => r.data);
  },
};
