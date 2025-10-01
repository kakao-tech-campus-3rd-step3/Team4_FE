import { ProgressBar, ProgressFill, ProgressWrapper } from './Test.styles';

type TestProgressBarProps = {
  progressPercent: number;
};

function TestProgressBar({ progressPercent }: TestProgressBarProps) {
  return (
    <ProgressWrapper>
      <ProgressBar>
        <ProgressFill percent={progressPercent} />
      </ProgressBar>
    </ProgressWrapper>
  );
}

export default TestProgressBar;
