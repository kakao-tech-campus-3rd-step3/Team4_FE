import { useState } from 'react';
import { TABS } from '../../constants/tab';
import type { SelectedItem, StoreItem } from '../../types/Item';
import type { Tab } from '../../types/tab';
import ItemOwnedGrid from '../ItemOwnedGrid';
import ItemStoreGrid from '../ItemStoreGrid';
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
      <Tabs tab={tab} setTab={handleChangeTab} />
      {tab === TABS.STORE ? (
        <ItemStoreGrid items={storeItems} />
      ) : (
        <ItemOwnedGrid items={ownedItems} />
      )}
    </ContentContainer>
  );
}

export default CharacterTab;
