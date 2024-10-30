import { Box, styled, useMediaQuery } from '@mui/material';
import TopNav from '../../components/navbar/TopNav';
import SideNav from '../../components/navbar/SideNav';
import Profile from './Profile';
import { customTheme } from 'src/themes/theme';
import { colors } from 'src/themes/colors';

const UserProfileContainer = styled(Box)({
  display: 'flex',
  height: '100%',
  minHeight: '100vh',
  width: '100%',
});

const SideNavContainer = styled(Box)({
  width: '20%',
});

const MainContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '80%',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
}));
const TopNavContainer = styled(Box)(({ theme }) => ({
  borderBottom: `1px solid ${colors.greys.lightGrey}`,
  padding: '1% 3%',
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    padding: '3%',
    marginBottom: '20px',
    borderBottom: `2px solid ${colors.greys.lightGrey}`,
  },
}));

const ContentWrapper = styled(Box)(({ theme }) => ({
  padding: customTheme.whitespace.spacings[16],
  [theme.breakpoints.down('sm')]: {
    padding: '0',
  },
}));

function UserProfile() {
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  return (
    <UserProfileContainer>
      {!isSmallScreen && (
        <SideNavContainer>
          <SideNav />
        </SideNavContainer>
      )}
      <MainContent>
        <TopNavContainer>
          <TopNav />
        </TopNavContainer>

        <ContentWrapper>
          <Profile />
        </ContentWrapper>
      </MainContent>
    </UserProfileContainer>
  );
}

export default UserProfile;
