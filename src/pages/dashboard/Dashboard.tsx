import { Box, styled } from '@mui/material';
import TopNav from '../../components/navbar/TopNav';
import SideNav from '../../components/navbar/SideNav';
import Profile from './Profile';
import { colors } from 'src/themes/colors';
import { theme } from 'src/themes/theme';

const DashboardContainer = styled(Box)({
  display: 'flex',
  height: '100vh',
  width: '100vw',
});

const SideNavContainer = styled(Box)({
  width: '20%',
});

const MainContent = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  width: '80%',
  border: `1px solid ${colors.primary.electricIndigo}`,
});
const TopNavContainer = styled(Box)({
  height: '15%',
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
