import GlobalStyle from '@/styles/GlobalStyle';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ROUTES } from './constants/routes';

// pages
import Layout from '@/Layout';
import CharacterChat from '@/pages/Character/Chat';
import CharacterScreen from '@/pages/Character/components/Character/CharacterScreen';
import CharacterLayout from '@/pages/Character/Layout';
import DiariesDetail from '@/pages/Diaries/Detail';
import DiariesFeedback from '@/pages/Diaries/Feedback';
import DiariesLayout from '@/pages/Diaries/Layout';
import DiariesList from '@/pages/Diaries/List';
import DiariesNewLayout from '@/pages/Diaries/New/Layout';
import DiariesNewMood from '@/pages/Diaries/New/Mood';
import DiariesNewWrite from '@/pages/Diaries/New/Write';
import Errors from '@/pages/Errors';
import Home from '@/pages/Home/Home';
import Login from '@/pages/Login/Login';
import Missions from '@/pages/Missions/Missions';
import OnboardingLayout from '@/pages/Onboarding/Layout';
import OnboardingStep from '@/pages/Onboarding/Step';
import Test from '@/pages/Onboarding/Test/Test';

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter basename={base}>
        <GlobalStyle />
        <Routes>
          <Route element={<Layout />}>
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.LOGIN} element={<Login />} />
            {/* <Route path={ROUTES.OAUTH_REDIRECT} element={<OauthRedirect />} /> */}

            <Route path={ROUTES.ONBOARDING} element={<OnboardingLayout />}>
              <Route path={ROUTES.ONBOARDING_STEP} element={<OnboardingStep />} />
              <Route path={ROUTES.ONBOARDING_TEST} element={<Test />} />
            </Route>

            <Route path={ROUTES.CHARACTER} element={<CharacterLayout />}>
              <Route index element={<CharacterScreen />} />
              <Route path={ROUTES.CHARACTER_CHAT} element={<CharacterChat />} />
            </Route>

            <Route path={ROUTES.DIARIES} element={<DiariesLayout />}>
              <Route index element={<DiariesList />} />
              <Route path={ROUTES.DIARIES_NEW} element={<DiariesNewLayout />}>
                <Route path={ROUTES.DIARIES_NEW_STEP} element={<DiariesNewMood />} />
                <Route path={ROUTES.DIARIES_NEW_WRITE} element={<DiariesNewWrite />} />
              </Route>
              <Route path={ROUTES.DIARIES_DETAIL} element={<DiariesDetail />} />
              <Route path={ROUTES.DIARIES_FEEDBACK} element={<DiariesFeedback />} />
            </Route>

            <Route path={ROUTES.MISSIONS} element={<Missions />} />
            <Route path={ROUTES.NOT_FOUND} element={<Errors />} />
          </Route>
        </Routes>
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
