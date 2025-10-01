import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from '@/constants/http';

function OauthRedirect() {
  const params = new URLSearchParams(window.location.search);
  const accessToken = params.get('accessToken');
  const refreshToken = params.get('refreshToken');

  sessionStorage.setItem(ACCESS_TOKEN_KEY, accessToken ?? '');
  sessionStorage.setItem(REFRESH_TOKEN_KEY, refreshToken ?? '');

  window.location.href = '/';

  return null;
}

export default OauthRedirect;
