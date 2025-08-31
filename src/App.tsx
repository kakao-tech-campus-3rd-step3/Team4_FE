import { Global, css } from '@emotion/react';
import styled from '@emotion/styled';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import { DESIGN_BASE, DESIGN_RATIO, PAGE_PADDING, SAFE_FALLBACK } from './constants/layout';
import { ROUTES } from './constants/routes';

// pages
import { default as CharacterIndex } from '@/pages/Character/Index';
import CharacterLayout from '@/pages/Character/Layout';
import DiariesDetail from '@/pages/Diaries/Detail';
import DiariesFeedback from '@/pages/Diaries/Feedback';
import DiariesLayout from '@/pages/Diaries/Layout';
import DiariesList from '@/pages/Diaries/List';
import DiariesNewLayout from '@/pages/Diaries/New/Layout';
import DiariesNewMood from '@/pages/Diaries/New/Mood';
import Errors from '@/pages/Errors';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Missions from '@/pages/Missions';
import OnboardingLayout from '@/pages/Onboarding/Layout';
import OnboardingStep from '@/pages/Onboarding/Step';
import CharacterChat from './pages/Character/Chat';

const AppViewport = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100dvh;
  background: ${({ theme }) => theme.colors.background.disabled};

  overflow: hidden;
`;

const DeviceFrame = styled.div`
  /* 412 x 892 비율 고정 */
  aspect-ratio: ${DESIGN_RATIO.W} / ${DESIGN_RATIO.H};
  height: 100dvh;

  /* usable height 기반 너비 산출도 가능하지만, 여기선 전체 높이 기반 유지 */
  width: clamp(
    ${DESIGN_BASE.MIN_WIDTH}px,
    calc(100dvh * ${DESIGN_RATIO.W} / ${DESIGN_RATIO.H}),
    ${DESIGN_BASE.MAX_WIDTH}px
  );

  background: ${({ theme }) => theme.colors.background.default};
  overflow-y: auto;
  overflow-x: hidden;

  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Layout = styled.div`
  /* ios safari 상하단 안전영역 대응 */
  --safeTop: env(safe-area-inset-top, 0px);
  --safeBottom: env(safe-area-inset-bottom, 0px);

  padding-top: calc(max(var(--safeTop), ${SAFE_FALLBACK.TOP_MIN}px) + ${PAGE_PADDING.TOP_EXTRA}px);

  padding-bottom: calc(
    max(var(--safeBottom), ${SAFE_FALLBACK.BOTTOM_MIN}px) + ${PAGE_PADDING.BOTTOM_EXTRA}px
  );

  padding-inline: ${({ theme }) => theme.spacing[9]};

  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  min-height: 100%;
`;

// 모바일 퍼스트 디자인
function AppLayout() {
  return (
    <AppViewport>
      <DeviceFrame>
        <Layout>
          <Outlet />
        </Layout>
      </DeviceFrame>
    </AppViewport>
  );
}

export const GlobalStyle = () => (
  <Global
    styles={css`
      @font-face {
        font-family: 'OngleipEoyeonce';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2105@1.1/Uiyeun.woff')
          format('woff');
        font-weight: normal;
        font-display: swap;
      }

      body {
        font-family: 'OngleipEoyeonce', sans-serif;
      }
    `}
  />
);

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route element={<AppLayout />}>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.LOGIN} element={<Login />} />

          <Route path={ROUTES.ONBOARDING} element={<OnboardingLayout />}>
            <Route path={ROUTES.ONBOARDING_STEP} element={<OnboardingStep />} />
          </Route>

          <Route path={ROUTES.CHARACTER} element={<CharacterLayout />}>
            <Route index element={<CharacterIndex />} />
            <Route path={ROUTES.CHARACTER_CHAT} element={<CharacterChat />} />
          </Route>

          <Route path={ROUTES.DIARIES} element={<DiariesLayout />}>
            <Route index element={<DiariesList />} />
            <Route path={ROUTES.DIARIES_NEW} element={<DiariesNewLayout />}>
              <Route path={ROUTES.DIARIES_NEW_STEP} element={<DiariesNewMood />} />
            </Route>
            <Route path={ROUTES.DIARIES_DETAIL} element={<DiariesDetail />} />
            <Route path={ROUTES.DIARIES_FEEDBACK} element={<DiariesFeedback />} />
          </Route>

          <Route path={ROUTES.MISSIONS} element={<Missions />} />
          <Route path={ROUTES.NOT_FOUND} element={<Errors />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
