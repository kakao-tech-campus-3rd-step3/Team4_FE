import { Typography } from '@/components/common/Typography';
import { useNavigate } from 'react-router-dom';
import { HeaderSection, BackButton, BackIcon } from '@/components/Chat/Chat.styles';

export const ChatHeader = () => {
  const navigate = useNavigate();

  return (
    <HeaderSection>
      <BackButton
        onClick={() => {
          navigate('/character');
        }}
      >
        <BackIcon>←</BackIcon>
        <Typography variant="body2Regular" color="gray900">
          뒤로가기
        </Typography>
      </BackButton>
    </HeaderSection>
  );
};
