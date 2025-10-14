import { Typography } from '@/components/common/Typography';
import { BASE_URL, ROUTES } from '@/constants/routes';
import { NextButton } from '@/pages/Onboarding/Test/Test.styles';
import { semanticColors } from '@/styles/theme/colors';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

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
  const router = useNavigate();

  const handleNext = () => {
    router(ROUTES.HOME);
  };

  return (
    <>
      <Container>
        <Image src={`${BASE_URL}assets/character/happy2.png`} alt="happy1" />
        <Content>
          <Typography variant="title2Regular" color="default">
            잘했어요!
          </Typography>
          <Typography variant="title2Regular" color="default">
            "냥토닥"과 함께 천천히 하나씩 이뤄봐요
          </Typography>
        </Content>
      </Container>

      <NextButton onClick={handleNext}>
        <Typography variant="label2Regular" style={{ color: semanticColors.background.default }}>
          시작하기
        </Typography>
      </NextButton>
    </>
  );
}

export default Start;
