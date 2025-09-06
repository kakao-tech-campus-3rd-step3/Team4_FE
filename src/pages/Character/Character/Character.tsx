import {
  BackgroundImage,
  CharacterContainer,
  CharacterImage,
  ImageContainer,
  TailImage,
} from './Character.styles';

function Index() {
  return (
    <div
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
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
      <div></div>
    </div>
  );
}

export default Index;
