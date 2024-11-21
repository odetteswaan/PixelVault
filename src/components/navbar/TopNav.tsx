import { Avatar, Box, Typography, useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';
import { colors } from 'src/themes/colors';
import { customTheme } from 'src/themes/theme';
import SideNav from './SideNav';
import { useNavigate } from 'react-router-dom';
import Search from './Search';
import NotificationDropdown from './NotificationDropdown';

const TopNavContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  height: '15vh',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column-reverse',
    height: '100%',
    gap: '20px',
  },
}));

const LeftSection = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
});

const RightSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  width: '400px',
  maxWidth: '100%',
  justifyContent: 'space-between',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    position: 'relative',
  },
}));

const Header = styled(Typography)({
  color: colors.headers.charcoalBlack,
  fontFamily: customTheme.typography.fontFamily.main,
  fontSize: customTheme.typography.fontSizes[12],
  fontWeight: customTheme.typography.fontWeights.bold,
});

const SubHeading = styled(Typography)({
  fontFamily: customTheme.typography.fontFamily.main,
  fontSize: '13px',
  color: colors.greys.grey,
});

const StyledAvathar = styled(Avatar)({
  cursor: 'pointer',
});

function TopNav() {
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const navigate = useNavigate();

  const getGreeting = () => {
    const currentHour = new Date().getHours();
    if (currentHour >= 0 && currentHour < 12) {
      return 'Good Morning';
    } else if (currentHour >= 12 && currentHour < 18) {
      return 'Good Afternoon';
    } else {
      return 'Good Evening';
    }
  };

  const handleProfileClick = () => {
    navigate('/user-profile');
  };
  return (
    <TopNavContainer>
      <LeftSection>
        <Header>{`${getGreeting()}, Camero 🤩`}</Header>
        <SubHeading>
          It’s a great day to optimise your asset management for greater
          efficiency and growth.
        </SubHeading>
      </LeftSection>

      <RightSection>
        <Search />
        <NotificationDropdown />
        <StyledAvathar>
          <Avatar onClick={handleProfileClick} />
        </StyledAvathar>
        {isSmallScreen && <SideNav />}
      </RightSection>
    </TopNavContainer>
  );
}

export default TopNav;
