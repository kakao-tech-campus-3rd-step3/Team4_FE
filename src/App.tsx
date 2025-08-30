import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>home</div>} />
        <Route path="/login" element={<div>login</div>} />
        <Route
          path="onboarding"
          element={
            <div>
              onboarding layout
              <Outlet />
            </div>
          }
        >
          <Route path=":step" element={<div>onboarding step</div>} />
        </Route>
        <Route
          path="/character"
          element={
            <div>
              character layout
              <Outlet />
            </div>
          }
        >
          <Route index element={<div>character</div>} />
          <Route path="chat" element={<div>character chat</div>} />
        </Route>
        <Route
          path="/diaries"
          element={
            <div>
              diary layout
              <Outlet />
            </div>
          }
        >
          <Route index element={<div>diary list</div>} />
          <Route
            path="new"
            element={
              <div>
                diary new
                <Outlet />
              </div>
            }
          >
            <Route path=":step" element={<div>step1: mood, step2: diary</div>} />
          </Route>
          <Route path=":id/feedback" element={<div>diary feedback</div>} />
          <Route path=":id" element={<div>diary detail</div>} />
        </Route>
        <Route path="/missions" element={<div>missions</div>} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
