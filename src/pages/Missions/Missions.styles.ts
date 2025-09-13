import { DESIGN_BASE, PAGE_PADDING } from '@/constants/layout';
import { colorScale, semanticColors } from '@/styles/theme/colors';
import styled from '@emotion/styled';

export const Screen = styled.main`
  max-width: ${DESIGN_BASE.MAX_WIDTH}px;
  margin: 0 auto;
  min-height: 100vh;
  padding: ${PAGE_PADDING.TOP_EXTRA + 16}px ${PAGE_PADDING.INLINE + 12}px
    ${PAGE_PADDING.BOTTOM_EXTRA + 24}px;
  box-sizing: border-box;
`;

export const Title = styled.h1`
  margin: 0 0 12px 0;
  font-size: 18px;
  font-weight: 800;
  color: ${semanticColors.text.default};
`;

export const Card = styled.section`
  background: ${semanticColors.background.default};
  border: 1px solid ${semanticColors.brand.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.04);
  overflow: hidden;
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${semanticColors.brand.primary};
  padding: 10px 14px;
  font-size: 14px;
  font-weight: 700;
  color: ${semanticColors.text.default};
`;

export const CardBody = styled.div`
  padding: ${({ theme }) => theme.spacing[4]} 14px 18px;
  background: ${colorScale.brown0};
  min-height: 120px;
`;

export const Section = styled.section`
  margin-top: ${({ theme }) => theme.spacing[4]};
  background: ${semanticColors.background.default};
  border: 1px solid ${semanticColors.brand.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[3]} 10px;
`;

export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 6px;
`;

export const SectionTitle = styled.h2`
  margin: 0;
  font-size: 14px;
  font-weight: 700;
  color: ${semanticColors.text.default};
`;

export const AddPill = styled.button`
  border: 0;
  outline: 0;
  cursor: pointer;
  padding: 6px 10px;
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  background: ${colorScale.orange500};
  color: ${semanticColors.background.default};
  font-size: ${({ theme }) => theme.spacing[3]};
  font-weight: 700;
`;

export const MissionList = styled.ul`
  list-style: none;
  margin: 6px 0 0;
  padding: 0 2px ${({ theme }) => theme.spacing[2]};
`;

export const MissionItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[2]} 2px;
  font-size: 14px;
  color: ${semanticColors.text.default};

  &::before {
    content: '📝';
    display: inline-block;
    font-size: 14px;
    line-height: 1;
    margin-top: 1px;
  }
`;

export const CTAWrap = styled.div`
  position: sticky;
  bottom: ${({ theme }) => theme.spacing[4]};
  margin-top: ${({ theme }) => theme.spacing[6]};
`;

export const CTAButton = styled.button`
  width: 100%;
  border: 0;
  outline: 0;
  cursor: pointer;
  padding: 14px ${({ theme }) => theme.spacing[4]};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  background: ${colorScale.gray900};
  color: ${semanticColors.background.default};
  font-size: ${({ theme }) => theme.spacing[4]};
  font-weight: 800;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.12);
`;

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  z-index: 1000;
`;

export const Sheet = styled.section`
  width: 100%;
  max-width: 520px;
  margin: 0 auto;
  background: ${semanticColors.background.default};
  border-radius: ${({ theme }) => theme.borderRadius.lg} ${({ theme }) => theme.borderRadius.lg} 0 0;
  box-shadow: 0 -8px 24px rgba(0, 0, 0, 0.2);
  padding: ${({ theme }) => `
  ${theme.spacing[3]} ${theme.spacing[4]} ${theme.spacing[5]}
`};

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

export const Handle = styled.div`
  width: ${({ theme }) => theme.spacing[11]};
  height: 5px;
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  background: ${colorScale.gray300};
  margin: 6px auto ${({ theme }) => theme.spacing[3]};
`;

export const SheetTitle = styled.h3`
  margin: 0 0 ${({ theme }) => theme.spacing[3]};
  font-size: ${({ theme }) => theme.spacing[4]};
  font-weight: 800;
  color: ${semanticColors.text.default};
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  border: 1px solid ${colorScale.gray300};
  background: ${semanticColors.background.default};
  color: ${semanticColors.text.default};
  font-size: 14px;
`;

export const ChipRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing[2]};
  margin: ${({ theme }) => theme.spacing[3]} 0 14px;
`;

export const Chip = styled.button`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[1]};
  justify-content: center;
  padding: 10px ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  border: 1px solid ${semanticColors.brand.border};
  background: ${colorScale.brown0};
  color: ${semanticColors.text.default};
  font-weight: 700;
  font-size: 13px;
`;

export const Primary = styled.button`
  width: 100%;
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
  border: 0;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background: ${colorScale.orange500};
  color: ${semanticColors.background.default};
  font-size: 15px;
  font-weight: 800;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.08);
`;

export const Danger = styled.button`
  display: block;
  margin: ${({ theme }) => theme.spacing[3]} auto 0;
  background: transparent;
  border: 0;
  color: ${colorScale.red500};
  font-size: ${({ theme }) => theme.spacing[3]};
  font-weight: 700;
`;
