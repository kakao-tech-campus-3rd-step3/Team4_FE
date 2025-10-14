import { Typography } from '@/components/common/Typography';
import { BASE_URL, ROUTES } from '@/constants/routes';
import { NextButton } from '@/pages/Onboarding/Test/Test.styles';
import { semanticColors } from '@/styles/theme/colors';
import { useNavigate } from 'react-router-dom';
import { Container, Image, ResultContainer, Title } from './Result.styles';

function Intro() {
  const router = useNavigate();

  const handleNext = () => {
    router(`${ROUTES.ONBOARDING}/${ROUTES.ONBOARDING_STEP_NAME}`);
  };

  return (
    <>
      <Container>
        <Title>
          <Typography variant="title1Regular" color="default">
            시작하기에 앞서...
          </Typography>
        </Title>
        <Image src={`${BASE_URL}assets/character/default.png`} alt="happy1" />
        <ResultContainer>
          <Typography variant="label2Regular" color="default">
            이 앱은, 반복된 실패와 지친 마음 속에서도 다시 일어설 수 있도록 곁에 머무는 작은
            쉼표에요.
          </Typography>
          <Typography variant="label2Regular" color="default">
            우리는 취업 준비 과정에서 무너진 자존감을 회복시키고, 다시 도전할 수 있는 힘을 길러주는
            멘탈 기반 취업 지속 서비스입니다.
          </Typography>
          <Typography variant="label2Regular" color="default">
            자기 자신을 믿고, 자신만의 속도로 한 걸음씩 앞으로 함께 나아가봐요
          </Typography>
        </ResultContainer>
      </Container>

      <NextButton onClick={handleNext}>
        <Typography variant="label2Regular" style={{ color: semanticColors.background.default }}>
          다음
        </Typography>
      </NextButton>
    </>
  );
}

export default Intro;
