import { Typography } from '@/components/common/Typography';
import Intro from '@/components/Onboarding/Intro';
import Name from '@/components/Onboarding/Name';
import Result from '@/components/Onboarding/Result';
import Start from '@/components/Onboarding/Start';
import { ROUTES } from '@/constants/routes';
import { semanticColors } from '@/styles/theme/colors';
import type { ReactNode } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Container, NextButton } from './Test/Test.styles';

function OnboardingStep() {
  const router = useNavigate();
  const { step } = useParams();

  if (!step) {
    alert('오류 발생! 다시 시도해주세요');
    return router(ROUTES.HOME);
  }

  return <OnboardingStepRouter step={step} />;
}

function OnboardingStepRouter({ step }: { step: string }) {
  const router = useNavigate();

  if (step === ROUTES.ONBOARDING_STEP_RESULT) {
    return (
      <OnboardingStepLayout
        onNext={() => router(`${ROUTES.ONBOARDING}/${ROUTES.ONBOARDING_STEP_INTRO}`)}
        buttonText="다음"
      >
        <Result />
      </OnboardingStepLayout>
    );
  }

  if (step === ROUTES.ONBOARDING_STEP_INTRO) {
    return (
      <OnboardingStepLayout
        onNext={() => router(`${ROUTES.ONBOARDING}/${ROUTES.ONBOARDING_STEP_NAME}`)}
        buttonText="다음"
      >
        <Intro />
      </OnboardingStepLayout>
    );
  }

  if (step === ROUTES.ONBOARDING_STEP_NAME) {
    return (
      <OnboardingStepLayout
        onNext={() => router(`${ROUTES.ONBOARDING}/${ROUTES.ONBOARDING_STEP_START}`)}
        buttonText="다음"
      >
        <Name />
      </OnboardingStepLayout>
    );
  }

  if (step === ROUTES.ONBOARDING_STEP_START) {
    return (
      <OnboardingStepLayout onNext={() => router(ROUTES.HOME)} buttonText="시작하기">
        <Start />
      </OnboardingStepLayout>
    );
  }

  return <div></div>;
}

type OnboardingStepLayoutProps = {
  children: ReactNode;
  onNext: () => void;
  buttonText?: string;
  buttonDisabled?: boolean;
};

function OnboardingStepLayout({
  children,
  onNext,
  buttonText = '다음',
  buttonDisabled = false,
}: OnboardingStepLayoutProps) {
  return (
    <Container>
      {/* 콘텐츠 영역 */}
      <div>{children}</div>

      {/* 하단 고정 버튼 */}
      <NextButton onClick={onNext} disabled={buttonDisabled}>
        <Typography variant="label2Regular" style={{ color: semanticColors.background.default }}>
          {buttonText}
        </Typography>
      </NextButton>
    </Container>
  );
}

export default OnboardingStep;
