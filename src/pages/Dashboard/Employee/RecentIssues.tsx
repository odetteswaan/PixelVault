import { Paper, styled, Typography } from '@mui/material';
import IssuesRaised from 'src/pages/IssuesRaised/IssuesRaised';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { customTheme } from '../../../themes/theme';
import { colors } from '../../../themes/colors';

const MainContainer = styled(Paper)(({ theme }) => ({
  border: `1px solid ${colors.greys.lightGrey}`,
  borderRadius: '5px',
  height: '100%',
  width: '55%',
  padding: '10px',
  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
}));

const Heading = styled(Typography)({
  color: colors.headers.charcoalBlack,
  fontSize: customTheme.typography.fontSizes[12],
  fontFamily: customTheme.typography.fontFamily.main,
  fontWeight: customTheme.typography.fontWeights.semiBold,
  borderBottom: `1px solid ${colors.greys.frostedGrey}`,
  padding: '10px 0',
});

const StyledLink = styled(Link)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '15px',
  color: colors.primary.metallicViolet,
  cursor: 'pointer',
  fontWeight: customTheme.typography.fontWeights.semiBold,
  fontSize: customTheme.typography.fontSizes[10],
  fontFamily: customTheme.typography.fontFamily.main,
  textDecoration: 'none',
  '&:hover': {
    color: colors.primary.metallicViolet,
  },
});

const data = [
  {
    assetName: 'MacBook pro',
    date: 'April 26, 2024',
    query: 'sdbsncdsndb',
    status: 'In Progress',
  },
  {
    assetName: 'Samsung tab',
    date: 'March 15, 2024',
    query: 'tjwejewa for of ternmsbndsfnb',
    status: 'Resolved',
  },
];

function RecentIssues() {
  return (
    <MainContainer>
      <Heading>Issues Raised For Asset</Heading>
      <IssuesRaised issues={data} />
      <StyledLink to="/issues-raised">
        View All Raised Issues
        <ArrowForwardIcon />
      </StyledLink>
    </MainContainer>
  );
}

export default RecentIssues;
