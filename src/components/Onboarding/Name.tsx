import { Typography } from '@/components/common/Typography';
import styled from '@emotion/styled';
import happy2 from '../../../public/assets/character/happy2.png';
import { Container, Image, Title } from './Result.styles';

const Input = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 8px;
  border: 1.8px solid #a3a3a3;
  color: rgb(48, 48, 48);
  padding: 25px 10px;
  background-color: #f5f5f5;
  font-family: 'OngleipEoyeonce';
  font-size: 25px;

  &::placeholder {
    color: #999999;
  }
`;

function Name() {
  return (
    <Container>
      <Title>
        <Typography variant="title1Regular" color="default">
          반갑다냥!
        </Typography>
        <Typography variant="title1Regular" color="default">
          내 이름을 정해달라냥!
        </Typography>
      </Title>
      <Image src={happy2} alt="happy1" />
      <Input type="text" placeholder="고양이 이름을 입력해주세요" />
    </Container>
  );
}

export default Name;
