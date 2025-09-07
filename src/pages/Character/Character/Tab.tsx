import { Typography } from '@/components/common/Typography';
import theme from '@/styles/theme';
import styled from '@emotion/styled';
import { TABS } from '../constants/tab';

const TabContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  background-color: rgb(221, 186, 136);
`;

const TabButton = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.brand.background};
  padding: 10px;
  cursor: pointer;
`;

function Tab({ setTab }: { setTab: (tab: (typeof TABS)[keyof typeof TABS]) => void }) {
  return (
    <TabContainer>
      <TabButton onClick={() => setTab(TABS.STORE)}>
        <Typography variant="body2Regular" color="default">
          상점
        </Typography>
      </TabButton>
      <TabButton onClick={() => setTab(TABS.OWNED)}>
        <Typography variant="body2Regular" color="default">
          보유중
        </Typography>
      </TabButton>
    </TabContainer>
  );
}

export default Tab;
