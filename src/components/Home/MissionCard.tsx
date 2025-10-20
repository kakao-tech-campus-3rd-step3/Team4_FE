import { Typography } from '@/components/common/Typography';
import { MissionCard as StyledMissionCard, MissionItem, MissionIcon } from './Home.styles';
import { useSuspenseQuery } from '@tanstack/react-query';
import { MissionsAPI } from '@/api/missions';
import type { Plan } from '@/api/types';
import QUERY_KEY from '@/constants/queryKey';

interface MissionCardProps {
  onClick: () => void;
}

export function MissionCard({ onClick }: MissionCardProps) {
  const { data: dailyMissions } = useSuspenseQuery<Plan[]>({
    queryKey: [QUERY_KEY.MISSIONS],
    queryFn: MissionsAPI.getDailyMissions,
  });

  return (
    <StyledMissionCard onClick={onClick}>
      <Typography variant="body2Regular" color="gray900">
        오늘의 미션
      </Typography>
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
    </StyledMissionCard>
  );
}
