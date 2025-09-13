import mocks from '@/mockSetup';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { TABS } from '../constants/tab';
import type { OwnedItem, SelectedItem, StoreItem } from '../types/Item';
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
import Tab from './Tab';

const SelectedItemImage = styled.img<{ x: number; y: number }>`
  position: absolute;
  top: ${({ y }) => `calc(11% + ${y}%)`};
  left: ${({ x }) => `calc(15.5% + ${x}%)`};
  width: 65%;
  height: 65%;
  object-fit: contain;
`;

function Index() {
  const [tab, setTab] = useState<(typeof TABS)[keyof typeof TABS]>(TABS.STORE);
  const [storeItems, setStoreItems] = useState<StoreItem[]>([]);
  const [ownedItems, setOwnedItems] = useState<OwnedItem[]>([]);

  const [selectedItem, setSelectedItem] = useState<SelectedItem | null>(null);

  useEffect(() => {
    if (tab === TABS.OWNED) {
      // 보유 아이템 목록 조회, GET, /api/me/items
      const ownedItemsMock = mocks.data.isOwnedItemsMock;
      setOwnedItems([...ownedItemsMock]);
      return;
    }

    // 상점 아이템 목록 조회, GET, /api/items?page=Integer&category=ItemCategoryEnum
    const storeItemsMock = mocks.data.characterStoreItemsMock;
    setStoreItems([...storeItemsMock]);
  }, [tab]);

  return (
    <Container>
      <ImageContainer>
        <CharacterContainer>
          <CharacterImage
            alt="character"
            src={`${import.meta.env.BASE_URL}assets/character/cat-no-tail.png`}
          />
          <TailImage alt="tail" src={`${import.meta.env.BASE_URL}assets/character/tail.png`} />
          {selectedItem && (
            <SelectedItemImage
              alt="selected item"
              src={selectedItem.imageUrl}
              x={selectedItem.offsetX}
              y={selectedItem.offsetY}
            />
          )}
        </CharacterContainer>
        <BackgroundImage
          alt="bg"
          src={`${import.meta.env.BASE_URL}assets/character/background.png`}
        />
      </ImageContainer>
      <ContentContainer>
        <Tab tab={tab} setTab={setTab} />
        {tab === TABS.STORE ? (
          <ItemStoreGrid items={storeItems} />
        ) : (
          <ItemOwnedGrid items={ownedItems} setSelectedItem={setSelectedItem} />
        )}
      </ContentContainer>
    </Container>
  );
}

export default Index;
