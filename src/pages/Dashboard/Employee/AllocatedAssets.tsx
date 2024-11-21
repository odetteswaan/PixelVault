import { Paper, styled, Typography } from '@mui/material';
import { customTheme } from '../../../themes/theme';
import { colors } from '../../../themes/colors';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AssetAllocationUI from 'src/pages/AssetAllocationLogs/AssetAllocation';
import { Link } from 'react-router-dom';

const MainContainer = styled(Paper)(({ theme }) => ({
  border: '1px solid #ECECEC',
  background: '#FCFCFD',
  borderRadius: '5px',
  width: '40%',
  padding: '10px',
  height: '100%',
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
    assetName: 'Mac',
    date: 'Apr 26, 2024',
    query: 'sdbsncdsndb',
    status: 'Returned',
  },
  {
    assetName: 'Dell Laptop',
    date: 'Apr 20, 2024',
    query: 'sdbsncdsndb',
    status: 'Allocated',
  },
];

const headings = ['Asset Name', 'Status', 'Date'];

function AllocatedAssets() {
  return (
    <MainContainer>
      <Heading>Asset Allocation Logs</Heading>
      <AssetAllocationUI data={data} headings={headings} />
      <StyledLink to="/Assets">
        View All Assets Logs
        <ArrowForwardIcon />
      </StyledLink>
    </MainContainer>
  );
}

export default AllocatedAssets;
