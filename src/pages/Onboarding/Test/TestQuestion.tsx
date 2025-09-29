import type { OnboardingTest } from '@/api/types';
import { Typography } from '@/components/common/Typography';
import { semanticColors } from '@/styles/theme/colors';
import PreloadedImage from './PreloadedImage';
import { AnswerButton, Answers, Question } from './Test.styles';

type TestQuestionProps = {
  currentTest: OnboardingTest;
  selectedAnswerIndex: number;
  handleSelecteAnswer: (index: number) => void;
  isImagePreloaded: boolean;
};

function TestQuestion({
  currentTest,
  selectedAnswerIndex,
  handleSelecteAnswer,
  isImagePreloaded,
}: TestQuestionProps) {
  return (
    <>
      {/* 질문 텍스트 */}
      <Question>
        <Typography variant="body1Regular" style={{ color: semanticColors.text.default }}>
          {currentTest.question}
        </Typography>
      </Question>

      {/* 고양이 이미지 */}
      <PreloadedImage src={currentTest.imageUrl} alt="cat" isPreloaded={isImagePreloaded} />

      {/* 선택 버튼들 */}
      <Answers>
        {currentTest.answers.map((answer, index) => (
          <AnswerButton
            key={answer}
            selected={selectedAnswerIndex === index}
            onClick={() => handleSelecteAnswer(index)}
          >
            <Typography variant="label2Regular" style={{ color: semanticColors.text.default }}>
              {answer}
            </Typography>
          </AnswerButton>
        ))}
      </Answers>
    </>
  );
}

export default TestQuestion;
