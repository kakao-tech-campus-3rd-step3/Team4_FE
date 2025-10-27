import ErrorFallback from '@/components/common/ErrorFallback';
import { LoadingSpinner, LoadingSpinnerWrapper } from '@/components/common/LoadingSpinner';
import { MESSAGE } from '@/pages/Character/constants/message';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { CharacterScreenContainer } from './Character.styles';
import CharacterData from './CharacterData';
import styled from '@emotion/styled';

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

function CharacterScreen() {
  return (
    <CharacterScreenContainer>
      <ErrorBoundary
        fallbackRender={() => {
          return <ErrorFallback message={MESSAGE.ERROR} />;
        }}
      >
        <Suspense
          fallback={
            <LoadingContainer>
              <LoadingSpinnerWrapper>
                <LoadingSpinner />
              </LoadingSpinnerWrapper>
            </LoadingContainer>
          }
        >
          <CharacterData />
        </Suspense>
      </ErrorBoundary>
    </CharacterScreenContainer>
  );
}

export default CharacterScreen;
