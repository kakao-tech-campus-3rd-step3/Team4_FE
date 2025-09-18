import axios from 'axios';

export const http = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10_000,
  withCredentials: false,
});

// 요청 인터셉터: 토큰 주입
http.interceptors.request.use((config) => {
  const token = localStorage.getItem('access_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// 응답 인터셉터: 오류 표준화
http.interceptors.response.use(
  (res) => res,
  (err) => {
    const status = err?.response?.status ?? 0;
    const message = err?.response?.data?.message || err?.message || 'Network error';
    // 401 공통 처리 예시
    if (status === 401) {
      localStorage.removeItem('access_token');
      // 위치에 맞게 라우팅 처리: window.location.href = '/login';
    }
    return Promise.reject({ status, message, raw: err });
  }
);
