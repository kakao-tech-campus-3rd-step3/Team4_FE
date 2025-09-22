import { useState } from 'react';
import type { OnboardingTest } from '../../api/types';
import { Typography } from '../../components/common/Typography';
import mocks from '../../mockSetup';
import { semanticColors } from '../../styles/theme/colors';
import {
  AnswerButton,
  Answers,
  Container,
  Image,
  ImageBox,
  NextButton,
  ProgressBar,
  ProgressFill,
  ProgressWrapper,
  Question,
} from './Test.styles';

function Test() {
  const tests = mocks.data.onboardingTestMock;
  const totalTests = tests.length;

  const [currentTestIdx, setCurrentTestIdx] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');

  const [progressPercent, setProgressPercent] = useState<number>(0);

  const currentTest: OnboardingTest = tests[currentTestIdx];

  const handleNext = () => {
    if (currentTestIdx < totalTests - 1) {
      setCurrentTestIdx(currentTestIdx + 1);
      setProgressPercent(((currentTestIdx + 1) / totalTests) * 100);
    }
  };

  return (
    <Container>
      <div>
        <ProgressWrapper>
          <ProgressBar>
            <ProgressFill percent={progressPercent} />
          </ProgressBar>
        </ProgressWrapper>

        {/* 질문 텍스트 */}
        <Question>
          <Typography variant="body1Regular" style={{ color: semanticColors.text.default }}>
            {currentTest.question}
          </Typography>
        </Question>

        {/* 고양이 이미지 */}
        <ImageBox>
          <Image src={currentTest.imageUrl} alt="cat" />
        </ImageBox>

        {/* 선택 버튼들 */}
        <Answers>
          {currentTest.answer.map((answer) => (
            <AnswerButton
              key={answer}
              selected={selectedAnswer === answer}
              onClick={() => setSelectedAnswer(answer)}
            >
              <Typography variant="label2Regular" style={{ color: semanticColors.text.default }}>
                {answer}
              </Typography>
            </AnswerButton>
          ))}
        </Answers>
      </div>
      <NextButton onClick={handleNext}>
        <Typography variant="label2Regular" style={{ color: semanticColors.background.default }}>
          다음
        </Typography>
      </NextButton>
    </Container>
  );
}

export default Test;
