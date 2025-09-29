import { ProgressBar, ProgressFill, ProgressWrapper } from './Test.styles';

function TestProgressBar({ progressPercent }: { progressPercent: number }) {
  return (
    <ProgressWrapper>
      <ProgressBar>
        <ProgressFill percent={progressPercent} />
      </ProgressBar>
    </ProgressWrapper>
  );
}

export default TestProgressBar;
