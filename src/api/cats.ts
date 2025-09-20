import { http } from '@/lib/http';
import type { Cat } from './types';

export const CatsAPI = {
  create(payload: { name: string }) {
    return http.post<Cat>('/api/cats', payload).then((r) => r.data);
  },
  detail() {
    return http.get<Cat>('/api/cats').then((r) => r.data);
  },
  update(payload: Partial<Cat>) {
    return http.put<Cat>('/api/cats', payload).then((r) => r.data);
  },
};
