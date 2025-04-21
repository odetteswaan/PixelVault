import { Paper, styled, Typography } from '@mui/material';
import IssuesRaised from 'src/pages/IssuesRaised/IssuesRaised';
import { customTheme } from '../../../themes/theme';
import { colors } from '../../../themes/colors';
import CustomLink from 'src/components/actions/CustomLink';

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
      <CustomLink to="/issues-raised" text=" View All Assets Logs" />
    </MainContainer>
  );
}

export default RecentIssues;
