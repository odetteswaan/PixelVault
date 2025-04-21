import { Box, Button, styled } from "@mui/material";
import SignupRequests from "./SignupRequests";
import ActiveEmployees from "./ActiveEmployees";
import { customTheme } from "src/themes/theme";
import { useState } from "react";
import AllocateAssetModal from "./AllocateAsset";

const Container = styled(Box)({
   padding: "3% 5%" 
});
const StyledButtonBox = styled(Box)(({ theme }) => ({
   margin: "3% 0",
   display: "flex",
   alignItems: "end",
   justifyContent: "flex-end",
   [theme.breakpoints.down('md')]: {
      margin: "5% 0",
   }
}));
const StyledButton = styled(Button)({
   marginRight: "10px",
   textTransform: "none",
   background: "#5900B3",
   fontFamily: customTheme.typography.fontFamily.main,
   fontWeight: customTheme.typography.fontWeights.medium,
   fontSize: customTheme.typography.fontSizes[10],
});
const EmployeeList = () => {
   const [modalOpen, setModalOpen] = useState<boolean>(false);
   return (
      <Container>
         <SignupRequests />
         <StyledButtonBox>
            <StyledButton variant="contained" onClick={() => {setModalOpen(true)}}>
               Allocate New Asset
            </StyledButton>
            <AllocateAssetModal open={modalOpen} onClose={() => setModalOpen(false)} />
         </StyledButtonBox>
         <ActiveEmployees />
      </Container>
   );
}
export default EmployeeList;