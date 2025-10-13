import { Typography } from '@/components/common/Typography';
import styled from '@emotion/styled';
import happy2 from '../../../public/assets/character/happy2.png';

const Image = styled.img`
  object-fit: contain;
  width: 320px;
  height: 320px;
`;

const Container = styled.div`
  margin-top: 160px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 60px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;

function Start() {
  return (
    <Container>
      <Image src={happy2} alt="happy1" />
      <Content>
        <Typography variant="title2Regular" color="default">
          잘했어요!
        </Typography>
        <Typography variant="title2Regular" color="default">
          “냥토닥”과 함께 천천히 하나씩 이뤄봐요
        </Typography>
      </Content>
    </Container>
  );
}

export default Start;
