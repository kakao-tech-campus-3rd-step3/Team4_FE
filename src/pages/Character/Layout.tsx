import styled from '@emotion/styled';
import { Outlet } from 'react-router-dom';

const LayoutContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function CharacterLayout() {
  return (
    <LayoutContainer>
      <Outlet />
    </LayoutContainer>
  );
}

export default CharacterLayout;
