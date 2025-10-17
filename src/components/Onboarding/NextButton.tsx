import { Typography } from '@/components/common/Typography';
import { NextButton } from '@/pages/Onboarding/Test/Test.styles';
import { semanticColors } from '@/styles/theme/colors';

function NextStepButton({
  handleNext,
  last,
  isPending,
}: {
  handleNext: () => void;
  last?: boolean;
  isPending?: boolean;
}) {
  if (last) {
    return (
      <NextButton onClick={handleNext}>
        <Typography variant="label2Regular" style={{ color: semanticColors.background.default }}>
          시작하기
        </Typography>
      </NextButton>
    );
  }

  if (isPending) {
    return (
      <NextButton onClick={handleNext} disabled={isPending}>
        <Typography
          variant="label2Regular"
          style={{ opacity: isPending ? 0.5 : 1, color: semanticColors.background.default }}
        >
          {isPending ? '고양이 이름 짓는중...' : '다음'}
        </Typography>
      </NextButton>
    );
  }

  return (
    <NextButton onClick={handleNext}>
      <Typography variant="label2Regular" style={{ color: semanticColors.background.default }}>
        다음
      </Typography>
    </NextButton>
  );
}

export default NextStepButton;
