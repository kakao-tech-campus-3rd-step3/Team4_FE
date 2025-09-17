import { LoadingSpinner, LoadingSpinnerWrapper } from '@/components/common/LoadingSpinner';
import QUERY_KEY from '@/constants/queryKey';
import { BASE_URL } from '@/constants/routes';
import styled from '@emotion/styled';
import { useSuspenseQuery } from '@tanstack/react-query';
import { Suspense, useState } from 'react';
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

function CharacterScreen() {
  return (
    <Suspense
      fallback={
        <LoadingSpinnerWrapper>
          <LoadingSpinner />
        </LoadingSpinnerWrapper>
      }
    >
      <CharacterData />
    </Suspense>
  );
}

function CharacterData() {
  const { data: storeItems } = useSuspenseQuery({
    queryKey: [QUERY_KEY.STORE_ITEMS],
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

  const { data: ownedItems } = useSuspenseQuery({
    queryKey: [QUERY_KEY.OWNED_ITEMS],
    queryFn: () =>
      fetch(`${import.meta.env.VITE_API_BASE_URL}/api/me/items`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
        },
      }).then((res) => res.json()),
  });

  return <CharacterView storeItems={storeItems} ownedItems={ownedItems} />;
}

function CharacterView({
  storeItems,
  ownedItems,
}: {
  storeItems: StoreItem[];
  ownedItems: SelectedItem[];
}) {
  const [tab, setTab] = useState<Tab>(TABS.STORE);

  const selectedItem = ownedItems?.find((item: SelectedItem) => item.isUsed);

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
          <ItemOwnedGrid items={ownedItems} />
        )}
      </ContentContainer>
    </Container>
  );
}

export default CharacterScreen;
