import { BASE_URL } from '@/constants/routes';
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
    </ImageContainer>
  );
}

export default CharacterContent;
