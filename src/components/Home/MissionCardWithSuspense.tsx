import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { LoadingSpinner, LoadingSpinnerWrapper } from '@/components/common/LoadingSpinner';
import ErrorFallback from '@/components/common/ErrorFallback';
import MissionCardList from './MissionCardList';

export function MissionCardWithSuspense() {
  return (
    <ErrorBoundary
      FallbackComponent={() => <ErrorFallback message="미션을 불러오는데 실패했습니다." />}
    >
      <Suspense
        fallback={
          <LoadingSpinnerWrapper>
            <LoadingSpinner size={30} />
          </LoadingSpinnerWrapper>
        }
      >
        <MissionCardList />
      </Suspense>
    </ErrorBoundary>
  );
}
