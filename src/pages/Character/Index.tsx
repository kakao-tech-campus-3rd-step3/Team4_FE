import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const ImageContainer = styled.div`
  width: 100%;
  height: 80vh;
  overflow: hidden;

  background-color: #000;

  position: relative;
`;

const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CharacterImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  position: absolute;

  bottom: 22%;
  left: 50%;
  transform: translateX(-50%);
`;

const wagTail = keyframes`
  from {
    transform: translateX(-50%) rotate(0deg);
  }
  to {
    transform: translateX(-50%) rotate(10deg);
  }
`;

const TailImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  position: absolute;

  bottom: 16.6%;
  left: 62%;
  transform: translateX(-50%);

  background-color: #000;

  animation: ${wagTail} 1s linear infinite alternate;
`;

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
        <CharacterImage
          alt="character"
          src={`${import.meta.env.BASE_URL}assets/character/cat-no-tail.png`}
        />
        <TailImage alt="tail" src={`${import.meta.env.BASE_URL}assets/character/tail.png`} />
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
