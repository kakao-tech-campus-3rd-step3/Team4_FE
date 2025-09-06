import { css, Global } from '@emotion/react';

export default function GlobalStyle() {
  return (
    <Global
      styles={css`
        @font-face {
          font-family: 'OngleipEoyeonce';
          src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2105@1.1/Uiyeun.woff')
            format('woff');
          font-weight: normal;
          font-display: swap;
        }

        body {
          font-family: 'OngleipEoyeonce', sans-serif;
        }
      `}
    />
  );
}
