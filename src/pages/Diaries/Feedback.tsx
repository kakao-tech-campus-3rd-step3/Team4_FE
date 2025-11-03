import { Typography } from '@/components/common/Typography';
import { ROUTES } from '@/constants/routes';
import { useNavigate, useParams } from 'react-router-dom';
import { useDiaryDetail } from './hooks/useDiaryDetail';
import { Balloon, BalloonTail, BalloonWrap, CatImg, NextButton } from './Diaries.styles';

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
