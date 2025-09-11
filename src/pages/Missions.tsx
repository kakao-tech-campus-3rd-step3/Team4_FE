import styled from "@emotion/styled";
import { semanticColors, colorScale } from "@/styles/theme/colors";
import { DESIGN_BASE, PAGE_PADDING } from "@/constants/layout";
import { useState } from "react";

type Mission = { id: string; text: string };

const Screen = styled.main`
  max-width: ${DESIGN_BASE.MAX_WIDTH}px;
  margin: 0 auto;
  min-height: 100vh;
  padding: ${PAGE_PADDING.TOP_EXTRA + 16}px ${PAGE_PADDING.INLINE + 12}px
    ${PAGE_PADDING.BOTTOM_EXTRA + 24}px;
  box-sizing: border-box;
`;

const Title = styled.h1`
  margin: 0 0 12px 0;
  font-size: 18px;
  font-weight: 800;
  color: ${semanticColors.text.default};
`;

const Card = styled.section`
  background: ${semanticColors.background.default};
  border: 1px solid ${semanticColors.brand.border};
  border-radius: 14px;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.04);
  overflow: hidden;
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${semanticColors.brand.primary};
  padding: 10px 14px;
  font-size: 14px;
  font-weight: 700;
  color: ${semanticColors.text.default};
`;

const CardBody = styled.div`
  padding: 16px 14px 18px;
  background: ${colorScale.brown0};
  min-height: 120px;
`;

const Section = styled.section`
  margin-top: 16px;
  background: ${semanticColors.background.default};
  border: 1px solid ${semanticColors.brand.border};
  border-radius: 14px;
  padding: 12px 12px 10px;
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 6px;
`;

const SectionTitle = styled.h2`
  margin: 0;
  font-size: 14px;
  font-weight: 700;
  color: ${semanticColors.text.default};
`;

const AddPill = styled.button`
  border: 0;
  outline: 0;
  cursor: pointer;
  padding: 6px 10px;
  border-radius: 999px;
  background: ${colorScale.orange500};
  color: ${semanticColors.background.default};
  font-size: 12px;
  font-weight: 700;
`;

const MissionList = styled.ul`
  list-style: none;
  margin: 6px 0 0;
  padding: 0 2px 8px;
`;

const MissionItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  padding: 8px 2px;
  font-size: 14px;
  color: ${semanticColors.text.default};

  &::before {
    content: "📝";
    display: inline-block;
    font-size: 14px;
    line-height: 1;
    margin-top: 1px;
  }
`;

const CTAWrap = styled.div`
  position: sticky;
  bottom: 16px;
  margin-top: 24px;
`;

const CTAButton = styled.button`
  width: 100%;
  border: 0;
  outline: 0;
  cursor: pointer;
  padding: 14px 16px;
  border-radius: 12px;
  background: ${colorScale.gray900};
  color: ${semanticColors.background.default};
  font-size: 16px;
  font-weight: 800;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.12);
`;

/* --- Missions.tsx 전용 바텀시트 (간소화/비재사용) --- */
const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  z-index: 1000;
`;

const Sheet = styled.section`
  width: 100%;
  max-width: 520px;
  margin: 0 auto;
  background: ${semanticColors.background.default};
  border-radius: 20px 20px 0 0;
  box-shadow: 0 -8px 24px rgba(0, 0, 0, 0.2);
  padding: 12px 16px 20px;
  animation: slideUp 180ms ease-out;

  @keyframes slideUp {
    from {
      transform: translateY(24px);
      opacity: 0.7;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const Handle = styled.div`
  width: 44px;
  height: 5px;
  border-radius: 999px;
  background: ${colorScale.gray300};
  margin: 6px auto 12px;
`;

/* 바텀시트 내부 전용 스타일 */
const SheetTitle = styled.h3`
  margin: 0 0 12px;
  font-size: 16px;
  font-weight: 800;
  color: ${semanticColors.text.default};
`;

const Input = styled.input`
  width: 100%;
  padding: 10px 12px;
  border-radius: 12px;
  border: 1px solid ${colorScale.gray300};
  background: ${semanticColors.background.default};
  color: ${semanticColors.text.default};
  font-size: 14px;
`;

const ChipRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin: 12px 0 14px;
`;

const Chip = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  justify-content: center;
  padding: 10px 12px;
  border-radius: 12px;
  border: 1px solid ${semanticColors.brand.border};
  background: ${colorScale.brown0};
  color: ${semanticColors.text.default};
  font-weight: 700;
  font-size: 13px;
`;

const Primary = styled.button`
  width: 100%;
  padding: 12px 16px;
  border: 0;
  border-radius: 14px;
  background: ${colorScale.orange500};
  color: ${semanticColors.background.default};
  font-size: 15px;
  font-weight: 800;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.08);
`;

const Danger = styled.button`
  display: block;
  margin: 12px auto 0;
  background: transparent;
  border: 0;
  color: ${colorScale.red500};
  font-size: 12px;
  font-weight: 700;
`;

const missionsMock: Mission[] = [
  { id: "m1", text: "백엔드 직군 채용정보 5개 찾아보기" },
  { id: "m2", text: "자기소개서에서 나의 강점 3가지 정리해보기" },
  { id: "m3", text: "1분 자기소개 발표해보기" },
];

export default function Missions() {
  const [openSheet, setOpenSheet] = useState(false);

  const onAddMission = () => setOpenSheet(true);
  const onCloseSheet = () => setOpenSheet(false);

  const onNext = () => alert("다음");
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
