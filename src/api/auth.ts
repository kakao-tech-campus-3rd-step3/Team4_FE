import { http } from '@/lib/http';
import type { LoginRes } from './types';

export const AuthAPI = {
  login(body: { token: string }) {
    return http.post<LoginRes>('/oauth2/authorization/google', body).then((r) => r.data);
  },
};
