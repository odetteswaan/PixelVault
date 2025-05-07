import {
  Box,
  Typography,
  Card,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { colors } from 'src/themes/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import CustomLink from 'src/components/actions/CustomLink';
import SectionHeading from 'src/components/adminDashboard/SectionHeading';

const CardContainer = styled(Card)(({ theme }) => ({
  backgroundColor: colors.primary.grayishWhite,
  borderRadius: '8px',
  padding: theme.spacing(2),
  width: '50%',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    width: '100%',
    borderRadius: 'none',
    padding: 0,
    border: 'none',
    backgroundColor: 'transparent',
    boxShadow: 'none',
  },
}));

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  border: '1px solid #e0e0e0',
  borderRadius: '8px',
  backgroundColor: '#fff',
  '&::before': {
    display: 'none',
  },
}));

const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  minHeight: 49,
  '& .MuiAccordionSummary-content': {
    margin: 0,
  },
}));

const StyledAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
}));

const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  marginBottom: theme.spacing(1),
}));

const LabelTypography = styled(Typography)(({ theme, align }) => ({
  fontWeight: 'bold',
  color: '#555',
  textAlign: align || 'left',
  marginBottom: theme.spacing(1),
}));

const ValueTypography = styled(Typography)(({ align }) => ({
  fontWeight: 500,
  textAlign: align || 'left',
}));
const StyledTableContainer = styled(TableContainer)({
  boxShadow: 'none',
});
const StyledDivider = styled(Divider)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  display: 'block',
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
}));
const EmployeeName = styled(Typography)({
  fontWeight: 500,
});

const allocatedAssets = [
  {
    no: 1,
    employee: 'Seamans Furniture',
    device: 'MacBook Pro',
    date: '22 May 2024',
    id: '100010',
  },
  {
    no: 2,
    employee: 'Kimberly Mastrangelo',
    device: 'iPhone 13',
    date: '15 May 2024',
    id: '100011',
  },
  {
    no: 3,
    employee: 'Mary Freund',
    device: 'HP Pavilion',
    date: '19 May 2024',
    id: '100012',
  },
  {
    no: 4,
    employee: 'Rodger Struck',
    device: 'MacBook Air',
    date: '20 May 2024',
    id: '100013',
  },
  {
    no: 5,
    employee: 'Mary Freund',
    device: 'Samsung Galaxy S21',
    date: '21 May 2024',
    id: '100014',
  },
];

const LabelValue = ({
  label,
  value,
}: {
  label: string;
  value: string;
  align?: 'left' | 'center' | 'right';
}) => (
  <Box>
    <LabelTypography variant="body2">{label}</LabelTypography>
    <ValueTypography variant="body2">{value}</ValueTypography>
  </Box>
);

const RecentAllocatedAssets = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <CardContainer>
      <SectionHeading title="Recent Assets Allocated" />
      <StyledDivider />
      {isSmallScreen ? (
        <>
          {allocatedAssets.map((asset, idx) => (
            <StyledAccordion key={idx} disableGutters elevation={0}>
              <StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
                <EmployeeName>
                  {asset.employee}
                </EmployeeName>
              </StyledAccordionSummary>

              <StyledAccordionDetails>
                <StyledBox>
                  <LabelValue label="Device" value={asset.device} />
                  <LabelValue
                    label="Employee ID"
                    value={asset.id}
                    align="right"
                  />
                </StyledBox>
                <Divider sx={{ my: 1 }} />
                <Box>
                  <LabelValue label="Date" value={asset.date} />
                </Box>
              </StyledAccordionDetails>
            </StyledAccordion>
          ))}
        </>
      ) : (
        <StyledTableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>No.</TableCell>
                <TableCell>Employee Name</TableCell>
                <TableCell>Device</TableCell>
                <TableCell>Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allocatedAssets.map((asset) => (
                <TableRow key={asset.no}>
                  <TableCell>{asset.no}</TableCell>
                  <TableCell>{asset.employee}</TableCell>
                  <TableCell>{asset.device}</TableCell>
                  <TableCell>{asset.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </StyledTableContainer>
      )}

      <Box textAlign="center" mt={2}>
        <CustomLink to="/abc" text="View All Assets Allocated" />
      </Box>
    </CardContainer>
  );
};

export default RecentAllocatedAssets;
