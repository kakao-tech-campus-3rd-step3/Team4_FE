import { CTAButton, CTAWrap } from '../Missions.styles';

const CTABar = ({ onNext }: { onNext: () => void }) => {
  return (
    <CTAWrap>
      <CTAButton onClick={onNext}>다음</CTAButton>
    </CTAWrap>
  );
};

export default CTABar;
