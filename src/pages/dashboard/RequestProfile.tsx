import TopNav from 'src/components/navbar/TopNav';
import Profile from './Profile';
import { Box, Typography, styled } from '@mui/material';
import { colors } from 'src/themes/colors';
import { customTheme } from 'src/themes/theme';
import Logo from '../../assets/Actual-pixel-logo.svg';

const MainContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
}));
const HeaderContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 3%',
  borderBottom: `1px solid ${colors.greys.lightGrey}`,
  height: '100px',
  [theme.breakpoints.down('sm')]: {
    padding: '3%',
    height: '150px',
    borderBottom: `2px solid ${colors.greys.lightGrey}`,
  },
}));

const LogoImage = styled('img')(({ theme }) => ({
  width: '100px',
  height: '50px',
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

const ContentBox = styled(Box)(({ theme }) => ({
  width: '80%',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
}));

const WelcomeContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: customTheme.whitespace.spacings[12],
  '& .welcome-title': {
    fontSize: customTheme.typography.fontSizes[20],
    fontFamily: customTheme.typography.fontFamily.main,
    color: colors.primary.metallicViolet,
    fontWeight: customTheme.typography.fontWeights.semiBold,
  },
  '& .welcome-message': {
    fontSize: customTheme.typography.fontSizes[16],
    fontFamily: customTheme.typography.fontFamily.main,
    color: colors.body.lightGrey,
  },
});

const StyledContainer = styled(Box)({
  padding: '3% 10%',
});

function RequestProfile() {
  return (
    <MainContainer>
      <HeaderContainer>
        <LogoImage src={Logo} alt="Logo" />
        <ContentBox>
          <TopNav />
        </ContentBox>
      </HeaderContainer>
      <WelcomeContainer>
        <Typography className="welcome-title">
          Welcome to Pixel Vault!
        </Typography>
        <Typography className="welcome-message">
          Your account has been created and sent for the Admin approval.
        </Typography>
      </WelcomeContainer>
      <StyledContainer>
        <Profile />
      </StyledContainer>
    </MainContainer>
  );
}
export default RequestProfile;
