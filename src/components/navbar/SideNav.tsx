import { useState } from 'react';
import { Box, IconButton, styled, useMediaQuery } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import { colors } from 'src/themes/colors';
import { customTheme } from 'src/themes/theme';
import logo from '../../assets/Actual-pixel-logo.svg';
import Dashboard from '../../assets/sidenavLogos/Dashboard.svg';
import ActiveDashboard from '../../assets/sidenavLogos/ActiveDashboard.svg';
import RiseTicket from '../../assets/sidenavLogos/RiseTicket.svg';
import ActiveRiseTicket from '../../assets/sidenavLogos/ActiveRiseTicket.svg';
import AddCircle from '../../assets/sidenavLogos/AddCircle.svg';
import ActiveAddCircle from '../../assets/sidenavLogos/ActiveAddCircle.svg';
import LogoutIcon from '../../assets/sidenavLogos/Logout.svg';
import AllAssets from '../../assets/sidenavLogos/AllAssets.svg';
import ActiveAllAssets from '../../assets/sidenavLogos/ActiveAllAssets.svg';
import AllEmployee from '../../assets/sidenavLogos/AllEmployees.svg';
import ActiveEmployeesImg from '../../assets/sidenavLogos/ActiveEmployeesImg.svg';
import Logout from 'src/pages/Logout/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import RaiseTicketModal from 'src/pages/IssuesRaised/RaiseTicket';

const StyledContainer = styled(Box)(() => ({
  position: 'fixed',
  top: 0,
  left: 0,
  height: '100vh',
  width: '20%',
  padding: '3% 2%',
  backgroundColor: colors.body.white,
  borderRight: '1px solid #E2E2E4',
}));

const LogoContainer = styled(Box)({
  height: '60px',
  width: '110px',
});

const StyledLogo = styled('img')({
  height: '100%',
  width: '100%',
});

const StyledList = styled('ul')({
  display: 'flex',
  flexDirection: 'column',
  listStyle: 'none',
  padding: 0,
  marginTop: '50px',
});

const StyledListItem = styled(NavLink)({
  display: 'flex',
  alignItems: 'center',
  fontFamily: customTheme.typography.fontFamily.main,
  fontWeight: customTheme.typography.fontWeights.medium,
  fontSize: customTheme.typography.fontSizes[10],
  color: colors.greys.grey,
  padding: '10px',
  borderRadius: '5px',
  textDecoration: 'none',

  '&.active': {
    fontWeight: customTheme.typography.fontWeights.semiBold,
    color: colors.primary.metallicViolet,
    borderLeft: `5px solid ${colors.primary.metallicViolet}`,
    background:
      'linear-gradient(90deg, rgba(89, 0, 179, 0.3) 0%, rgba(89, 0, 179, 0) 100%)',
  },

  '&:hover': {
    color: colors.primary.metallicViolet,
  },
});

const DropdownMenu = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  listStyle: 'none',
  padding: 0,
  backgroundColor: colors.body.white,
  border: '1px solid #E2E2E4',
  borderRadius: '5px',
  position: 'absolute',
  top: '50px',
  right: '10px',
});
const role = localStorage.getItem('role');
const links =
  role == 'user'
    ? [
        {
          name: 'Dashboard',
          path: '/dashboard',
          activeImg: ActiveDashboard,
          inactiveImg: Dashboard,
        },
        {
          name: 'Raise New Ticket',
          path: '/newTicket',
          activeImg: ActiveRiseTicket,
          inactiveImg: RiseTicket,
        },
        {
          name: 'Request New Asset',
          path: '/request-asset',
          activeImg: ActiveAddCircle,
          inactiveImg: AddCircle,
        },
        {
          name: 'logout',
          path: '/logout',
          activeImg: LogoutIcon,
          inactiveImg: LogoutIcon,
        },
      ]
    : [
        {
          name: 'Dashboard',
          path: '/admin/dashboard',
          activeImg: ActiveDashboard,
          inactiveImg: Dashboard,
        },
        {
          name: 'All Assets',
          path: '/admin/assets',
          activeImg: ActiveAllAssets,
          inactiveImg: AllAssets,
        },
        {
          name: 'All Employee',
          path: '/admin/all-employees',
          activeImg: ActiveEmployeesImg,
          inactiveImg: AllEmployee,
        },
        {
          name: 'Tickets Raised',
          path: '/admin/tickets',
          activeImg: ActiveRiseTicket,
          inactiveImg: RiseTicket,
        },
        {
          name: 'Add New Asset',
          path: '/admin/add-new-asset',
          activeImg: ActiveAddCircle,
          inactiveImg: AddCircle,
        },
        {
          name: 'logout',
          path: '/logout',
          activeImg: LogoutIcon,
          inactiveImg: LogoutIcon,
        },
      ];
function SideNav() {
  const [open, setOpen] = useState(false);
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const navigate = useNavigate();

  const [openLogout, setOpenLogout] = useState(false);
  const [openTicketModal, setOpenTicketModal] = useState(false);

  const handleOpen = (name: string) => {
    if (name === 'logout') {
      setOpenLogout(true);
    } else if (name === 'Raise New Ticket') {
      setOpenTicketModal(true);
    }
  };

  const handleClose = () => {
    navigate(-1);
    setOpenLogout(false);
  };

  const handleTicketClose = () => {
    navigate('/dashboard');
    setOpenTicketModal(false);
  };

  return (
    <>
      {isSmallScreen ? (
        <>
          <IconButton onClick={() => setOpen(!open)}>
            <MenuIcon />
          </IconButton>

          {open && (
            <DropdownMenu>
              {links.map((link) => (
                <StyledListItem
                  key={link.path}
                  to={link.path}
                  onClick={() => handleOpen(link.name)}
                >
                  {({ isActive }) => (
                    <>
                      <img
                        src={isActive ? link.activeImg : link.inactiveImg}
                        alt={link.name}
                        style={{ marginRight: '10px' }}
                      />
                      {link.name}
                    </>
                  )}
                </StyledListItem>
              ))}
            </DropdownMenu>
          )}
        </>
      ) : (
        <StyledContainer>
          <LogoContainer>
            <StyledLogo src={logo} alt="Logo" />
          </LogoContainer>
          <StyledList>
            {links.map((link) => (
              <StyledListItem
                key={link.path}
                to={link.path}
                onClick={() => handleOpen(link.name)}
              >
                {({ isActive }) => (
                  <>
                    <img
                      src={isActive ? link.activeImg : link.inactiveImg}
                      alt={link.name}
                      style={{ marginRight: '10px' }}
                    />
                    {link.name}
                  </>
                )}
              </StyledListItem>
            ))}
          </StyledList>
        </StyledContainer>
      )}
      {openLogout && <Logout open={openLogout} close={handleClose} />}
      {openTicketModal && (
        <RaiseTicketModal
          open={openTicketModal}
          handleClose={handleTicketClose}
        />
      )}
    </>
  );
}

export default SideNav;
