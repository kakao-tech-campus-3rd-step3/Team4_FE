import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const ImageContainer = styled.div`
  width: 100%;
  height: 80vh;
  min-height: 600px;
  overflow: hidden;

  position: relative;
`;

const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CharacterContainer = styled.div`
  width: 30%;
  height: 22%;
  position: absolute;

  bottom: 22%;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  align-items: center;
  justify-content: center;
`;

const CharacterImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
`;

const wagTail = keyframes`
  from {
    transform: translateX(-50%) rotate(0deg);
  }
  to {
    transform: translateX(-50%) rotate(8deg);
  }
`;

const TailImage = styled.img`
  width: 30%;
  height: 28%;
  object-fit: contain;
  position: absolute;

  bottom: 10%;
  left: 88%;
  transform: translateX(-50%);
  rotate: 11deg;

  animation: ${wagTail} 1s linear infinite alternate;

  transform-origin: bottom left;

  @media (height < 800px) {
    left: 89%;
  }

  @media (height < 850px) {
    left: 90%;
  }

  @media (height < 700px) {
    left: 91%;
  }
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
