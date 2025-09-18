import { http } from '@/lib/http';
import type { Plan } from './types';

export const PlansAPI = {
  add(payload: { missionId: string; date: string }) {
    return http.post<Plan>('/api/plans', payload).then((r) => r.data);
  },
  list(date: string, isDone?: boolean) {
    return http.get<Plan[]>('/api/plans', { params: { date, isDone } }).then((r) => r.data);
  },
  check(id: string) {
    return http.patch<Plan>(`/api/plans/${id}`, { done: true }).then((r) => r.data);
  },
  remove(id: string) {
    return http.delete<void>(`/api/plans/${id}`).then((r) => r.data);
  },
};
