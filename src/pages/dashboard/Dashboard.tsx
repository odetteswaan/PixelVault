import { Box, styled } from '@mui/material';
import TopNav from '../../components/navbar/TopNav';
import SideNav from '../../components/navbar/SideNav';
import Profile from './Profile';
import { theme } from 'src/themes/theme';

const DashboardContainer = styled(Box)({
  display: 'flex',
  height: 'auto',
  minHeight: '100%',
  width: '100%',
});

const SideNavContainer = styled(Box)({
  width: '20%',
});

const MainContent = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  width: '80%',
});
const TopNavContainer = styled(Box)({
  borderBottom: '1px solid #ECECEC',
  padding: '1% 3%',
  display: 'flex',
  alignItems: 'center',
});

const ContentWrapper = styled(Box)({
  padding: theme.whitespace.spacings[16],
});

function Dashboard() {
  return (
    <DashboardContainer>
      <SideNavContainer>
        <SideNav />
      </SideNavContainer>
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
