import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import { ROUTES } from './constants/routes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<div>home</div>} />
        <Route path={ROUTES.LOGIN} element={<div>login</div>} />

        <Route
          path={ROUTES.ONBOARDING}
          element={
            <div>
              onboarding layout
              <Outlet />
            </div>
          }
        >
          <Route path={ROUTES.ONBOARDING_STEP} element={<div>onboarding step</div>} />
        </Route>

        <Route
          path={ROUTES.CHARACTER}
          element={
            <div>
              character layout
              <Outlet />
            </div>
          }
        >
          <Route index element={<div>character</div>} />
          <Route path={ROUTES.CHARACTER_CHAT} element={<div>character chat</div>} />
        </Route>

        <Route
          path={ROUTES.DIARIES}
          element={
            <div>
              diary layout
              <Outlet />
            </div>
          }
        >
          <Route index element={<div>diary list</div>} />
          <Route
            path={ROUTES.DIARIES_NEW}
            element={
              <div>
                diary new
                <Outlet />
              </div>
            }
          >
            <Route path={ROUTES.DIARIES_NEW_STEP} element={<div>step1: mood, step2: diary</div>} />
          </Route>
          <Route path={ROUTES.DIARIES_DETAIL} element={<div>diary detail</div>} />
          <Route path={ROUTES.DIARIES_FEEDBACK} element={<div>diary feedback</div>} />
        </Route>

        <Route path={ROUTES.MISSIONS} element={<div>missions</div>} />
        <Route path={ROUTES.NOT_FOUND} element={<div>404 Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
