import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { MissionCard } from './MissionCard';
import { LoadingSpinner, LoadingSpinnerWrapper } from '@/components/common/LoadingSpinner';
import ErrorFallback from '@/components/common/ErrorFallback';

interface MissionCardWithSuspenseProps {
  onClick: () => void;
}

export function MissionCardWithSuspense({ onClick }: MissionCardWithSuspenseProps) {
  return (
    <ErrorBoundary
      FallbackComponent={({ error }) => <ErrorFallback message="미션을 불러오는데 실패했습니다." />}
      onError={(error) => {
        console.error('MissionCard Error:', error);
      }}
    >
      <Suspense
        fallback={
          <LoadingSpinnerWrapper>
            <LoadingSpinner />
          </LoadingSpinnerWrapper>
        }
      >
        <MissionCard onClick={onClick} />
      </Suspense>
    </ErrorBoundary>
  );
}
