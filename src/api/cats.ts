import { http } from '@/lib/http';
import type { Cat, ChatResponse, ChatHistoryPage, CatExist } from './types';
import { sleep } from '@/utils/api';

export const CatsAPI = {
  async create(payload: { name: string }) {
    return http.post<Cat>('/api/cats', payload).then((r) => r.data);
  },
  detail() {
    return http.get<Cat>('/api/cats').then((r) => r.data);
  },
  update(payload: Partial<Cat>) {
    return http.put<Cat>('/api/cats', payload).then((r) => r.data);
  },
  sendMessage(payload: { message: string }) {
    return http.post<ChatResponse>('/api/chat', payload).then((r) => r.data);
  },
  async loadChatHistory({ params }: { params: { size: number; page: number } }) {
    await sleep(1000);
    return http.get<ChatHistoryPage>('/api/chat', { params }).then((r) => r.data);
  },
  check() {
    return http.get<CatExist>('/api/cats/check').then((r) => r.data);
  },
};
