import { LoadingSpinner } from '@/components/common/LoadingSpinner';
import { useState } from 'react';
import ErrorFallback from '../../../components/common/ErrorFallback';
import { Image, ImageBox, LoadingOverlay } from './Test.styles';
import { ERROR_MESSAGE } from './constants/message';

type PreloadedImageProps = {
  src: string;
  alt: string;
  isPreloaded: boolean;
};

function PreloadedImage({ src, alt, isPreloaded }: PreloadedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  const handleImageError = () => {
    setHasError(true);
  };

  return (
    <ImageBox>
      {!isPreloaded && !isLoaded && (
        <LoadingOverlay>
          <LoadingSpinner />
        </LoadingOverlay>
      )}
      <Image
        src={src}
        alt={alt}
        onLoad={handleImageLoad}
        onError={handleImageError}
        style={{
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 0.3s ease-in-out',
        }}
      />
      {hasError && <ErrorFallback message={ERROR_MESSAGE.IMAGE_LOAD_FAILED} />}
    </ImageBox>
  );
}

export default PreloadedImage;
