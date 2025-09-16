import { BASE_URL } from '@/constants/routes';
import styled from '@emotion/styled';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { TABS } from '../constants/tab';
import type { SelectedItem, StoreItem } from '../types/Item';
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

  const { data: storeItems, isLoading: isStoreItemsLoading } = useQuery({
    queryKey: ['storeItems'],
    queryFn: () =>
      fetch(`${import.meta.env.VITE_API_BASE_URL}/api/items?page=1&category=HAT`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
        },
      })
        .then((res) => res.json())
        .then((data) =>
          data.content.sort((a: StoreItem, b: StoreItem) => {
            if (a.isOwned && !b.isOwned) {
              return 1;
            }
            if (!a.isOwned && b.isOwned) {
              return -1;
            }
            return 0;
          }),
        ),
  });

  const { data: ownedItems, isLoading: isOwnedItemsLoading } = useQuery({
    queryKey: ['ownedItems'],
    queryFn: () =>
      fetch(`${import.meta.env.VITE_API_BASE_URL}/api/me/items`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
        },
      }).then((res) => res.json()),
  });

  const selectedItem = ownedItems?.find((item: SelectedItem) => item.isUsed);

  const handleChangeTab = (nextTab: Tab) => {
    setTab(nextTab);
  };

  if (isStoreItemsLoading || isOwnedItemsLoading) {
    return <div>Loading...</div>;
  }

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
          <ItemOwnedGrid items={ownedItems} />
        )}
      </ContentContainer>
    </Container>
  );
}

export default Character;
