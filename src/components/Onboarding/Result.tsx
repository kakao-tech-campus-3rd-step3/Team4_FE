import { Typography } from '@/components/common/Typography';
import { BASE_URL } from '@/constants/routes';
import { Container, Image, ResultContainer, Title } from './Result.styles';

function Result() {
  return (
    <Container>
      <Title>
        <Typography variant="title1Regular" color="default">
          분석 결과
        </Typography>
      </Title>
      <Image src={`${BASE_URL}assets/character/happy1.png`} alt="happy1" />
      <ResultContainer>
        <Typography variant="label2Regular" color="default">
          최근의 검사 결과를 보면, 마음이 조금 지쳐 있는 모습이 보여요.
        </Typography>
        <Typography variant="label2Regular" color="default">
          그렇다고 해서 회복이 어려운 상태는 아니에요.
        </Typography>
        <Typography variant="label2Regular" color="default">
          지금은 잠시 숨을 고르며 나를 돌볼 시간이 필요해요.
        </Typography>
      </ResultContainer>
    </Container>
  );
}

export default Result;
