import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { Typography } from '../../../components/common/Typography';
import mocks from '../../../mockSetup';
import theme from '../../../styles/theme';
import { TABS } from '../constants/tab';
import type { Item } from '../types/Item';
import {
  BackgroundImage,
  CharacterContainer,
  CharacterImage,
  ImageContainer,
  TailImage,
} from './Character.styles';

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

const ItemGrid = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  padding-inline: 10px;
`;

const ItemCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.brand.primary};
  border-radius: 10px;
  padding: 10px;
`;

const ItemImage = styled.img`
  height: 70px;
  object-fit: contain;
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
        <ItemGrid>
          {items.map((item) => (
            <ItemCard key={item.id}>
              <ItemImage src={item.imageUrl} alt={item.name} />
              <Typography variant="body2Regular" color="default">
                {item.price}
              </Typography>
            </ItemCard>
          ))}
        </ItemGrid>
      </ContentContainer>
    </Container>
  );
}

export default Index;
