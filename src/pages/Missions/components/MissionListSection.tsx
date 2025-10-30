import type { Mission } from '@/api/types';
import { MissionItem, MissionList, Section, SectionHeader, SectionTitle } from '../Missions.styles';

type MissionListSectionProps = {
  missions: Mission[];
  onAddMission: (mission: Mission) => void;
};

const MissionListSection = ({ missions, onAddMission }: MissionListSectionProps) => {
  return (
    <Section>
      <SectionHeader>
        <SectionTitle>추천 리스트</SectionTitle>
      </SectionHeader>
      <MissionList>
        {missions.length === 0 ? (
          <div>오늘은 추천 미션이 없습니다.</div>
        ) : (
          <ul>
            {missions.map((m) => (
              <MissionItem key={m.id} onClick={() => onAddMission(m)}>
                {m.content}
              </MissionItem>
            ))}
          </ul>
        )}
      </MissionList>
    </Section>
  );
};

export default MissionListSection;
