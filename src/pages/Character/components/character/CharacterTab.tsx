import { useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from '../../../../components/common/ErrorFallback';
import { MESSAGE } from '../../constants/message';
import { TABS } from '../../constants/tab';
import type { SelectedItem, StoreItem } from '../../types/Item';
import type { Tab } from '../../types/tab';
import OwnedItemsGrid from '../OwnedItems/OwnedItemsGrid';
import ItemStoreGrid from '../StoredItems/StoredItems';
import Tabs from '../Tab';
import { ContentContainer } from './Character.styles';

function CharacterTab({
  storeItems,
  ownedItems,
}: {
  storeItems: StoreItem[];
  ownedItems: SelectedItem[];
}) {
  const [tab, setTab] = useState<Tab>(TABS.STORE);

  const handleChangeTab = (nextTab: Tab) => {
    setTab(nextTab);
  };

  return (
    <ContentContainer>
      <ErrorBoundary fallbackRender={() => <ErrorFallback message={MESSAGE.ERROR} />}>
        <Tabs tab={tab} setTab={handleChangeTab} />
        {tab === TABS.STORE ? (
          <ItemStoreGrid items={storeItems} />
        ) : (
          <OwnedItemsGrid items={ownedItems} />
        )}
      </ErrorBoundary>
    </ContentContainer>
  );
}

export default CharacterTab;
