import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Card,
  CardContent,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { colors } from '../../themes/colors';
import { customTheme } from '../../themes/theme';
import { styled } from '@mui/system';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const StyledCard = styled(Card)(({ theme }) => ({
  border: `1px solid ${colors.greys.lightGrey}`,
  borderRadius: '8px',
  width: '50%',
  boxShadow: 'none',
  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
}));

const StatusChip = styled(Box)<{ status: string }>(({ status }) => ({
  backgroundColor: status === 'Allocated' ? '#E0D8FC' : '#FCE2E2',
  color: status === 'Allocated' ? '#8B5CF6' : '#D14343',
  padding: '4px 12px',
  borderRadius: '8px',
  display: 'inline-block',
  fontSize: '12px',
  fontWeight: 500,
}));

const StyledTableHead = styled(TableHead)({
  '& th': {
    fontWeight: customTheme.typography.fontWeights.semiBold,
    color: '#2B2B2B',
    fontSize: '14px',
  },
});
const StyledHeading = styled(Typography)({
  fontFamily: customTheme.typography.fontFamily.main,
  fontSize: customTheme.typography.fontSizes[10],
  fontWeight: customTheme.typography.fontWeights.semiBold,
  color: colors.headers.charcoalBlack,
  marginBottom: '5px',
});
const StyledTable = styled(Table)({
  borderCollapse: 'separate',
  borderSpacing: '0 10px',
});
const StyledTableRow = styled(TableRow)({
  backgroundColor: '#fff',
  borderRadius: '8px',
  boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.05)',
});

const StyledTableCell = styled(TableCell)({
  fontFamily: customTheme.typography.fontFamily.main,
  fontWeight: customTheme.typography.fontWeights.semiBold,
  fontSize: '16px',
  color: colors.greys.stormGrey,
});
const ResponsiveTableCell = styled(StyledTableCell)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

const StyledValueCell = styled(TableCell)({
  fontFamily: customTheme.typography.fontFamily.main,
  fontWeight: customTheme.typography.fontWeights.medium,
  fontSize: customTheme.typography.fontSizes[10],
  color: colors.greys.stormGrey,
});

const ResponsiveTablevalue = styled(StyledValueCell)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

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
    id: 1,
    name: 'MacBook Pro',
    status: 'Allocated',
    date: '20 May 2024',
  },
  {
    id: 2,
    name: 'iPhone 14 128 GB',
    status: 'Returned',
    date: '12 May 2024',
  },
  {
    id: 3,
    name: 'Samsung Tablet',
    status: 'Returned',
    date: '27 May 2024',
  },
];

const AssetDetails = () => {
  return (
    <StyledCard>
      <CardContent>
        <StyledHeading>All Assets Allocated</StyledHeading>
        <StyledTable>
          <StyledTableHead>
            <StyledTableRow>
              <StyledTableCell>No.</StyledTableCell>
              <StyledTableCell>Asset Name</StyledTableCell>
              <StyledTableCell>Status</StyledTableCell>
              <ResponsiveTableCell>Date</ResponsiveTableCell>
            </StyledTableRow>
          </StyledTableHead>
          <TableBody>
            {data.map((item) => (
              <StyledTableRow key={item.id}>
                <StyledValueCell>{item.id}</StyledValueCell>
                <StyledValueCell>{item.name}</StyledValueCell>
                <StyledValueCell>
                  <StatusChip status={item.status}>{item.status}</StatusChip>
                </StyledValueCell>
                <ResponsiveTablevalue>{item.date}</ResponsiveTablevalue>
              </StyledTableRow>
            ))}
          </TableBody>
        </StyledTable>
        <StyledLink to="/issues-raised">
          View All Raised Issues
          <ArrowForwardIcon />
        </StyledLink>
      </CardContent>
    </StyledCard>
  );
};

export default AssetDetails;
