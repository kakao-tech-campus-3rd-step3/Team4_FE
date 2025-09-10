import styled from "@emotion/styled";
import { semanticColors, colorScale } from "@/styles/theme/colors";
import { DESIGN_BASE, PAGE_PADDING } from "@/constants/layout";

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
  background: ${semanticColors.brand.primary}; /* 상단 옅은 브라운 */
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

const missionsMock: Mission[] = [
  { id: "m1", text: "백엔드 직군 채용정보 5개 찾아보기" },
  { id: "m2", text: "자기소개서에서 나의 강점 3가지 정리해보기" },
  { id: "m3", text: "1분 자기소개 발표해보기" },
];

export default function Missions() {
  const onAddMission = () => {
    // TODO: 미션추가 로직
    alert("미션추가");
  };
  const onNext = () => {
    // TODO: 다음 단계 라우팅
    alert("다음");
  };

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
      <Screen>
        <Title>missions</Title>
      </Screen>
    </>
  );
}
