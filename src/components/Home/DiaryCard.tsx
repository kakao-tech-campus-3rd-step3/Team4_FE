import { Typography } from '@/components/common/Typography';
import { DiaryCard as StyledDiaryCard } from './Home.styles';

interface DiaryCardProps {
  onClick: () => void;
}

export function DiaryCard({ onClick }: DiaryCardProps) {
  return (
    <StyledDiaryCard onClick={onClick}>
      <Typography variant="body2Regular" color="gray900">
        일기쓰기
      </Typography>
      <Typography variant="label2Regular" color="gray800">
        오늘 하루의 감정을 기록해보세요
      </Typography>
    </StyledDiaryCard>
  );
}
