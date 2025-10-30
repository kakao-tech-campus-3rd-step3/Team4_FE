import { css, Global } from '@emotion/react';

export default function GlobalStyle() {
  return (
    <Global
      styles={css`
        body {
          font-family: 'OngleipEoyeonce', sans-serif;
        }
      `}
    />
  );
}
