import styled from '@emotion/styled';

const LoadingSpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 6px solid ${({ theme }) => theme.colors.brand.border};
  border-radius: 50%;
  border-top-color: transparent;
  border-bottom-color: transparent;
  animation: spin 1s linear infinite;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export function LoadingSpinner() {
  return <Spinner />;
}

export function LoadingSpinnerWrapper({ children }: { children: React.ReactNode }) {
  return <LoadingSpinnerContainer>{children}</LoadingSpinnerContainer>;
}
