import { BASE_URL } from '@/constants/routes';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import mocks from '../../../mockSetup';
import { TABS } from '../constants/tab';
import type { OwnedItem, SelectedItem, StoreItem } from '../types/Item';
import type { Tab } from '../types/tab';
import {
  BackgroundImage,
  CharacterContainer,
  CharacterImage,
  Container,
  ContentContainer,
  ImageContainer,
  TailImage,
} from './Character.styles';
import ItemOwnedGrid from './ItemOwnedGrid';
import { default as ItemStoreGrid } from './ItemStoreGrid';
import Tabs from './Tab';

const SelectedItemImage = styled.img<{ x: number; y: number }>`
  position: absolute;
  top: ${({ y }) => `calc(11% + ${y}%)`};
  left: ${({ x }) => `calc(15.5% + ${x}%)`};
  width: 65%;
  height: 65%;
  object-fit: contain;
`;

function Character() {
  const [tab, setTab] = useState<Tab>(TABS.STORE);
  const [storeItems, setStoreItems] = useState<StoreItem[]>([]);
  const [ownedItems, setOwnedItems] = useState<OwnedItem[]>([]);
  const [selectedItem, setSelectedItem] = useState<SelectedItem | null>(null);

  const fetchStoreItems = async () => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/items?page=1&category=HAT`,
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
          },
        },
      );

      // fetch 는 4xx, 5xx 에러를 reject 하지 않음
      if (!res.ok) {
        throw new Error(`error:  ${res.status}`);
      }

      const json = (await res.json()) as { content: StoreItem[] };
      setStoreItems(json.content);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
    }
  };

  useEffect(() => {
    if (tab === TABS.OWNED) {
      const ownedItemsMock = mocks.data.isOwnedItemsMock;
      setOwnedItems([...ownedItemsMock]);
      return;
    }

    fetchStoreItems();
  }, [tab]);

  const handleChangeTab = (nextTab: Tab) => {
    setTab(nextTab);
  };

  return (
    <Container>
      <ImageContainer>
        <CharacterContainer>
          <CharacterImage alt="character" src={`${BASE_URL}assets/character/cat-no-tail.png`} />
          <TailImage alt="tail" src={`${BASE_URL}assets/character/tail.png`} />
          {selectedItem && (
            <SelectedItemImage
              alt="selected item"
              src={selectedItem.imageUrl}
              x={selectedItem.offsetX}
              y={selectedItem.offsetY}
            />
          )}
        </CharacterContainer>
        <BackgroundImage alt="bg" src={`${BASE_URL}assets/character/background.png`} />
      </ImageContainer>
      <ContentContainer>
        <Tabs tab={tab} setTab={handleChangeTab} />
        {tab === TABS.STORE ? (
          <ItemStoreGrid items={storeItems} />
        ) : (
          <ItemOwnedGrid items={ownedItems} setSelectedItem={setSelectedItem} />
        )}
      </ContentContainer>
    </Container>
  );
}

export default Character;
