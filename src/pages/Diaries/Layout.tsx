import { Outlet } from 'react-router-dom';

function DiariesLayout() {
  return (
    <div style={{ marginTop: '50px' }}>
      <Outlet />
    </div>
  );
}

export default DiariesLayout;
