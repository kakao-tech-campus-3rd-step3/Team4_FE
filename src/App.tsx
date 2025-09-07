import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ROUTES } from './constants/routes';

// pages
import { default as CharacterIndex } from '@/pages/Character/Character/Character';
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
import AppLayout from './Layout';
import CharacterChat from './pages/Character/Chat';
import GlobalStyle from './styles/GlobalStyle';

let mocks = null;

if (import.meta.env.VITE_ENABLE_MOCK === '1') {
  mocks = await import('../mocks/data/characterStoreItemsMock');
}

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

function App() {
  return (
    <BrowserRouter basename={base}>
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
