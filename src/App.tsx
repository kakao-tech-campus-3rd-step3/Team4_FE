import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import { ROUTES } from './constants/routes';

// Pages
import styled from '@emotion/styled';

import { DESIGN_BASE, DESIGN_RATIO } from './constants/layout';
import CharacterIndex from './pages/Character/\bCharacterIndex';
import CharacterChat from './pages/Character/Chat';
import CharacterLayout from './pages/Character/Layout';
import DiariesDetail from './pages/Diaries/Detail';
import DiariesFeedback from './pages/Diaries/Feedback';
import DiariesLayout from './pages/Diaries/Layout';
import DiariesList from './pages/Diaries/List';
import DiariesNewLayout from './pages/Diaries/New/Layout';
import DiariesNewMood from './pages/Diaries/New/Mood';
import Errors from './pages/Errors';
import Home from './pages/Home';
import Login from './pages/Login';
import Missions from './pages/Missions';
import OnboardingLayout from './pages/Onboarding/Layout';
import OnboardingStep from './pages/Onboarding/Step';

const AppViewport = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.colors.background.disabled};
`;

const DeviceFrame = styled.div`
  /* 세로 : 가로 = 892 : 412 ≈ 2.165 : 1 */
  aspect-ratio: ${DESIGN_RATIO.W} / ${DESIGN_RATIO.H};

  height: 100dvh;

  width: clamp(
    ${DESIGN_BASE.MIN_WIDTH}px,
    calc(100dvh * ${DESIGN_RATIO.W} / ${DESIGN_RATIO.H}),
    ${DESIGN_BASE.MAX_WIDTH}px
  );

  margin: 0 auto;
  background: ${({ theme }) => theme.colors.background.default};
`;

const Layout = styled.div`
  padding: 0 ${({ theme }) => theme.spacing[9]};
  width: 100%;
  height: 100%;
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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          {/* / */}
          <Route path={ROUTES.HOME} element={<Home />} />
          {/* /login */}
          <Route path={ROUTES.LOGIN} element={<Login />} />

          {/* /onboarding */}
          <Route path={ROUTES.ONBOARDING} element={<OnboardingLayout />}>
            {/* /onboarding/:step */}
            <Route path={ROUTES.ONBOARDING_STEP} element={<OnboardingStep />} />
          </Route>

          {/* /character */}
          <Route path={ROUTES.CHARACTER} element={<CharacterLayout />}>
            {/* /character */}
            <Route index element={<CharacterIndex />} />
            {/* /character/chat */}
            <Route path={ROUTES.CHARACTER_CHAT} element={<CharacterChat />} />
          </Route>

          {/* /diaries */}
          <Route path={ROUTES.DIARIES} element={<DiariesLayout />}>
            {/* /diaries */}
            <Route index element={<DiariesList />} />
            {/* /diaries/new */}
            <Route path={ROUTES.DIARIES_NEW} element={<DiariesNewLayout />}>
              {/* /diaries/new/:step */}
              <Route path={ROUTES.DIARIES_NEW_STEP} element={<DiariesNewMood />} />
            </Route>
            {/* /diaries/:id */}
            <Route path={ROUTES.DIARIES_DETAIL} element={<DiariesDetail />} />
            {/* /diaries/:id/feedback */}
            <Route path={ROUTES.DIARIES_FEEDBACK} element={<DiariesFeedback />} />
          </Route>

          {/* /missions */}
          <Route path={ROUTES.MISSIONS} element={<Missions />} />
          {/* * (404) */}
          <Route path={ROUTES.NOT_FOUND} element={<Errors />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
