import type { AnswerType, OnboardingTest } from '@/api/types';
import { Typography } from '@/components/common/Typography';
import { semanticColors } from '@/styles/theme/colors';
import { useRef } from 'react';
import { NextButton } from './Test.styles';

type TestNextButtonProps = {
  totalTests: number;
  currentTest: OnboardingTest;
  selectedAnswerIndex: number;
  setSelectedAnswerIndex: (index: number) => void;
  currentTestIdx: number;
  setCurrentTestIdx: (index: number) => void;
  setProgressPercent: (percent: number) => void;
  postAnswer: ({ answers }: { answers: AnswerType[] }) => void;
  isImagePreloaded: boolean;
};

function TestNextButton({
  totalTests,
  currentTest,
  currentTestIdx,
  selectedAnswerIndex,
  setSelectedAnswerIndex,
  setCurrentTestIdx,
  setProgressPercent,
  postAnswer,
  isImagePreloaded,
}: TestNextButtonProps) {
  const answersRef = useRef<AnswerType[]>([]);

  const handleNext = async () => {
    answersRef.current.push({
      questionId: currentTest.id,
      choiceIndex: selectedAnswerIndex,
    });
    setSelectedAnswerIndex(0);

    if (currentTestIdx < totalTests - 1) {
      setCurrentTestIdx(currentTestIdx + 1);
      setProgressPercent(((currentTestIdx + 1) / totalTests) * 100);
      return;
    }

    postAnswer({ answers: answersRef.current });
  };

  return (
    <NextButton
      onClick={handleNext}
      disabled={!isImagePreloaded}
      style={{
        opacity: isImagePreloaded ? 1 : 0.5,
        cursor: isImagePreloaded ? 'pointer' : 'not-allowed',
      }}
    >
      <Typography variant="label2Regular" style={{ color: semanticColors.background.default }}>
        {isImagePreloaded ? '다음' : '이미지 로딩 중...'}
      </Typography>
    </NextButton>
  );
}

export default TestNextButton;
