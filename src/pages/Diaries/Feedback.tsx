import { Typography } from '@/components/common/Typography';
import { ROUTES } from '@/constants/routes';
import { useNavigate, useParams } from 'react-router-dom';
import { useDiaryDetail } from './hooks/useDiaryDetail';
import { Balloon, BalloonTail, BalloonWrap, CatImg, NextButton } from './Diaries.styles';
import styled from '@emotion/styled';

const FeedbackContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[6]};
  padding-bottom: ${({ theme }) => theme.spacing[4]};
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
  align-items: center;
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
    <FeedbackContainer>
      <ContentWrapper>
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
      </ContentWrapper>
      <NextButton onClick={gotoDetail}>
        <Typography variant="label2Regular" color="gray0">
          다음
        </Typography>
      </NextButton>
    </FeedbackContainer>
  );
}

export default DiariesFeedback;
