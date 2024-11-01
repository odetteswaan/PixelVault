import { Box, styled } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { colors } from 'src/themes/colors';
import { customTheme } from 'src/themes/theme';
import logo from '../../assets/Actual-pixel-logo.svg';
import Dashboard from '../../assets/sidenavLogos/Dashboard.svg';
import RiseTicket from '../../assets/sidenavLogos/RiseTicket.svg';
import NewAsset from '../../assets/sidenavLogos/NewAsset.svg';
import Logout from '../../assets/sidenavLogos/Logout.svg';

const StyledContainer = styled(Box)({
  borderRight: '1px solid #E2E2E4',
  height: 'auto',
  minHeight: '100vh',
  padding: '10%',
  backgroundColor: 'colors.body.white',
});

const LogoContainer = styled(Box)({
  height: '60px',
  width: '120px',
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

const links = [
  { name: 'Dashboard', path: '/dashboard', img: Dashboard },
  { name: 'Raise New Ticket', path: '/new-ticket', img: RiseTicket },
  { name: 'Request New Asset', path: '/request-asset', img: NewAsset },
  { name: 'Logout', path: '/logout', img: Logout },
];

function SideNav() {
  return (
    <StyledContainer>
      <LogoContainer>
        <StyledLogo src={logo} alt="Logo" />
      </LogoContainer>
      <StyledList>
        {links.map((link) => (
          <StyledListItem key={link.path} to={link.path}>
            <img
              src={link.img}
              alt={link.name}
              style={{ marginRight: '10px' }}
            />
            {link.name}
          </StyledListItem>
        ))}
      </StyledList>
    </StyledContainer>
  );
}

export default SideNav;
