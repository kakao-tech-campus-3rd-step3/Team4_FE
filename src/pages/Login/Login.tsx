import { Typography } from '../../components/common/Typography';
import * as S from './Login.styles';

function Login() {
  const handleGoogleLogin = () => {
    // TODO: Implement Google OAuth login
  };

  return (
    <S.Container>
      <S.ContentWrapper>
        <S.TitleSection>
          <S.AppTitle>냥토닥</S.AppTitle>
          <Typography variant="title1Regular" color="default">
            멘탈케어부터 취업까지
          </Typography>
        </S.TitleSection>

        <S.CharacterImage
          src={`${import.meta.env.BASE_URL}assets/login/happy2.png`}
          alt="login-bg"
        />

        <S.BottomSection>
          <S.LoginButton onClick={handleGoogleLogin}>
            <S.ButtonContent>
              <S.GoogleIcon
                src={`${import.meta.env.BASE_URL}assets/login/google-logo.png`}
                alt="google"
              />
              <Typography variant="body2Regular" color="gray400">
                구글로 계속하기
              </Typography>
            </S.ButtonContent>
          </S.LoginButton>

          <S.TermsSection>
            <Typography variant="label2Regular" color="brown500">
              계속 진행하면 냥토닥의 서비스 약관 및 개인 정보 보호 정책에 동의하는 것으로
              간주됩니다.
            </Typography>
          </S.TermsSection>
        </S.BottomSection>
      </S.ContentWrapper>
    </S.Container>
  );
}

export default Login;
