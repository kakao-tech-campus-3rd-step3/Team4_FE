import { useMemo, useState } from 'react';
import type { AnswerType, OnboardingTest } from '../../../api/types';
import TestNextButton from './TestNextButton';
import TestProgressBar from './TestProgressBar';
import TestQuestion from './TestQuestion';
import { useImagePreloader } from './hooks/useImagePreloader';

type TestScreenProps = {
  tests: OnboardingTest[];
  postAnswer: ({ answers }: { answers: AnswerType[] }) => void;
};

function TestScreen({ tests, postAnswer }: TestScreenProps) {
  const [currentTestIdx, setCurrentTestIdx] = useState<number>(0);
  const currentTest: OnboardingTest = tests[currentTestIdx];

  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number>(0);
  const [progressPercent, setProgressPercent] = useState<number>(0);

  const imageUrls = useMemo(() => tests.map((test) => test.imageUrl), [tests]);
  const { isImageLoaded } = useImagePreloader(imageUrls);

  const handleSelecteAnswer = (index: number) => {
    setSelectedAnswerIndex(index);
  };

  return (
    <>
      <TestProgressBar progressPercent={progressPercent} />

      <TestQuestion
        currentTest={currentTest}
        selectedAnswerIndex={selectedAnswerIndex}
        handleSelecteAnswer={handleSelecteAnswer}
        isImagePreloaded={isImageLoaded(currentTest.imageUrl)}
      />
      <TestNextButton
        totalTests={tests.length}
        currentTest={currentTest}
        selectedAnswerIndex={selectedAnswerIndex}
        setSelectedAnswerIndex={setSelectedAnswerIndex}
        currentTestIdx={currentTestIdx}
        setCurrentTestIdx={setCurrentTestIdx}
        setProgressPercent={setProgressPercent}
        postAnswer={postAnswer}
        isImagePreloaded={isImageLoaded(currentTest.imageUrl)}
      />
    </>
  );
}

export default TestScreen;
