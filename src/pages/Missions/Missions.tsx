import { useState } from 'react';
import {
  AddPill,
  Card,
  CardBody,
  CardHeader,
  Chip,
  ChipRow,
  CTAButton,
  CTAWrap,
  Danger,
  Handle,
  Input,
  MissionItem,
  MissionList,
  Overlay,
  Primary,
  Screen,
  Section,
  SectionHeader,
  SectionTitle,
  Sheet,
  SheetTitle,
  Title,
} from './Missions.styles';

type Mission = { id: string; text: string };

const missionsMock: Mission[] = [
  { id: 'm1', text: '백엔드 직군 채용정보 5개 찾아보기' },
  { id: 'm2', text: '자기소개서에서 나의 강점 3가지 정리해보기' },
  { id: 'm3', text: '1분 자기소개 발표해보기' },
];

function Missions() {
  const [openSheet, setOpenSheet] = useState(false);

  const onAddMission = () => setOpenSheet(true);
  const onCloseSheet = () => setOpenSheet(false);

  const onNext = () => alert('다음');
  return (
    <>
      <Screen>
        <Title>missions</Title>

        {/* 일일 계획 카드 */}
        <Card>
          <CardHeader>
            <span>일일 계획</span>
            <span>8월 9일</span>
          </CardHeader>
          <CardBody>{/* 일정/메모 입력 영역 */}</CardBody>
        </Card>

        {/* 미션 리스트 */}
        <Section>
          <SectionHeader>
            <SectionTitle>미션 리스트</SectionTitle>
            <AddPill onClick={onAddMission}>미션 추가</AddPill>
          </SectionHeader>
          <MissionList>
            {missionsMock.map((m) => (
              <MissionItem key={m.id}>{m.text}</MissionItem>
            ))}
          </MissionList>
        </Section>

        {/* 하단 CTA */}
        <CTAWrap>
          <CTAButton onClick={onNext}>다음</CTAButton>
        </CTAWrap>
      </Screen>
      {openSheet && (
        <Overlay onClick={onCloseSheet}>
          <Sheet onClick={(e) => e.stopPropagation()}>
            <Handle />
            <SheetTitle>미션 추가</SheetTitle>

            <Input placeholder="자기소개서 나의 강점 3가지 정리해보기 " />

            <ChipRow>
              <Chip>⟳ 리프레시</Chip>
              <Chip>📂 취업</Chip>
              <Chip>☀️ 일상</Chip>
            </ChipRow>

            <Primary
              onClick={() => {
                // TODO: 실제 추가 로직
                onCloseSheet();
              }}
            >
              일일 계획에 추가
            </Primary>

            <Danger onClick={onCloseSheet}>삭제하기</Danger>
          </Sheet>
        </Overlay>
      )}
    </>
  );
}

export default Missions;
