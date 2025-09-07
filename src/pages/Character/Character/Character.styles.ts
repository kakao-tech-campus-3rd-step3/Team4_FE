import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-bottom: ${({ theme }) => theme.spacing[9]};
`;

export const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const ImageContainer = styled.div`
  width: 100%;
  overflow: hidden;

  position: relative;

  background-color: rgb(221, 186, 136);
`;

export const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

// TODO: content-type: size 고려
export const CharacterContainer = styled.div`
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

export const CharacterImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
`;

export const wagTail = keyframes`
  from {
    transform: translateX(-50%) rotate(0deg);
  }
  to {
    transform: translateX(-50%) rotate(8deg);
  }
`;

export const TailImage = styled.img`
  width: 30%;
  height: 28%;
  object-fit: contain;
  position: absolute;

  bottom: 10%;
  left: 90%;
  transform: translateX(-50%);
  rotate: 11deg;

  animation: ${wagTail} 1s linear infinite alternate;

  transform-origin: bottom left;

  @media (height < 850px) {
    left: 91%;
  }

  @media (height < 800px) {
    left: 91%;
  }

  @media (height < 700px) {
    left: 91%;
  }
`;
