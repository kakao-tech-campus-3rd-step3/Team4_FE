import { Typography } from '@/components/common/Typography';
import { BASE_URL, ROUTES } from '@/constants/routes';
import { useNavigate } from 'react-router-dom';
import NextStepButton from './NextButton';
import { Title } from './Result.styles';
import { Container, Image } from './Step1';

function Step2() {
  const router = useNavigate();

  const handleNext = async () => {
    router(`${ROUTES.ONBOARDING}/${ROUTES.ONBOARDING_STEP_START}`);
  };

  return (
    <>
      <Container>
        <Title>
          <Typography variant="title1Regular" color="default">
            포인트를 모아
          </Typography>
          <Typography variant="title1Regular" color="default">
            나를 예쁘게 꾸며달라냥!
          </Typography>
        </Title>
        <Image src={`${BASE_URL}assets/onboarding/step2.png`} alt="happy1" />
      </Container>

      <NextStepButton handleNext={handleNext} />
    </>
  );
}

export default Step2;
