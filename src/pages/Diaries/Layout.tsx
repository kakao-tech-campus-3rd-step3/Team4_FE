import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';

const Container = styled.div`
  margin-top: 50px;
  padding: ${({ theme }) => theme.spacing[4]};
  box-sizing: border-box;
`;

function DiariesLayout() {
  return (
    <Container>
      <Outlet />
    </Container>
  );
}

export default DiariesLayout;
