import styled from '@emotion/styled';

const MoodButton = styled.button<{ selected: boolean }>`
  width: ${({ theme }) => theme.spacing[10]};
  height: ${({ theme }) => theme.spacing[10]};
  border-radius: 50%;
  border: 1px solid ${({ selected }) => (selected ? '#000' : 'rgba(0, 0, 0, 0.2)')};
  background: ${({ theme }) => theme.colors.colorScale.brown200};
  font-size: 20px;
  transition: 0.2s;
  ${({ selected }) => selected && `box-shadow: 0 0 0 2px rgba(0,0,0,0.4); border-color:#000;`}
`;

function DiariesNewWrite() {
  return <div>step1: mood, step2: diary</div>;
}

export default DiariesNewWrite;
