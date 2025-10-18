import { Typography } from '@/components/common/Typography';
import {
  HomeContainer,
  GreetingSection,
  CharacterSection,
  CharacterImage,
  BackgroundImage,
  ActionsSection,
  MissionCard,
  MissionItem,
  MissionIcon,
  DiaryCard,
} from '@/components/Home/Home.styles';
import { BASE_URL, ROUTES } from '@/constants/routes';
import { useNavigate } from 'react-router-dom';

function Home() {
  const router = useNavigate();

  return (
    <HomeContainer>
      <GreetingSection>
        <Typography variant="title1Regular" color="gray900">
          안녕하세요!
        </Typography>
        <Typography variant="title1Regular" color="gray900">
          오늘 기분은 어떠신가요?
        </Typography>
      </GreetingSection>
      <CharacterSection onClick={() => router(ROUTES.CHARACTER)}>
        <CharacterImage src={`${BASE_URL}assets/character/happy1.png`} alt="character" />
        <BackgroundImage src={`${BASE_URL}assets/character/background.png`} alt="background" />
      </CharacterSection>
      <ActionsSection>
        <div>
          <MissionCard onClick={() => router(ROUTES.MISSIONS)}>
            <Typography variant="body2Regular" color="gray900">
              오늘의 미션
            </Typography>
            <MissionItem>
              <MissionIcon />
              <Typography variant="label2Regular" color="gray800">
                하늘을 바라보며 스트레칭하기
              </Typography>
            </MissionItem>
            <MissionItem>
              <MissionIcon />
              <Typography variant="label2Regular" color="gray800">
                산책하기
              </Typography>
            </MissionItem>
          </MissionCard>
        </div>
        <DiaryCard onClick={() => router(ROUTES.DIARIES)}>
          <Typography variant="body2Regular" color="gray900">
            일기쓰기
          </Typography>
          <Typography variant="label2Regular" color="gray800">
            오늘 하루의 감정을 기록해보세요
          </Typography>
        </DiaryCard>
      </ActionsSection>
    </HomeContainer>
  );
}

export default Home;
