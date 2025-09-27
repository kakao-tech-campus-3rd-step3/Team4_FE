import { EmotionAPI } from '@/api/emotion';
import { type AnswerType, type OnboardingTest } from '@/api/types';
import { Typography } from '@/components/common/Typography';
import QUERY_KEY from '@/constants/queryKey';
import { semanticColors } from '@/styles/theme/colors';
import { useMutation, useSuspenseQuery } from '@tanstack/react-query';
import { useRef, useState } from 'react';
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
  const { data: tests } = useSuspenseQuery<OnboardingTest[]>({
    queryKey: [QUERY_KEY.ONBOARDING_TEST],
    queryFn: EmotionAPI.getTest,
  });

  const { mutate: postAnswer } = useMutation({
    mutationFn: ({ answers }: { answers: AnswerType[] }) => EmotionAPI.submitTest({ answers }),
    onError: (error) => {
      throw new Error(error.message);
    },
  });

  const [currentTestIdx, setCurrentTestIdx] = useState<number>(0);
  const totalTests = tests.length;
  const currentTest: OnboardingTest = tests[currentTestIdx];

  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number>(0);
  const answersRef = useRef<AnswerType[]>([]);

  const [progressPercent, setProgressPercent] = useState<number>(0);

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
          {currentTest.answers.map((answer, index) => (
            <AnswerButton
              key={answer}
              selected={selectedAnswerIndex === index}
              onClick={() => setSelectedAnswerIndex(index)}
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
