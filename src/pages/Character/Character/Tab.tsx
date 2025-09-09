import { Typography } from '@/components/common/Typography';
import styled from '@emotion/styled';
import { TABS } from '../constants/tab';

const TabContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  background-color: rgb(221, 186, 136);
`;

const TabButton = styled.div<{ isActive: boolean }>`
  flex: 1;
  display: flex;
  flex-direction: column;
  border-top-right-radius: ${({ theme }) => theme.borderRadius.lg};
  border-top-left-radius: ${({ theme }) => theme.borderRadius.lg};
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.colors.brand.background : theme.colors.brand.primary};
  padding: ${({ theme }) => theme.spacing[1]};
  cursor: pointer;
`;

function Tab({
  tab,
  setTab,
}: {
  tab: (typeof TABS)[keyof typeof TABS];
  setTab: (tab: (typeof TABS)[keyof typeof TABS]) => void;
}) {
  return (
    <TabContainer>
      <TabButton onClick={() => setTab(TABS.STORE)} isActive={tab === TABS.STORE}>
        <Typography variant="body2Regular" color="default">
          상점
        </Typography>
      </TabButton>
      <TabButton onClick={() => setTab(TABS.OWNED)} isActive={tab === TABS.OWNED}>
        <Typography variant="body2Regular" color="default">
          보유중
        </Typography>
      </TabButton>
    </TabContainer>
  );
}

export default Tab;
