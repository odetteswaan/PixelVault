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
const TopNavContainer = styled(Box)(({ theme }) => ({
  borderBottom: '1px solid #ECECEC',
  padding: '1% 3%',
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    padding: '3%',
    marginBottom: '20px',
  },
}));

const ContentWrapper = styled(Box)(({ theme }) => ({
  padding: customTheme.whitespace.spacings[16],
  [theme.breakpoints.down('sm')]: {
    padding: '0',
  },
}));

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
