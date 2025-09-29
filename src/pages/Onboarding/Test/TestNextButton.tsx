import { useRef } from 'react';
import type { AnswerType, OnboardingTest } from '../../../api/types';
import { Typography } from '../../../components/common/Typography';
import { semanticColors } from '../../../styles/theme/colors';
import { NextButton } from './Test.styles';

function TestNextButton({
  totalTests,
  currentTest,
  currentTestIdx,
  selectedAnswerIndex,
  setSelectedAnswerIndex,
  setCurrentTestIdx,
  setProgressPercent,
  postAnswer,
}: {
  totalTests: number;
  currentTest: OnboardingTest;
  selectedAnswerIndex: number;
  setSelectedAnswerIndex: (index: number) => void;
  currentTestIdx: number;
  setCurrentTestIdx: (index: number) => void;
  setProgressPercent: (percent: number) => void;
  postAnswer: ({ answers }: { answers: AnswerType[] }) => void;
}) {
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
    <NextButton onClick={handleNext}>
      <Typography variant="label2Regular" style={{ color: semanticColors.background.default }}>
        다음
      </Typography>
    </NextButton>
  );
}

export default TestNextButton;
