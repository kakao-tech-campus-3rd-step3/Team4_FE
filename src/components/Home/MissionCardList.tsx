import { Typography } from '@/components/common/Typography';
import { MissionItem, MissionIcon } from './Home.styles';
import { useSuspenseQuery } from '@tanstack/react-query';
import { MissionsAPI } from '@/api/missions';
import type { Plan } from '@/api/types';
import QUERY_KEY from '@/constants/queryKey';

function MissionCardList() {
  const { data: dailyMissions } = useSuspenseQuery<Plan[]>({
    queryKey: [QUERY_KEY.MISSIONS],
    queryFn: MissionsAPI.getDailyMissions,
  });

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
