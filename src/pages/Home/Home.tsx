import { CharacterSection } from '@/components/Home/CharacterSection';
import { DiaryCard } from '@/components/Home/DiaryCard';
import { GreetingSection } from '@/components/Home/GreetingSection';
import { HomeContainer, ActionsSection } from '@/components/Home/Home.styles';
import { MissionCardWithSuspense } from '@/components/Home/MissionCardWithSuspense';
import { ROUTES } from '@/constants/routes';
import { useNavigate } from 'react-router-dom';

function Home() {
  const router = useNavigate();

  return (
    <HomeContainer>
      <GreetingSection />
      <CharacterSection onClick={() => router(ROUTES.CHARACTER)} />
      <ActionsSection>
        <div>
          <MissionCardWithSuspense onClick={() => router(ROUTES.MISSIONS)} />
        </div>
        <DiaryCard onClick={() => router(ROUTES.DIARIES)} />
      </ActionsSection>
    </HomeContainer>
  );
}

export default Home;
