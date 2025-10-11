import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from '@/constants/http';

export const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const storeAuthToken = (newAccessToken: string, newRefreshToken: string) => {
  sessionStorage.setItem(ACCESS_TOKEN_KEY, newAccessToken);
  sessionStorage.setItem(REFRESH_TOKEN_KEY, newRefreshToken);
};

export const removeAuthToken = () => {
  sessionStorage.removeItem(ACCESS_TOKEN_KEY);
  sessionStorage.removeItem(REFRESH_TOKEN_KEY);
};
