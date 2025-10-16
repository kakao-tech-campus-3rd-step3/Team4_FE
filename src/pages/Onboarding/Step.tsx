import Intro from '@/components/Onboarding/Intro';
import Name from '@/components/Onboarding/Name';
import Result from '@/components/Onboarding/Result';
import Start from '@/components/Onboarding/Start';
import { ROUTES } from '@/constants/routes';
import type { ReactNode } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Container } from './Test/Test.styles';

function OnboardingStep() {
  const router = useNavigate();
  const { step } = useParams();

  if (!step) {
    alert('오류 발생! 다시 시도해주세요');
    router(ROUTES.HOME);
    return null;
  }

  return <OnboardingStepRouter step={step} />;
}

function OnboardingStepRouter({ step }: { step: string }) {
  if (step === ROUTES.ONBOARDING_STEP_RESULT) {
    return (
      <OnboardingStepLayout>
        <Result />
      </OnboardingStepLayout>
    );
  }

  if (step === ROUTES.ONBOARDING_STEP_INTRO) {
    return (
      <OnboardingStepLayout>
        <Intro />
      </OnboardingStepLayout>
    );
  }

  if (step === ROUTES.ONBOARDING_STEP_NAME) {
    return (
      <OnboardingStepLayout>
        <Name />
      </OnboardingStepLayout>
    );
  }

  if (step === ROUTES.ONBOARDING_STEP_START) {
    return (
      <OnboardingStepLayout>
        <Start />
      </OnboardingStepLayout>
    );
  }

  return <div></div>;
}

type OnboardingStepLayoutProps = {
  children: ReactNode;
};

function OnboardingStepLayout({ children }: OnboardingStepLayoutProps) {
  return <Container>{children}</Container>;
}

export default OnboardingStep;
