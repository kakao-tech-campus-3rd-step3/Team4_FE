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
  width: 60%;
  height: 50%;
  position: absolute;

  bottom: 22%;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

export const CharacterImage = styled.img`
  width: 65%;
  height: 65%;
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
  width: 23%;
  height: 20%;
  object-fit: contain;
  position: absolute;

  bottom: 7%;
  left: 81%;
  transform: translateX(-50%);
  rotate: 11deg;

  animation: ${wagTail} 1s linear infinite alternate;

  transform-origin: bottom left;

  @media (height < 850px) {
    left: 81.2%;
  }

  @media (height < 800px) {
    left: 81.2%;
  }

  @media (height < 700px) {
    left: 81.2%;
  }
`;

export const SelectedItemImage = styled.img<{ x: number; y: number }>`
  position: absolute;
  top: ${({ y }) => `calc(11% + ${y}%)`};
  left: ${({ x }) => `calc(15.5% + ${x}%)`};
  width: 65%;
  height: 65%;
  object-fit: contain;
`;
