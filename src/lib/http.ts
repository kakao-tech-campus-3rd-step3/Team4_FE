import { AuthAPI } from '@/api/auth';
import { ACCESS_TOKEN_KEY, HTTP_STATUS, REFRESH_TOKEN_KEY } from '@/constants/http';
import { ROUTES } from '@/constants/routes';
import axios from 'axios';

export const http = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10_000,
  withCredentials: false,
});

// 토큰 재발급용 별도 인스턴스 (순환참조 방지)
export const httpWithoutInterceptors = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10_000,
  withCredentials: false,
});

// 요청 인터셉터: 토큰 주입
http.interceptors.request.use((config) => {
  const token = sessionStorage.getItem(ACCESS_TOKEN_KEY);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// 응답 인터셉터: 오류 표준화
http.interceptors.response.use(
  (res) => res,
  async (err) => {
    const originalRequest = err.config;
    const status = err?.response?.status;
    const message = err?.response?.data?.message || err?.message || 'Network error';

    // 401 공통 처리 및 토큰 재발급
    if (status === HTTP_STATUS.UNAUTHORIZED && !originalRequest._retry) {
      originalRequest._retry = true;

      const refreshToken = sessionStorage.getItem(REFRESH_TOKEN_KEY);

      if (!refreshToken) {
        window.location.href = ROUTES.LOGIN;
        return Promise.reject({ status, message, raw: err });
      }

      try {
        const { accessToken: newAccessToken, refreshToken: newRefreshToken } =
          await AuthAPI.refreshToken({
            refreshToken,
          });

        sessionStorage.setItem(ACCESS_TOKEN_KEY, newAccessToken);
        sessionStorage.setItem(REFRESH_TOKEN_KEY, newRefreshToken);

        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return http(originalRequest);
      } catch {
        sessionStorage.removeItem(ACCESS_TOKEN_KEY);
        sessionStorage.removeItem(REFRESH_TOKEN_KEY);
        window.location.href = ROUTES.LOGIN;
        return Promise.reject({ status, message, raw: err });
      }
    }

    return Promise.reject({ status, message, raw: err });
  },
);
