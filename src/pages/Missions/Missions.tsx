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
import { MISSION_TAGS } from './constants/icon';
import { Typography } from '@/components/common/Typography';
import { missionsMock } from 'mocks/data/missionsMock';

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

            <Input placeholder="자기소개서 나의 강점 3가지 정리해보기" />

            <ChipRow>
              {MISSION_TAGS.map(({ key, label, icon }) => (
                <Chip key={key}>
                  <span aria-hidden>{icon}</span>
                  <Typography as="span" variant="body1Regular" color="default">
                    {label}
                  </Typography>
                </Chip>
              ))}
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
