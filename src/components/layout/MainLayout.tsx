import { Box, styled, useMediaQuery } from '@mui/material';
import SideNav from '../navbar/SideNav';
import { colors } from 'src/themes/colors';
import TopNav from '../navbar/TopNav';
import { Outlet } from 'react-router-dom';

const MainContainer = styled(Box)({
  display: 'flex',
  width: '100%',
  minHeight: '100vh',
});

const TopnavContainer = styled(Box)(({ theme }) => ({
  padding: '1% 3%',
  borderBottom: `1px solid ${colors.greys.lightGrey}`,
  position: 'sticky',
  top: 0,
  zIndex: '1000',
  background: '#FCFCFD',
  [theme.breakpoints.down('sm')]: {
    padding: '3%',
    marginBottom: '20px',
    borderBottom: `2px solid ${colors.greys.lightGrey}`,
  },
}));
const SidenavContainer = styled(Box)({
  width: '20%',
});

const ContentContainer = styled(Box)(({ theme }) => ({
  width: '80%',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
}));

function MainLayout() {
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  return (
    <MainContainer>
      {!isSmallScreen && (
        <SidenavContainer>
          <SideNav />
        </SidenavContainer>
      )}
      <ContentContainer>
        <TopnavContainer>
          <TopNav />
        </TopnavContainer>
        <Outlet />
      </ContentContainer>
    </MainContainer>
  );
}

export default MainLayout;
