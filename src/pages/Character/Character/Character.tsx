import { useEffect, useState } from 'react';
import { Typography } from '../../../components/common/Typography';
import mocks from '../../../mockSetup';
import theme from '../../../styles/theme';
import {
  BackgroundImage,
  CharacterContainer,
  CharacterImage,
  ImageContainer,
  TailImage,
} from './Character.styles';

type Item = {
  id: number;
  category: 'HAT';
  name: string;
  price: number;
  imageUrl: string;
  isOwned: false;
};

function Index() {
  const [items, setItems] = useState<Item[]>([]);

  console.log(items);

  useEffect(() => {
    setItems(mocks.characterStoreItemsMock);
  }, []);

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
            flexDirection: 'row',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 10,
            paddingInline: 10,
          }}
        >
          {items &&
            items.map((item) => (
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
