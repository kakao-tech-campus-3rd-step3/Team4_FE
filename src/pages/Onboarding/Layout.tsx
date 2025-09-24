import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Outlet } from 'react-router-dom';
import ErrorFallback from '../../components/common/ErrorFallback';
import { LoadingSpinner, LoadingSpinnerWrapper } from '../../components/common/LoadingSpinner';
import { CenteredFeedback } from '../Character/components/character/CharacterScreen';
import { MESSAGE } from '../Character/constants/message';

function OnboardingLayout() {
  return (
    <div style={{ height: '100vh' }}>
      <ErrorBoundary
        fallbackRender={() => {
          return (
            <CenteredFeedback>
              <ErrorFallback message={MESSAGE.ERROR} />
            </CenteredFeedback>
          );
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
    </div>
  );
}

export default OnboardingLayout;
