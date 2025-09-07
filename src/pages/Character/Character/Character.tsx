import { useEffect, useState } from 'react';
import { Typography } from '../../../components/common/Typography';
import mocks from '../../../mockSetup';
import theme from '../../../styles/theme';
import type { Item } from '../types/Item';
import {
  BackgroundImage,
  CharacterContainer,
  CharacterImage,
  ImageContainer,
  TailImage,
} from './Character.styles';

function Index() {
  const [tab, setTab] = useState<'store' | 'owned'>('store');
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    const mockItems = mocks.characterStoreItemsMock;

    if (tab === 'owned') {
      setItems(mockItems.filter((item: Item) => item.isOwned));
      return;
    }

    setItems(mockItems);
  }, [tab]);

  return (
    <div
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        marginBottom: 30,
      }}
    >
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
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'row',
            backgroundColor: 'rgb(221, 186, 136)',
          }}
        >
          <div
            onClick={() => setTab('store')}
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: theme.colors.brand.background,
              padding: 10,
            }}
          >
            <Typography variant="body2Regular" color="default">
              상점
            </Typography>
          </div>
          <div
            onClick={() => setTab('owned')}
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: theme.colors.brand.background,
              padding: 10,
            }}
          >
            <Typography variant="body2Regular" color="default">
              보유중
            </Typography>
          </div>
        </div>
        <div
          style={{
            flex: 1,
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 10,
            paddingInline: 10,
          }}
        >
          {items.map((item) => (
            <div
              key={item.id}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: theme.colors.brand.primary,
                borderRadius: 10,
                padding: 10,
              }}
            >
              <img
                style={{ height: 70, objectFit: 'contain' }}
                src={item.imageUrl}
                alt={item.name}
              />
              <Typography variant="body2Regular" color="default">
                {item.price}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Index;
