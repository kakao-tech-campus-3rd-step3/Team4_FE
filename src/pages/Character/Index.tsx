import styled from '@emotion/styled';

const ImageContainer = styled.div`
  width: 100%;
  height: 80vh;
  overflow: hidden;

  position: relative;
`;

const BackgroundImage = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
`;

const CharacterImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  position: absolute;

  bottom: 13%;
  left: 50%;
  transform: translateX(-50%);
`;

function Index() {
  return (
    <div
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <ImageContainer>
        <CharacterImage
          alt="character"
          src={`${import.meta.env.BASE_URL}assets/character/default.png`}
        />
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
