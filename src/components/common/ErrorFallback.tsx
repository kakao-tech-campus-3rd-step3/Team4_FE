import styled from '@emotion/styled';
import { Typography } from './Typography';

const ErrorBoundaryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
`;

function ErrorFallback({ message }: { message: string }) {
  return (
    <ErrorBoundaryContainer>
      <Typography variant="title2Bold" color="red700">
        {message}
      </Typography>
    </ErrorBoundaryContainer>
  );
}

export default ErrorFallback;
