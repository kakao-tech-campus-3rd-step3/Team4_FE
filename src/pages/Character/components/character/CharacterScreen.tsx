import CenteredFeedback from '@/components/common/CenteredFeedback';
import ErrorFallback from '@/components/common/ErrorFallback';
import { LoadingSpinner, LoadingSpinnerWrapper } from '@/components/common/LoadingSpinner';
import { MESSAGE } from '@/pages/Character/constants/message';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import CharacterData from './CharacterData';

function CharacterScreen() {
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
          <CharacterData />
        </Suspense>
      </ErrorBoundary>
    </CenteredFeedback>
  );
}

export default CharacterScreen;
