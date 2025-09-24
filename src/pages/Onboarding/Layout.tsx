import CenteredFeedback from '@/components/common/CenteredFeedback';
import ErrorFallback from '@/components/common/ErrorFallback';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Outlet } from 'react-router-dom';
import { LoadingSpinner, LoadingSpinnerWrapper } from '../../components/common/LoadingSpinner';
import { MESSAGE } from '../Character/constants/message';

function OnboardingLayout() {
  return (
    <CenteredFeedback>
      <ErrorBoundary
        fallbackRender={() => {
          return <ErrorFallback message={MESSAGE.ERROR} />;
        }}
      >
        <Suspense
          fallback={
            <LoadingSpinnerWrapper>
              <LoadingSpinner />
            </LoadingSpinnerWrapper>
          }
        >
          <Outlet />
        </Suspense>
      </ErrorBoundary>
    </CenteredFeedback>
  );
}

export default OnboardingLayout;
