import type { Mission } from '@/api/types';
import { MissionItemWithDot, MissionList, Section, SectionHeader } from '../Missions.styles';
import { Typography } from '@/components/common/Typography';

type MissionListSectionProps = {
  missions: Mission[];
  onAddMission: (mission: Mission) => void;
};

const MissionListSection = ({ missions, onAddMission }: MissionListSectionProps) => {
  return (
    <Section>
      <SectionHeader>
        <Typography variant="label1Regular" color="default">
          추천 리스트
        </Typography>
      </SectionHeader>
      <MissionList>
        {missions.length === 0 ? (
          <Typography variant="label2Regular" color="gray500">
            오늘은 추천 미션이 없습니다.
          </Typography>
        ) : (
          <ul>
            {missions.map((mission) => (
              <MissionItemWithDot key={mission.id} onClick={() => onAddMission(mission)}>
                {mission.content}
              </MissionItemWithDot>
            ))}
          </ul>
        )}
      </MissionList>
    </Section>
  );
};

export default MissionListSection;
