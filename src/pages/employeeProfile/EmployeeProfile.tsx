import EmployeeDetails from './EmployeeDetails';
import AssetDetails from './AssetDetails';
import RaisedTicketComponent from '../../components/RaisedTicket/RaisedTicketComponent';
import { styled, Box } from '@mui/material';
import AllAssets from '../../components/assets/AllAssets';

const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  padding: '3%',
  gap: '20px',
  justifyContent: 'space-between',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
  },
}));

const AssetsContainer = styled(Box)({
  padding: '3%',
});

function EmployeeProfile() {
  const productId=localStorage.getItem('productId')
  return (
    <>
      <StyledBox>
        <EmployeeDetails />
        <AssetDetails />
      </StyledBox>
      <AssetsContainer>
        <AllAssets  />
        <RaisedTicketComponent productId={productId}/>
      </AssetsContainer>
    </>
  );
}

export default EmployeeProfile;
