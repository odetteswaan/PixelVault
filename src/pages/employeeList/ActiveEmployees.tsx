import { useState } from "react";
import { Accordion, AccordionDetails, AccordionSummary, Box, Divider, IconButton, Menu, MenuItem, Table, TableBody, TableCell, TableHead, TableRow, Typography, useMediaQuery, useTheme } from "@mui/material";
import Pagination from "src/components/pagination/Pagination";
import { styled } from '@mui/material/styles';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AllocateAssetModal from "./AllocateAsset";
import { customTheme } from "src/themes/theme";
import { colors } from "src/themes/colors";


const EmployeeWrapper = styled(Box)({
   border:"1px solid #ECECEC",
   borderRadius:"8px",
   padding:"1% 3%",
});
const StyledTableCell = styled(TableCell)({
  fontFamily: customTheme.typography.fontFamily.main,
  fontWeight: customTheme.typography.fontWeights.semiBold,
  fontSize: "18px",
  color: colors.shades.charcoalBlue,
});
const StyledName = styled(TableCell)({
  fontWeight: customTheme.typography.fontWeights.semiBold,
  color:colors.greys.slatGrey,
  fontSize:"14px",
  fontFamily:customTheme.typography.fontFamily.main,
 });

const StyledValueCell = styled(TableCell)({
  fontFamily: customTheme.typography.fontFamily.main,
  fontWeight: customTheme.typography.fontWeights.default,
  fontSize: customTheme.typography.fontSizes[10],
  color: colors.shades.charcoalBlue,
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
const StyledIconButton = styled(IconButton)({
   width: '40px',
  height: '40px',
  background: '#5900B326',
  color: '#5900B3',
  borderRadius: '8px',
  '&:hover': {
    background: '#5900B326',
    color: '#5900B3',
  },
  '&:active': {
    background: '#5900B326',
    color: '#5900B3',
  },
  '&:focus': {
    background: '#5900B326',
    color: '#5900B3',
  },
})
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

 const CustomMenu = styled(Menu)(() => ({
   '& .MuiPaper-root': {
     borderRadius: '12px',
     boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
     marginTop: '8px',
     minWidth: '180px',
     overflow: 'visible',
     border:"2px solid #8D939A59",
     padding: '4px 0',
     '&::before': {
       content: '""',
       display: 'block',
       position: 'absolute',
       top: 0,
       right: 14,
       width: 10,
       height: 10,
       transform: 'translateY(-50%) rotate(45deg)',
       zIndex: 0,
       boxShadow: '-1px -1px 1px rgba(0,0,0,0.05)',
     },
   },
 }));
 
 const CustomMenuItem = styled(MenuItem)(() => ({
   fontSize: customTheme.typography.fontSizes[10],
   padding: '10px 20px',
   fontWeight: customTheme.typography.fontWeights.medium,
   fontFamily: customTheme.typography.fontFamily.main,
   color: '#333',
   '&:hover': {
     backgroundColor: colors.body.whitesmoke,
   },
 }));

 const StyledTableRow = styled(TableRow)({
  '&:last-child .MuiTableCell-root': {
    borderBottom: 'none',
  },
});
 

const ActiveEmployees = () => {
   const theme = useTheme();
   const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
   const [anchorEl, setAnchorEl] = useState(null);
   const [menuIndex, setMenuIndex] = useState(null);
   const [currentPage, setCurrentPage] = useState(1);
   const [modalOpen, setModalOpen] = useState<boolean>(false);
   
   const Employees = [
      { name: 'Judith Rodriguez', email: 'Daniel_hamilton@aol.com', id: '10010', date: '22 May 2024' },
      { name: 'Kimberly Mostrangelo', email: 'k_pacheco@gmail.com', id: '10011', date: '26 May 2024' },
      { name: 'Rodger Struck', email: 'dennis6t@gmail.com', id: '10012', date: '21 May 2024' },
      { name: 'Mary Freund', email: 'k.p@gmail.com', id: '10013', date: '04 Jun 2024' },
      { name: 'Rodger Struck', email: 'dennis16@gmail.com', id: '10014', date: '09 May 2024' },
      { name: 'Mary Freund', email: 'k.p@aol.com', id: '10015', date: '12 May 2024' },
      { name: 'Rodger Struck', email: 'dennis16@gmail.com', id: '10016', date: '31 May 2024' },
      { name: 'Mary Freund', email: 'k.p@aol.com', id: '10017', date: '16 May 2024' },
   ];

   const employeesPerPage = 4;
   const totalPages = Math.ceil(Employees.length / employeesPerPage);

   const handleMenuOpen = (event: any, index: any) => {
      setAnchorEl(event.currentTarget);
      setMenuIndex(index);
   };

   const handleMenuClose = () => {
      setAnchorEl(null);
      setMenuIndex(null);
   };

   const handlePageChange = (page: number) => {
      setCurrentPage(page);
   };

   const currentEmployees = Employees.slice(
      (currentPage - 1) * employeesPerPage,
      currentPage * employeesPerPage
   );

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

   return (
      <>
      {isSmallScreen ? (
        <>
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
                  <LabelValue label="Joining Date" value={employee.date} />
                  <StyledIconButton onClick={(e) => handleMenuOpen(e, employee.id)}>
                           <MoreVertIcon />
                        </StyledIconButton>
                        {menuIndex === employee.id && (
                           <Menu
                              anchorEl={anchorEl}
                              open={Boolean(anchorEl)}
                              onClose={handleMenuClose}
                           >
                              <MenuItem onClick={handleMenuClose}>Remove Employee</MenuItem>
                              <MenuItem onClick={() => {
                                 setModalOpen(true)}}>Allocate Asset</MenuItem>
                           </Menu>
                        )}
                </StyledBox>
              </StyledAccordionDetails>
            </StyledAccordion>
          ))}
        </>
      ) : (
      <EmployeeWrapper>
         <Table>
            <TableHead>
               <TableRow>
                  <StyledTableCell>No.</StyledTableCell>
                  <StyledTableCell>Employee name</StyledTableCell>
                  <StyledTableCell>Email address</StyledTableCell>
                  <StyledTableCell>Employee ID</StyledTableCell>
                  <StyledTableCell>Joining Date</StyledTableCell>
                  <StyledTableCell>Action</StyledTableCell>
               </TableRow>
            </TableHead>
            <TableBody>
               {currentEmployees.map((Employee, i) => (
                  <StyledTableRow key={i}>
                     <StyledValueCell >{(currentPage - 1) * employeesPerPage + (i + 1)}</StyledValueCell>
                     <StyledName>{Employee.name}</StyledName>
                     <StyledValueCell>{Employee.email}</StyledValueCell>
                     <StyledValueCell>{Employee.id}</StyledValueCell>
                     <StyledValueCell>{Employee.date}</StyledValueCell>
                     <StyledValueCell>
                        <StyledIconButton onClick={(e) => handleMenuOpen(e, i)}>
                           <MoreVertIcon />
                        </StyledIconButton>
                        {menuIndex === i && (
                           <CustomMenu
                           anchorEl={anchorEl}
                           open={Boolean(anchorEl)}
                           onClose={handleMenuClose}
                           anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                           transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                         >
                           <CustomMenuItem onClick={handleMenuClose}>Remove Employee</CustomMenuItem>
                           <CustomMenuItem onClick={() => {
                             handleMenuClose();
                             setModalOpen(true);
                           }}>
                             Allocate Asset
                           </CustomMenuItem>
                         </CustomMenu>
                        )}
                     </StyledValueCell>
                  </StyledTableRow>
               ))}
            </TableBody>
         </Table>
      </EmployeeWrapper>
      )}
      <Pagination
         currentPage={currentPage}
         totalPages={totalPages}
         onPageChange={handlePageChange}
      />
      <AllocateAssetModal open={modalOpen} onClose={() => setModalOpen(false)} />
      </>
   );
};

export default ActiveEmployees;
