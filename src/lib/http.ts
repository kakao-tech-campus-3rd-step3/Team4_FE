import { ACCESS_TOKEN_KEY, HTTP_STATUS, REFRESH_TOKEN_KEY } from '@/constants/http';
import axios from 'axios';

export const http = axios.create({
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
  (err) => {
    const status = err?.response?.status;
    const message = err?.response?.data?.message || err?.message || 'Network error';
    // 401 공통 처리 예시
    if (status === HTTP_STATUS.UNAUTHORIZED) {
      sessionStorage.removeItem(ACCESS_TOKEN_KEY);
      sessionStorage.removeItem(REFRESH_TOKEN_KEY);
      window.location.href = '/login';
    }
    return Promise.reject({ status, message, raw: err });
  },
);
