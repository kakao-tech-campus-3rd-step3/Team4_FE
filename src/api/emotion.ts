import { http } from '@/lib/http';
import type { AnswerType } from './types';

export const EmotionAPI = {
  getTest() {
    return http.get('/api/emotion-test').then((r) => r.data);
  },
  async submitTest(payload: { answers: AnswerType[] }) {
    return http.post('/api/emotion-test', payload).then((r) => r.data);
  },
};
