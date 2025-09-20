import ErrorFallback from '@/components/common/ErrorFallback';
import { LoadingSpinner, LoadingSpinnerWrapper } from '@/components/common/LoadingSpinner';
import { MESSAGE } from '@/pages/Character/constants/message';
import styled from '@emotion/styled';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import CharacterData from './CharacterData';

export const CenteredFeedback = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

function CharacterScreen() {
  return (
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
          <CenteredFeedback>
            <LoadingSpinnerWrapper>
              <LoadingSpinner />
            </LoadingSpinnerWrapper>
          </CenteredFeedback>
        }
      >
        <CharacterData />
      </Suspense>
    </ErrorBoundary>
  );
}

export default CharacterScreen;
