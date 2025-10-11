import { useEffect, useState } from 'react';

type ImagePreloadStatus = {
  [url: string]: boolean;
};

export const useImagePreloader = (imageUrls: string[]) => {
  const [preloadStatus, setPreloadStatus] = useState<ImagePreloadStatus>({});
  const [isAllLoaded, setIsAllLoaded] = useState(false);

  useEffect(() => {
    if (imageUrls.length === 0) {
      return;
    }

    const preloadImages = async () => {
      const status: ImagePreloadStatus = {};

      imageUrls.forEach((url) => {
        status[url] = false;
      });
      setPreloadStatus(status);

      const preloadPromises = imageUrls.map((url) => {
        return new Promise<{ url: string; loaded: boolean }>((resolve) => {
          const img = new Image();
          img.onload = () => resolve({ url, loaded: true });
          img.onerror = () => resolve({ url, loaded: false });
          img.src = url;
        });
      });

      try {
        const results = await Promise.all(preloadPromises);

        const newStatus: ImagePreloadStatus = {};
        results.forEach(({ url, loaded }) => {
          newStatus[url] = loaded;
        });

        setPreloadStatus(newStatus);
        setIsAllLoaded(results.every(({ loaded }) => loaded));
      } catch (error) {
        console.error('이미지 프리로딩 중 오류 발생:', error);
        setIsAllLoaded(false);
      }
    };

    preloadImages();
  }, [imageUrls]);

  return {
    preloadStatus,
    isAllLoaded,
    isImageLoaded: (url: string) => preloadStatus[url] || false,
  };
};
