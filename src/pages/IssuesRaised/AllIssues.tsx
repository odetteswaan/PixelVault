import { styled, Box } from '@mui/material';
import IssuesRaised from './IssuesRaised';
import { colors } from 'src/themes/colors';

const StyledPaper = styled(Box)(({ theme }) => ({
  padding: '0 5%',
  border: `1px solid ${colors.greys.lightGrey}`,
  margin: '3% 10%',
  borderRadius: '5px',
  [theme.breakpoints.down('md')]: {
    margin: '2%',
    padding: '0%',
    border: 'none',
  },
}));

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
  {
    assetName: 'Samsung tab',
    date: 'March 15, 2024',
    query: 'tjwejewa for of ternmsbndsfnb',
    status: 'Resolved',
  },
  {
    assetName: 'Samsung tab',
    date: 'March 15, 2024',
    query: 'tjwejewa for of ternmsbndsfnb',
    status: 'Resolved',
  },
  {
    assetName: 'Samsung tab',
    date: 'March 15, 2024',
    query: 'tjwejewa for of ternmsbndsfnb',
    status: 'Resolved',
  },
];

function AllIssues() {
  return (
    <StyledPaper>
      <IssuesRaised issues={data} />
    </StyledPaper>
  );
}
export default AllIssues;
