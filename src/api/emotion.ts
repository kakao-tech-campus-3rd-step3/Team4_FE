import { http } from '@/lib/http';
import type { AnswerType } from './types';

export const EmotionAPI = {
  getTest() {
    return http.get('/api/emotion-test').then((r) => r.data);
  },
  async submitTest(answers: AnswerType[]) {
    return http.post('/api/emotion-test', { request: answers }).then((r) => r.data);
  },
};
