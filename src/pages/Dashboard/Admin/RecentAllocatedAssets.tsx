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
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { colors } from 'src/themes/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import CustomLink from 'src/components/actions/CustomLink';
import SectionHeading from 'src/components/adminDashboard/SectionHeading';
import { useSelector } from 'react-redux';
import { RootState } from 'src/redux/store';

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


const LabelValue = ({
  label,
  value,
}: {
  label: string;
  value: string | number | null;
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
  const dashboardStatus = useSelector((state: RootState) => state.admin.data);
  const RecentAllocated = dashboardStatus?.recent_assets_allocated;
  return (
    <CardContainer>
      <SectionHeading title="Recent Assets Allocated" />
      <StyledDivider />
      {isSmallScreen ? (
        <>
          {RecentAllocated && RecentAllocated.map((asset, idx) => (
            <StyledAccordion key={idx} disableGutters elevation={0}>
              <StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
                <EmployeeName>
                  {asset?.user?.full_name}
                </EmployeeName>
              </StyledAccordionSummary>

              <StyledAccordionDetails>
                <StyledBox>
                  <LabelValue label="Device" value={asset.asset_type} />
                  <LabelValue
                    label="Employee ID"
                    value={asset.id}
                    align="right"
                  />
                </StyledBox>
                <Divider sx={{ my: 1 }} />
                <Box>
                  <LabelValue label="Date" value={asset.allocation_date} />
                </Box>
              </StyledAccordionDetails>
            </StyledAccordion>
          ))}
        </>
      ) : (
        <StyledTableContainer>
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
              {RecentAllocated && RecentAllocated.map((asset) => (
                <TableRow key={asset.id}>
                  <TableCell>{asset.id}</TableCell>
                  <TableCell>{asset?.user?.full_name}</TableCell>
                  <TableCell>{asset.asset_type}</TableCell>
                  <TableCell>{asset.allocation_date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </StyledTableContainer>
      )}

      <Box textAlign="center" mt={2}>
        <CustomLink to="/admin/assets" text="View All Assets Allocated" />
      </Box>
    </CardContainer>
  );
};

export default RecentAllocatedAssets;
