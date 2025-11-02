import { CatsAPI } from '@/api/cats';
import { CharacterSection } from '@/components/Home/CharacterSection';
import { DiaryCard } from '@/components/Home/DiaryCard';
import { GreetingSection } from '@/components/Home/GreetingSection';
import { HomeContainer } from '@/components/Home/Home.styles';
import MissionCard from '@/components/Home/MissionCard';
import { ROUTES } from '@/constants/routes';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

function Home() {
  const router = useNavigate();

  const { data: isAvailable } = useQuery({
    queryKey: ['check'],
    queryFn: () => CatsAPI.check(),
  });

  if (!isAvailable?.exist) {
    router(`${ROUTES.ONBOARDING}/${ROUTES.ONBOARDING_TEST}`);
    return;
  }

  return (
    <HomeContainer>
      <GreetingSection />
      <CharacterSection onClick={() => router(ROUTES.CHARACTER)} />
      <MissionCard />
      <DiaryCard onClick={() => router(`${ROUTES.DIARIES}/${ROUTES.DIARIES_DETAIL}`)} />
    </HomeContainer>
  );
}

export default Home;
