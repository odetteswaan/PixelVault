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
import { baseUrl,employeeStatus } from 'src/config';
import { useEffect,useState } from 'react';
import { EmployeeStatus } from 'src/types/Employee.type';
import axios from 'axios';
import { token } from '../Admin/MockData';
import AcceptModal from '../Admin/AcceptModal';
import RejectModal from '../Admin/RejectModal';

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
  const[showAcceptModal,setModal]=useState(false)
  const[showRejectModal,setRejectModal]=useState(false)
  const [userId,setUserId]=useState<string|number>('')
const  formatDate=(inputDate: string):string=> {
  const date = new Date(inputDate);

  const options: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  };

  return date.toLocaleDateString('en-GB', options);
}
  const[pendingEmployess,setPendingEmployee]=useState<EmployeeStatus[]|null>(null)
useEffect(()=>{
axios.get(`${baseUrl}${employeeStatus('pending')}`,{
  headers:{
    token:token
  }
}).then(res=>{
  console.log(res.data)
  setPendingEmployee(res.data)
}).catch(()=>console.log('an error occured'))
},[])
  const renderStatusActions = (status: string,id:string|number) => {
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
              <StyledImage src={closeSquare} alt="Cancel" onClick={()=>{{setUserId(id);setRejectModal(true)}}}/>
            </IconButton>
          </ActionClose>
  
          <ActionOpen>
            <IconButton color="success" >
              <StyledImage  src={tickSquare} alt="Check" onClick={()=>{{setUserId(id);setModal(true)}}}/>
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
      {showAcceptModal&&<AcceptModal open={showAcceptModal} handleClose={()=>setModal(false)} userId={userId}/>}
      {showRejectModal&&<RejectModal open={showRejectModal} handleClose={()=>setRejectModal(false)} userId={userId}/>}
      {isSmallScreen ? <>
          {pendingEmployess?.map((employee, idx) => (
            <StyledAccordion key={idx} disableGutters elevation={0}>
              <StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
                <StyledName>
                  {employee.full_name}
                </StyledName>
              </StyledAccordionSummary>

              <StyledAccordionDetails>
                <StyledBox>
                  <LabelValue label="User Email ID" value={employee.official_email} />
                  <LabelValue
                    label="Employee ID"
                    value={employee.emp_id}
                    align="right"
                  />
                </StyledBox>
                <Divider sx={{ my: 1 }} />
                <StyledBox>
                  <LabelValue label="Request Date" value={formatDate(employee.created_at)} />
                  {renderStatusActions(employee.status,employee.id)}
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
          {pendingEmployess?.map((row, i) => (
            <StyledTableRow key={i}>
              <StyledValueCell>{i + 1}</StyledValueCell>
              <StyledName sx={{fontSize:"16px"}}>{row.full_name}</StyledName>
              <StyledValueCell>{row.official_email}</StyledValueCell>
              <StyledValueCell>{row.emp_id}</StyledValueCell>
              <StyledValueCell>{formatDate(row.created_at)}</StyledValueCell>
              <StyledValueCell>
                {renderStatusActions(row.status,row.id)}
              </StyledValueCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>)}
    </TableContainer>
  );
};

export default SignupRequests;
