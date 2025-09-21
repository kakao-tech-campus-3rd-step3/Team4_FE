import { http } from '@/lib/http';

export const EmotionAPI = {
  getTest() {
    return http.get('/api/emotion-test').then((r) => r.data);
  },
  submitTest(payload: { answers: number[] }) {
    return http.post('/api/emotion-test', payload).then((r) => r.data);
  },
};
