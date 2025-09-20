import { BASE_URL } from '@/constants/routes';
import { useNavigate } from 'react-router-dom';
import { Typography } from '../../../../components/common/Typography';
import type { SelectedItem } from '../../types/Item';
import {
  BackgroundImage,
  CharacterContainer,
  CharacterImage,
  ImageContainer,
  SelectedItemImage,
  TailImage,
} from './Character.styles';

function CharacterContent({ ownedItems }: { ownedItems: SelectedItem[] }) {
  const navigate = useNavigate();

  const selectedItem = ownedItems?.find((item: SelectedItem) => item.isUsed);

  return (
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
      <div
        style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',

          position: 'absolute',
          bottom: '40px',
          left: 0,
          right: 0,
        }}
      >
        <div
          onClick={() => {
            navigate('/character/chat');
          }}
          style={{
            backgroundColor: 'rgb(255, 246, 229, 0.5)',
            paddingInline: '20px',
            paddingBlock: '5px',
            borderRadius: '10px',

            borderWidth: '2px',
            borderStyle: 'solid',
            borderColor: '#B98B46',

            width: '50%',
            cursor: 'pointer',
          }}
        >
          <Typography
            variant="body2Regular"
            color="default"
            style={{
              textAlign: 'center',
            }}
          >
            채팅하기
          </Typography>
        </div>
      </div>
    </ImageContainer>
  );
}

export default CharacterContent;
