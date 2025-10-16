import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from '@/constants/http';
import { ROUTES } from '@/constants/routes';

function OauthRedirect() {
  const params = new URLSearchParams(window.location.search);
  const accessToken = params.get('accessToken');
  const refreshToken = params.get('refreshToken');

  if (!accessToken || !refreshToken) {
    alert('로그인 실패! 다시 시도해주세요');
    window.location.href = ROUTES.LOGIN;
    return null;
  }

  sessionStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
  sessionStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);

  window.location.href = ROUTES.HOME;

  return null;
}

export default OauthRedirect;
