import {
  CharacterSection as StyledCharacterSection,
  CharacterImage,
  BackgroundImage,
} from './Home.styles';
import { BASE_URL } from '@/constants/routes';

interface CharacterSectionProps {
  onClick: () => void;
}

export function CharacterSection({ onClick }: CharacterSectionProps) {
  return (
    <StyledCharacterSection onClick={onClick}>
      <CharacterImage src={`${BASE_URL}assets/character/happy1.png`} alt="character" />
      <BackgroundImage src={`${BASE_URL}assets/character/background.png`} alt="background" />
    </StyledCharacterSection>
  );
}
