import {
  AddPill,
  MissionItem,
  MissionList,
  Section,
  SectionHeader,
  SectionTitle,
} from '../Missions.styles';

type Props = {
  missions: Array<{ id: string | number; text: string }>;
  onClickAdd: () => void;
};

const MissionListSection = ({ missions, onClickAdd }: Props) => {
  return (
    <Section>
      <SectionHeader>
        <SectionTitle>미션 리스트</SectionTitle>
        <AddPill onClick={onClickAdd}>미션 추가</AddPill>
      </SectionHeader>
      <MissionList>
        {missions.map((m) => (
          <MissionItem key={m.id}>{m.text}</MissionItem>
        ))}
      </MissionList>
    </Section>
  );
};

export default MissionListSection;
