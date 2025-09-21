import { CTAButton, CTAWrap } from '../Missions.styles';

type CTABarProps = {
  onNext: () => void;
};

const CTABar = ({ onNext }: CTABarProps) => {
  return (
    <CTAWrap>
      <CTAButton onClick={onNext}>다음</CTAButton>
    </CTAWrap>
  );
};

export default CTABar;
