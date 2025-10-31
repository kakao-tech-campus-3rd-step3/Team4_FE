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
  font-size: ${({ theme }) => theme.spacing[6]};
  font-weight: 800;
  color: ${semanticColors.text.default};
`;

export const Card = styled.section`
  background: ${semanticColors.brand.primary};
  border: 1.5px solid ${semanticColors.brand.border};
  border-radius: ${({ theme }) => theme.spacing[2]};
  overflow: hidden;
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
  font-size: 14px;
  font-weight: 700;
  color: ${semanticColors.text.default};
`;

export const CardBody = styled.div`
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
  min-height: 120px;
`;

export const Section = styled.section`
  margin-top: ${({ theme }) => theme.spacing[4]};
  background: rgba(255, 253, 247, 0.4);
  border: 1.5px solid ${semanticColors.brand.border};
  border-radius: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
`;

export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing[3]};
  opacity: 0.7;
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
  border: 1.5px solid ${colorScale.orange500};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  background: rgb(255, 155, 48);
  color: ${colorScale.gray100};
  font-size: ${({ theme }) => theme.spacing[5]};
  font-weight: 700;
  font-family: 'OngleipEoyeonce';
`;

export const MissionList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const MissionItem = styled.li<{ 'data-done'?: boolean }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[0]} 0;
  font-size: 20px;
  color: ${semanticColors.text.default};
  text-decoration: ${({ 'data-done': done }) => (done ? 'line-through' : 'none')};
  opacity: ${({ 'data-done': done }) => (done ? 0.5 : 1)};
  transition: all 0.2s ease;
  border-bottom: 1px solid rgba(136, 110, 81, 0.2);

  &:hover {
    border-bottom: 1px solid ${semanticColors.brand.border};
  }
`;

export const MissionItemWithDot = styled.li`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[2]} 0;
  font-size: 20px;
  color: ${semanticColors.text.default};
  transition: all 0.2s ease;
  cursor: pointer;
  border-bottom: 1px solid rgba(136, 110, 81, 0.2);
  opacity: 0.85;

  &:hover {
    opacity: 1;
    // background: ${semanticColors.brand.primary};
    border-bottom: 1px solid ${semanticColors.brand.border};
  }

  &::before {
    content: '●';
    display: inline-block;
    font-size: 10px;
    line-height: 1;
    margin-top: 1px;
    opacity: 0.4;
  }
`;

export const MissionListDescription = styled.p`
  font-size: 20px;
  color: ${semanticColors.text.disabled};
  margin-bottom: ${({ theme }) => theme.spacing[3]};
`;

export const CheckboxWrapper = styled.div<{ 'data-done'?: boolean }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  flex: 1;
  cursor: pointer;

  text-decoration: ${({ 'data-done': done }) => (done ? 'line-through' : 'none')};
`;

export const Checkbox = styled.input`
  appearance: none;
  width: 18px;
  height: 18px;
  border: 2px solid ${semanticColors.brand.border};
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  cursor: pointer;
  position: relative;
  transition: all 0.2s ease;
  flex-shrink: 0;

  &:checked {
    background: rgb(255, 155, 48);
    border-color: ${colorScale.orange500};
  }

  &:checked::after {
    content: '✓';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: ${semanticColors.background.default};
    font-size: 15px;
    font-weight: bold;
  }

  &:hover {
    border-color: ${colorScale.orange500};
  }
`;

export const MissionContent = styled.span<{ 'data-done'?: boolean }>`
  flex: 1;
  opacity: ${({ 'data-done': done }) => (done ? 0.6 : 1)};
  transition: all 0.2s ease;
`;

export const MissionActions = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[1]};
  margin-left: auto;
`;

export const IconButton = styled.button`
  background: transparent;
  border: 0;
  padding: 6px;
  cursor: pointer;
  font-size: 18px;
  opacity: 0.5;
  transition: all 0.2s;
  border-radius: ${({ theme }) => theme.borderRadius.sm};

  &:hover {
    opacity: 1;
    background: rgba(136, 110, 81, 0.1);
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
  background: rgba(0, 0, 0, 0.55);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  z-index: 1000;
`;

export const Sheet = styled.section`
  width: 100%;
  max-width: 520px;
  margin: 0 auto;
  background: ${semanticColors.brand.primary};
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
  background: ${semanticColors.brand.border};
  margin: 6px auto ${({ theme }) => theme.spacing[3]};
  opacity: 0.5;
`;

export const SheetTitle = styled.h3`
  margin: 0 0 ${({ theme }) => theme.spacing[3]};
  font-size: ${({ theme }) => theme.spacing[4]};
  font-weight: 800;
  color: ${semanticColors.text.default};
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 1.5px solid ${semanticColors.brand.border};
  background: rgb(252, 248, 242);
  color: ${semanticColors.text.default};
  font-size: 22px;
  font-family: 'OngleipEoyeonce';
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: ${colorScale.orange500};
  }

  &:read-only {
    background: rgba(255, 253, 247, 0.3);
    cursor: default;
  }
`;

export const ChipRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing[2]};
  margin: ${({ theme }) => theme.spacing[3]} 0 14px;
`;

export const Chip = styled.button<{ 'data-selected'?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 10px 12px;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border: 1.5px solid
    ${({ 'data-selected': selected }) => (selected ? colorScale.orange500 : colorScale.gray600)};
  background: ${({ 'data-selected': selected }) =>
    selected ? 'rgba(255, 144, 0, 0.1)' : colorScale.gray500};
  color: ${({ 'data-selected': selected }) =>
    selected ? colorScale.orange600 : semanticColors.text.default};
  cursor: pointer;
  transition: all 0.2s;
  font-family: 'OngleipEoyeonce';

  &:hover {
    border-color: ${colorScale.orange500};
    background: rgba(255, 144, 0, 0.1);
  }
`;

export const Primary = styled.button`
  width: 100%;
  padding: 14px ${({ theme }) => theme.spacing[4]};
  border: 0;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background: ${colorScale.orange500};
  color: ${semanticColors.background.default};
  font-size: 20px;
  font-weight: 800;
  font-family: 'OngleipEoyeonce';
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 2px 4px rgba(255, 144, 0, 0.2);

  &:hover {
    background: ${colorScale.orange600};
    box-shadow: 0 4px 8px rgba(255, 144, 0, 0.3);
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 1px 2px rgba(255, 144, 0, 0.2);
  }
`;

export const Danger = styled.button`
  display: block;
  margin: ${({ theme }) => theme.spacing[3]} auto 0;
  background: transparent;
  border: 0;
  color: ${colorScale.red500};
  font-size: 15px;
  font-weight: 700;
  font-family: 'OngleipEoyeonce';
  cursor: pointer;
  padding: 8px 16px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  transition: all 0.2s;

  &:hover {
    background: rgba(255, 59, 48, 0.1);
    color: ${colorScale.red600};
  }
`;
