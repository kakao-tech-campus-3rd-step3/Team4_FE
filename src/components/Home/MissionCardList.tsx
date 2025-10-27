import { Typography } from '@/components/common/Typography';
import { MissionItem, MissionIcon } from './Home.styles';
import { useSuspenseQuery } from '@tanstack/react-query';
import { MissionsAPI } from '@/api/missions';
import type { Plan } from '@/api/types';
import QUERY_KEY from '@/constants/queryKey';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';

interface MissionCardProps {
  onClick: () => void;
}

function MissionCardList() {
  const router = useNavigate();

  const { data: dailyMissions } = useSuspenseQuery<Plan[]>({
    queryKey: [QUERY_KEY.MISSIONS],
    queryFn: MissionsAPI.getDailyMissions,
  });

  const onClick = () => {
    router(ROUTES.MISSIONS);
  };

  return (
    <>
      {dailyMissions.length === 0 ? (
        <Typography variant="label2Regular" color="gray800">
          오늘은 미션이 없습니다.
        </Typography>
      ) : (
        dailyMissions.map((plan) => (
          <MissionItem key={plan.id}>
            <MissionIcon />
            <Typography variant="label2Regular" color="gray800">
              {plan.content}
            </Typography>
          </MissionItem>
        ))
      )}
    </>
  );
}

export default MissionCardList;
