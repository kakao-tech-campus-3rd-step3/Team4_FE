import type { Mission } from '@/api/types';
import {
  AddPill,
  MissionItem,
  MissionList,
  Section,
  SectionHeader,
  SectionTitle,
} from '../Missions.styles';

type MissionListSectionProps = {
  missions: Mission[];
  onClickAdd: () => void;
};

const MissionListSection = ({ missions, onClickAdd }: MissionListSectionProps) => {
  return (
    <Section>
      <SectionHeader>
        <SectionTitle>미션 리스트</SectionTitle>
        <AddPill onClick={onClickAdd}>미션 추가</AddPill>
      </SectionHeader>
      <MissionList>
        {missions.map((m) => (
          <MissionItem key={m.id}>{m.content}</MissionItem>
        ))}
      </MissionList>
    </Section>
  );
};

export default MissionListSection;
