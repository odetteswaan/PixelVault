import { Avatar, Box, Typography, useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';
import { colors } from 'src/themes/colors';
import { customTheme } from 'src/themes/theme';
import SideNav from './SideNav';
import { useLocation, useNavigate } from 'react-router-dom';
import Search from './Search';
import NotificationDropdown from './NotificationDropdown';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { RootState } from 'src/redux/store';
import { useSelector } from 'react-redux';

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
  flexDirection: 'row',
  alignItems: 'center',
  gap: '10px',
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
const BackButton = styled(KeyboardBackspaceIcon)(() => ({
  border: `1px solid ${colors.greys.lightGrey}`,
  borderRadius: '50%',
  padding: '10px',
  width: '50px',
  height: '50px',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: colors.primary.grayishWhite,
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
  const location = useLocation();
  const userDetails = useSelector((state: RootState) => state.user.userDetails);
  const profile = userDetails?.profile_image_url

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

  const getHeaderAndSubheading = () => {
    switch (location.pathname) {
      case '/issues-raised':
        return {
          header: 'Issues Raised ',
          showBackButton: true,
        };
      case '/Assets':
        return {
          header: 'Asset Allocation Logs',
          showBackButton: true,
        };
      case '/request-asset':
        return {
          header: 'New Asset Request',
          showBackButton: true,
        };
      case '/admin/all-employees':
        return {
          header: 'All Employees',
          showBackButton: true,
        };
      case '/admin/assets':
        return {
          header: 'All Assets',
          showBackButton: true,
        };
      case '/admin/add-new-asset':
        return {
          header: 'Add New Asset',
          showBackButton: true,
        };
      case '/admin/tickets':
        return {
          header: 'Raised Tickets',
          showBackButton: true,
        };
      case '/admin/ticketsWarranty':
        return {
          header: 'Warranty Expiring',
          showBackButton: true,
        };
      case '/admin/employee-asset-allocation':
        return {
          header: 'Emlployee Asset Allocations',
          showBackButton: true,
        };
      default:
        return {
          header: `${getGreeting()}, ${userDetails?.full_name} 🤩`,
          showBackButton: false,
        };
    }
  };

  const { header, showBackButton } = getHeaderAndSubheading();

  const handleProfileClick = () => {
    const role = localStorage.getItem('role');
    navigate(`/${role}/admin-profile`);
  };
  const handleGoBack = () => {
    navigate(-1);
  };
  const value = localStorage.getItem('role');

  return (
    <TopNavContainer>
      <LeftSection>
        {showBackButton && <BackButton onClick={handleGoBack} />}
        <Box>
          <Header> {header}</Header>
          <SubHeading>
            {value === 'user'
              ? "It’s a great day to optimise your asset management for greater efficiency and growth."
              : "It’s a great day to improve your sales management for better growth."}
          </SubHeading>
        </Box>
      </LeftSection>

      <RightSection>
        <Search />
        <NotificationDropdown />
        <StyledAvathar>
          <Avatar onClick={handleProfileClick} src={`${profile}`} />
        </StyledAvathar>
        {isSmallScreen && <SideNav />}
      </RightSection>
    </TopNavContainer>
  );
}

export default TopNav;
