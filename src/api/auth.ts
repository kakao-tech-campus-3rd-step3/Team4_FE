import { http } from '@/lib/http';
import type { LoginRes } from './types';

export const AuthAPI = {
  login(body: { token: string }) {
    return http.post<LoginRes>('/oauth2/authorization/google', body).then((r) => r.data);
  },
  refreshToken(body: { refreshToken: string }) {
    return http.post<LoginRes>('/api/auth/reissue', body).then((r) => r.data);
  },
};
