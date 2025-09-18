import { http } from '@/lib/http';
import type { LoginRes } from './types';

export const AuthAPI = {
  googleLogin(body: { token: string }) {
    return http.post<LoginRes>('/api/oauth/google/auth', body).then((r) => r.data);
  },
};
