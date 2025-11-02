import type { Mission } from '@/api/types';
import {
  MissionItemWithDot,
  MissionList,
  MissionListDescription,
  Section,
} from '../Missions.styles';
import { Typography } from '@/components/common/Typography';

type MissionListSectionProps = {
  missions: Mission[];
  onAddMission: (mission: Mission) => void;
};

const MissionListSection = ({ missions, onAddMission }: MissionListSectionProps) => {
  return (
    <Section>
      <Typography variant="label1Regular" color="default">
        추천 리스트
      </Typography>
      <MissionListDescription>일일계획에 미션을 추가해보세요</MissionListDescription>
      {missions.length === 0 ? (
        <Typography variant="label2Regular" color="gray500">
          오늘은 추천 미션이 없습니다.
        </Typography>
      ) : (
        <MissionList>
          {missions.map((mission) => (
            <MissionItemWithDot key={mission.id} onClick={() => onAddMission(mission)}>
              {mission.content}
            </MissionItemWithDot>
          ))}
        </MissionList>
      )}
    </Section>
  );
};

export default MissionListSection;
