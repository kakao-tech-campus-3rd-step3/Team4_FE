import ErrorFallback from '@/components/common/ErrorFallback';
import { LoadingSpinner, LoadingSpinnerWrapper } from '@/components/common/LoadingSpinner';
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
      fallbackRender={(e) => {
        // TODO: 에러 출력 방식 수정

        return (
          <CenteredFeedback>
            <ErrorFallback message={'나중에 다시 시도해주세요.'} />
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
