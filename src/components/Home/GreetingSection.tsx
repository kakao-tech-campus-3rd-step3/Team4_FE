import { Typography } from '@/components/common/Typography';
import { GreetingSection as StyledGreetingSection } from './Home.styles';

export function GreetingSection() {
  return (
    <StyledGreetingSection>
      <Typography variant="title1Regular" color="gray900">
        안녕하세요!
      </Typography>
      <Typography variant="title1Regular" color="gray900">
        오늘 기분은 어떠신가요?
      </Typography>
    </StyledGreetingSection>
  );
}
