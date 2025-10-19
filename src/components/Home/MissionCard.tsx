import { Typography } from '@/components/common/Typography';
import { MissionCard as StyledMissionCard, MissionItem, MissionIcon } from './Home.styles';

interface MissionCardProps {
  onClick: () => void;
}

export function MissionCard({ onClick }: MissionCardProps) {
  return (
    <StyledMissionCard onClick={onClick}>
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
    </StyledMissionCard>
  );
}
