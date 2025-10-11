import { Typography } from '@/components/common/Typography';
import { ROUTES } from '@/constants/routes';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

const BalloonWrap = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;

const Balloon = styled.div`
  background: ${({ theme }) => theme.colors.colorScale.brown400};
  color: ${({ theme }) => theme.colors.colorScale.gray900};
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
  border-radius: ${({ theme }) => theme.spacing[2]};
  font-size: 13px;
  position: relative;
`;

const BalloonTail = styled.div`
  position: absolute;
  left: 92px;
  bottom: -8px;
  width: 0;
  height: 0;
  border-left: ${({ theme }) => theme.spacing[2]} solid transparent;
  border-right: ${({ theme }) => theme.spacing[2]} solid transparent;
  border-top: ${({ theme }) => theme.spacing[2]} solid
    ${({ theme }) => theme.colors.colorScale.brown400};
`;

const CatImg = styled.img`
  max-width: 100%;
  height: auto;
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
  const navigate = useNavigate();
  const gotoList = () => {
    navigate(`/${ROUTES.DIARIES}`);
  };

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
      <CatImg
        alt="Image"
        src="https://github.com/user-attachments/assets/828052b9-a7a3-4b44-89d5-7844218b14ff"
      />
      <NextButton onClick={gotoList}>
        <Typography variant="label2Regular" color="gray0">
          다음
        </Typography>
      </NextButton>
    </>
  );
}

export default DiariesFeedback;
