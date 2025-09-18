import { http } from '@/lib/http';
import type { Diary } from './types';

export const DiariesAPI = {
  create(payload: { title: string; content: string }) {
    return http.post<Diary>('/api/diaries', payload).then((r) => r.data);
  },
  getFeedbacks(id: string) {
    return http.get('/api/diaries/' + id + '/feedbacks').then((r) => r.data);
  },
  detail(id: string) {
    return http.get<Diary>(`/api/diaries/${id}`).then((r) => r.data);
  },
  listChats(size: number, page: number) {
    return http.get<any>('/api/chats', { params: { size, page } }).then((r) => r.data);
  },
};
