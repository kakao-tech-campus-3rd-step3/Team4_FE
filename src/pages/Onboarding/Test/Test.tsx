import { EmotionAPI } from '@/api/emotion';
import { type AnswerType, type OnboardingTest } from '@/api/types';
import QUERY_KEY from '@/constants/queryKey';
import { useMutation, useSuspenseQuery } from '@tanstack/react-query';
import { Container } from './Test.styles';
import TestScreen from './TestScreen';

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

  return (
    <Container>
      <TestScreen tests={tests} postAnswer={postAnswer} />
    </Container>
  );
}

export default Test;
