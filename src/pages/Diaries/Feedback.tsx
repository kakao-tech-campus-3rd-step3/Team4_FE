import { Typography } from '@/components/common/Typography';
import { ROUTES } from '@/constants/routes';
import styled from '@emotion/styled';
import { useNavigate, useParams } from 'react-router-dom';
import { useDiaryDetail } from './hooks/useDiaryDetail';

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
  max-height: 180px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: ${({ theme }) => theme.spacing[1]};
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.colorScale.gray600};
    border-radius: ${({ theme }) => theme.spacing[3]};
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
`;

const BalloonTail = styled.div`
  position: absolute;
  left: 92px;
  bottom: -8px;
  width: 0;
  height: 0;
  border-left: ${({ theme }) => theme.spacing[3]} solid transparent;
  border-right: ${({ theme }) => theme.spacing[3]} solid transparent;
  border-top: ${({ theme }) => theme.spacing[4]} solid
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
  const { id } = useParams();
  const diaryId = Number(id);

  const { data: diary, isLoading, isError } = useDiaryDetail(diaryId);

  const navigate = useNavigate();
  const gotoDetail = () => {
    navigate(`${ROUTES.DIARIES}/${ROUTES.DIARIES_DETAIL}`);
  };

  if (isLoading) return <div>로딩 중...</div>;
  if (isError || !diary) return <div>피드백메시지를 불러올 수 없습니다.</div>;

  return (
    <>
      <BalloonWrap>
        <Balloon>
          <Typography variant="label2Regular" style={{ fontSize: '1.2rem' }}>
            {diary.feedback}
          </Typography>
        </Balloon>
        <BalloonTail />
      </BalloonWrap>
      <CatImg
        alt="Image"
        src="https://github.com/user-attachments/assets/828052b9-a7a3-4b44-89d5-7844218b14ff"
      />
      <NextButton onClick={gotoDetail}>
        <Typography variant="label2Regular" color="gray0">
          다음
        </Typography>
      </NextButton>
    </>
  );
}

export default DiariesFeedback;
