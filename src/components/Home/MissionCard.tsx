import { Typography } from '@/components/common/Typography';
import { MissionCard as StyledMissionCard } from './Home.styles';
import { MissionCardWithSuspense } from './MissionCardWithSuspense';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';

function MissionCard() {
  const router = useNavigate();

  const onClick = () => {
    router(ROUTES.MISSIONS);
  };

  return (
    <StyledMissionCard onClick={onClick}>
      <Typography variant="body2Regular" color="gray900">
        오늘의 미션
      </Typography>
      <MissionCardWithSuspense />
    </StyledMissionCard>
  );
}

export default MissionCard;
