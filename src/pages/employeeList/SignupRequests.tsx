import {
  Table, TableBody, TableCell, TableHead, TableRow, Button, IconButton, Typography,
  Box,
  useTheme,
  useMediaQuery,
  Divider,
  AccordionDetails,
  AccordionSummary,
  Accordion
} from '@mui/material';
import { styled } from '@mui/material/styles';
import tickSquare from '../../assets/tickSquare.svg';
import closeSquare from '../../assets/closeSquare.svg';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { customTheme } from 'src/themes/theme';
import { colors } from 'src/themes/colors';


const TableContainer = styled('div')({
  border:"1px solid #ECECEC",
  borderRadius:"8px",
  padding:"1% 3%"
});
const StyledText = styled(Typography)(({theme})=>({
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
    width: '100%',
    textAlign: 'center',
    marginBottom: 1, 
    [theme.breakpoints.down('md')]: {
        justifyContent: 'center',
      },
}));
const StyledTableCell = styled(TableCell)({
  fontFamily: customTheme.typography.fontFamily.main,
  fontWeight: customTheme.typography.fontWeights.semiBold,
  fontSize: "18px",
  color: colors.shades.charcoalBlue,
});

const StyledValueCell = styled(TableCell)({
  fontFamily: customTheme.typography.fontFamily.main,
  fontWeight: customTheme.typography.fontWeights.default,
  fontSize: customTheme.typography.fontSizes[10],
  color: colors.shades.charcoalBlue,
});

const StyledName = styled(TableCell)({
 fontWeight: customTheme.typography.fontWeights.semiBold,
 color:colors.greys.slatGrey,
 fontSize:"14px",
 fontFamily:customTheme.typography.fontFamily.main,
});

const IconGroup = styled(Box)({
  display: 'flex',
  gap: '8px',
});

const StyledButton = styled(Button)({
  width:"90px",
  background:"#5900B326",
  textTransform:'none',
  color:"#5900B3"
});
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

const StyledIconGroup = styled(IconGroup)({
    display:"flex",
    alignItems:"center",
    justifyContent:"space-between",
    width:"92px"
});
const ActionClose = styled(Box)({
  background: "#28C76F26", 
  borderRadius: "8px" ,
});

const ActionOpen = styled(Box)({
  background: "#28C76F26", 
  borderRadius: "8px" ,
});
const StyledTableRow = styled(TableRow)({
  '&:last-child .MuiTableCell-root': {
    borderBottom: 'none',
  },
});

const StyledImage = styled('img')({
  width: '20px',
  height: '20px',
});
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
  fontWeight: customTheme.typography.fontWeights.semiBold,
  fontSize:"14px",
  color: colors.shades.charcoalBlue,
  textAlign: align || 'left',
  marginBottom: theme.spacing(1),
}));

const ValueTypography = styled(Typography)(({ align }) => ({
    fontWeight: customTheme.typography.fontWeights.default,
    color: colors.shades.charcoalBlue,
    textAlign: align || 'left',
  }));

const SignupRequests = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  const Employees = [
    { name: 'Saomars Furniture', email: 'Daniel_hamilton@aol.com', id: '10010', date: '22 May 2024', status: 'Approved' },
    { name: 'Kimberly Mostrangelo', email: 'k_pacheco@gmail.com', id: '10011', date: '26 May 2024', status: 'NotApproved' },
    { name: 'Rodger Struck', email: 'dennis6t@gmail.com', id: '10012', date: '27 May 2024', status: 'Approved' },
    { name: 'Mary Freund', email: 'Daniel_hamilton@aol.com', id: '10013', date: '04 Jun 2024', status: 'Approved' },
    { name: 'Rodger Struck', email: 'k_pacheco@gmail.com', id: '10014', date: '09 May 2024', status: 'NotApproved'},
    { name: 'Mary Freund', email: 'dennis16@gmail.com', id: '10015', date: '12 May 2024', status: 'NotApproved' },
  ];

  const renderStatusActions = (status: string) => {
    if (status == 'Approved') {
      return (
        <StyledButton variant="contained">
          Approved
        </StyledButton>
      );
    } else {
      return (
        <StyledIconGroup>
          <ActionClose>
            <IconButton color="error">
              <StyledImage src={closeSquare} alt="Cancel" />
            </IconButton>
          </ActionClose>
  
          <ActionOpen>
            <IconButton color="success">
              <StyledImage  src={tickSquare} alt="Check"/>
            </IconButton>
          </ActionOpen>
        </StyledIconGroup>
      );
    }
  };

  const LabelValue = ({
    label,
    value,
  }: {
    label: string;
    value: string;
    align?: 'left' | 'center' | 'right';
  }) => (
    <Box>
      <LabelTypography>{label}</LabelTypography>
      <ValueTypography>{value}</ValueTypography>
    </Box>
  );

  return (
    <TableContainer>
      <StyledText variant="subtitle1">
        Signup Request
      </StyledText>
      {isSmallScreen ? <>
          {Employees.map((employee, idx) => (
            <StyledAccordion key={idx} disableGutters elevation={0}>
              <StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
                <StyledName>
                  {employee.name}
                </StyledName>
              </StyledAccordionSummary>

              <StyledAccordionDetails>
                <StyledBox>
                  <LabelValue label="User Email ID" value={employee.email} />
                  <LabelValue
                    label="Employee ID"
                    value={employee.id}
                    align="right"
                  />
                </StyledBox>
                <Divider sx={{ my: 1 }} />
                <StyledBox>
                  <LabelValue label="Request Date" value={employee.date} />
                  {renderStatusActions(employee.status)}
                </StyledBox>
              </StyledAccordionDetails>
            </StyledAccordion>
          ))}
        </>
       : (
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell>No.</StyledTableCell>
            <StyledTableCell>Employee name</StyledTableCell>
            <StyledTableCell>User Email ID</StyledTableCell>
            <StyledTableCell>Employee ID</StyledTableCell>
            <StyledTableCell>Request Date</StyledTableCell>
            <StyledTableCell>Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Employees.map((row, i) => (
            <StyledTableRow key={i}>
              <StyledValueCell>{i + 1}</StyledValueCell>
              <StyledName sx={{fontSize:"16px"}}>{row.name}</StyledName>
              <StyledValueCell>{row.email}</StyledValueCell>
              <StyledValueCell>{row.id}</StyledValueCell>
              <StyledValueCell>{row.date}</StyledValueCell>
              <StyledValueCell>
                {renderStatusActions(row.status)}
              </StyledValueCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>)}
    </TableContainer>
  );
};

export default SignupRequests;
