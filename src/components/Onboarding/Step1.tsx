import { Typography } from '@/components/common/Typography';
import { BASE_URL, ROUTES } from '@/constants/routes';
import { useNavigate } from 'react-router-dom';
import NextStepButton from './NextButton';
import { Title } from './Result.styles';
import styled from '@emotion/styled';

export const Container = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

export const Image = styled.img`
  object-fit: contain;
  width: 200px;
`;

function Step1() {
  const router = useNavigate();

  const handleNext = async () => {
    router(`${ROUTES.ONBOARDING}/${ROUTES.ONBOARDING_STEP_2}`);
  };

  return (
    <>
      <Container>
        <Title>
          <Typography variant="title1Regular" color="default">
            미션을 완료하면,
          </Typography>
          <Typography variant="title1Regular" color="default">
            포인트가 쌓인다냥!
          </Typography>
        </Title>
        <Image src={`${BASE_URL}assets/onboarding/step1.png`} alt="happy1" />
      </Container>

      <NextStepButton handleNext={handleNext} />
    </>
  );
}

export default Step1;
