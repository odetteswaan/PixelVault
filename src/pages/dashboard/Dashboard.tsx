import { Box, styled, useMediaQuery } from '@mui/material';
import TopNav from '../../components/navbar/TopNav';
import SideNav from '../../components/navbar/SideNav';
import Profile from './Profile';
import { customTheme } from 'src/themes/theme';

const DashboardContainer = styled(Box)({
  display: 'flex',
  height: 'auto',
  minHeight: '100%',
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
const TopNavContainer = styled(Box)({
  borderBottom: '1px solid #ECECEC',
  padding: '1% 3%',
  display: 'flex',
  alignItems: 'center',
});

const ContentWrapper = styled(Box)({
  padding: customTheme.whitespace.spacings[16],
});

function Dashboard() {
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  return (
    <DashboardContainer>
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
    </DashboardContainer>
  );
}

export default Dashboard;
