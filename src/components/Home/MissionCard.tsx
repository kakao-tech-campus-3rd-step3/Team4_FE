import { Typography } from '@/components/common/Typography';
import { MissionCard as StyledMissionCard } from './Home.styles';
import { MissionCardWithSuspense } from './MissionCardWithSuspense';

function MissionCard() {
  return (
    <StyledMissionCard>
      <Typography variant="body2Regular" color="gray900">
        오늘의 미션
      </Typography>
      <MissionCardWithSuspense />
    </StyledMissionCard>
  );
}

export default MissionCard;
