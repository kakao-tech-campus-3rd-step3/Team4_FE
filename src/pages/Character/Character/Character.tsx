import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import mocks from '../../../mockSetup';
import { TABS } from '../constants/tab';
import type { Item } from '../types/Item';
import {
  BackgroundImage,
  CharacterContainer,
  CharacterImage,
  ImageContainer,
  TailImage,
} from './Character.styles';
import ItemGrid from './ItemGrid';
import Tab from './Tab';

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

function Index() {
  const [tab, setTab] = useState<(typeof TABS)[keyof typeof TABS]>(TABS.STORE);
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    const mockItems = mocks.characterStoreItemsMock;

    if (tab === TABS.OWNED) {
      setItems(mockItems.filter((item: Item) => item.isOwned));
      return;
    }

    setItems(mockItems);
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
        </CharacterContainer>
        <BackgroundImage
          alt="bg"
          src={`${import.meta.env.BASE_URL}assets/character/background.png`}
        />
      </ImageContainer>
      <ContentContainer>
        <Tab setTab={setTab} />
        <ItemGrid items={items} />
      </ContentContainer>
    </Container>
  );
}

export default Index;
