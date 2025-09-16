import { BASE_URL } from '@/constants/routes';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { TABS } from '../constants/tab';
import type { OwnedItem, StoreItem } from '../types/Item';
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
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);

  const selectedItem = ownedItems.find((item) => item.id === selectedItemId);

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
      setStoreItems(
        json.content.sort((a, b) => {
          if (a.isOwned && !b.isOwned) {
            return 1;
          }
          if (!a.isOwned && b.isOwned) {
            return -1;
          }
          return 0;
        }),
      );
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
    }
  };

  const fetchOwnedItems = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/me/items`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
        },
      });

      // fetch 는 4xx, 5xx 에러를 reject 하지 않음
      if (!res.ok) {
        throw new Error(`error:  ${res.status}`);
      }

      const json = (await res.json()) as OwnedItem[];

      const equippedItemId = json.find((item) => item.isUsed)?.id;

      setSelectedItemId(equippedItemId ?? null);

      setOwnedItems(json);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
    }
  };

  useEffect(() => {
    // 원래 의도는 탭별로 api 호출을 다르게 하는것이었음
    //  캐릭터는 렌더링되자마자 장착된 아이템도 함께 가지고 있어야 함
    //  문제는 장착된 아이템의 정보가 상점 아이템이 아닌, 보유 아이템 목록에 있음
    //  즉, 상점 아이템만으로는 캐릭터가 장착하고 있는 아이템을 알 수 없고, 보유 아이템이 장착되어야만 캐릭터가 아이템을 장착할 수 있음
    //  이는 요구사항과 맞지 않으므로, 결국 두 api 를 동시에 호출하는 방향으로 수정함
    //  api 명세 변경 필요
    fetchOwnedItems();
    fetchStoreItems();
  }, [selectedItemId]);

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
          <ItemOwnedGrid items={ownedItems} setSelectedItemId={setSelectedItemId} />
        )}
      </ContentContainer>
    </Container>
  );
}

export default Character;
