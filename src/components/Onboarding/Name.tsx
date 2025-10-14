import { Typography } from '@/components/common/Typography';
import { BASE_URL, ROUTES } from '@/constants/routes';
import { NextButton } from '@/pages/Onboarding/Test/Test.styles';
import { semanticColors } from '@/styles/theme/colors';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
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
  const router = useNavigate();

  const handleNext = () => {
    router(`${ROUTES.ONBOARDING}/${ROUTES.ONBOARDING_STEP_START}`);
  };

  return (
    <>
      <Container>
        <Title>
          <Typography variant="title1Regular" color="default">
            반갑다냥!
          </Typography>
          <Typography variant="title1Regular" color="default">
            내 이름을 정해달라냥!
          </Typography>
        </Title>
        <Image src={`${BASE_URL}assets/character/happy2.png`} alt="happy1" />
        <Input type="text" placeholder="고양이 이름을 입력해주세요" />
      </Container>

      <NextButton onClick={handleNext}>
        <Typography variant="label2Regular" style={{ color: semanticColors.background.default }}>
          다음
        </Typography>
      </NextButton>
    </>
  );
}

export default Name;
