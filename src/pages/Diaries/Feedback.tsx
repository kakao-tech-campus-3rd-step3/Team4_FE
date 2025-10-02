import styled from '@emotion/styled';

const BalloonWrap = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;

const Balloon = styled.div`
  background: ${({ theme }) => theme.colors.colorScale.brown400};
  color: ${({ theme }) => theme.colors.colorScale.gray900};
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
  border-radius: 8px;
  font-size: 13px;
  position: relative;
`;

const BalloonTail = styled.div`
  position: absolute;
  left: 92px;
  bottom: -8px;
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: 8px solid ${({ theme }) => theme.colors.colorScale.brown400};
`;

const NextButton = styled.button`
  margin-top: ${({ theme }) => theme.spacing[6]};
  width: 100%;
  padding: ${({ theme }) => theme.spacing[3]} 0;
  border-radius: ${({ theme }) => theme.spacing[3]};
  background: ${({ theme }) => theme.colors.colorScale.gray1000};
  color: ${({ theme }) => theme.colors.colorScale.gray0};
  font-size: 14px;
  cursor: pointer;
  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

function DiariesFeedback() {
  return (
    <>
      <BalloonWrap>
        <Balloon>
          오늘 하루도 수고 많았다냥!
          <br />
          내일은 산책을 나가보자냥!
        </Balloon>
        <BalloonTail />
      </BalloonWrap>
      <img
        alt="Image"
        src="https://github.com/user-attachments/assets/828052b9-a7a3-4b44-89d5-7844218b14ff"
        style={{ maxWidth: '100%', height: 'auto' }}
      />
      <NextButton>다음</NextButton>
    </>
  );
}

export default DiariesFeedback;
