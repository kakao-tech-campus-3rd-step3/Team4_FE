import { LoadingSpinner, LoadingSpinnerWrapper } from '@/components/common/LoadingSpinner';
import { Suspense } from 'react';
import CharacterData from './CharacterData';

function CharacterScreen() {
  return (
    <Suspense
      fallback={
        <LoadingSpinnerWrapper>
          <LoadingSpinner />
        </LoadingSpinnerWrapper>
      }
    >
      <CharacterData />
    </Suspense>
  );
}

export default CharacterScreen;
