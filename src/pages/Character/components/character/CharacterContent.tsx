import { Typography } from '@/components/common/Typography';
import { BASE_URL } from '@/constants/routes';
import type { SelectedItem } from '@/pages/Character/types/Item';
import { useNavigate } from 'react-router-dom';
import { ChatButton, ChatButtonContainer } from './Button.styles';
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
      <ChatButtonContainer>
        <ChatButton
          onClick={() => {
            navigate('/character/chat');
          }}
        >
          <Typography variant="body2Regular" color="default">
            채팅하기
          </Typography>
        </ChatButton>
      </ChatButtonContainer>
    </ImageContainer>
  );
}

export default CharacterContent;
