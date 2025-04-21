import EmployeeDetails from './EmployeeDetails';
import AssetDetails from './AssetDetails';
import RaisedTicketComponent from '../../components/RaisedTicket/RaisedTicketComponent';
import { styled, Box } from '@mui/material';
import AllAssets from '../../components/assets/AllAssets';
import mobile from '../../assets/Mobile.svg';

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

const assets = [
  {
    AssetName: 'Asset 1',
    image: mobile,
    DeviceType: 'Laptop',
    AssignedDate: '2023-01-15',
    Processor: 'Intel Core i7-12700H',
    Graphics: 'abc',
    Memory: '8 GB',
    SerialNumber: 'SN123456789',
    OS: 'Windows 11 Pro',
    Model: 'Dell XPS 15',
    uploaded: false,
  },
  {
    AssetName: 'Asset 2',
    image: mobile,
    DeviceType: 'Desktop',
    AssignedDate: '2023-05-20',
    Processor: 'AMD Ryzen 5 5600X',
    Graphics: 'abc',
    Memory: '6 GB',
    SerialNumber: 'SN987654321',
    OS: 'Windows 10 Pro',
    Model: 'HP Pavilion',
    uploaded: true,
  },
  {
    AssetName: 'Asset 3',
    image: mobile,
    DeviceType: 'Tablet',
    AssignedDate: '2023-08-10',
    Processor: 'Apple A14 Bionic',
    Graphics: 'abc',
    Memory: '4 GB',
    SerialNumber: 'SN543216789',
    OS: 'iOS 16',
    Model: 'iPad Air 4',
    uploaded: true,
  },
  {
    AssetName: 'Asset 4',
    image: mobile,
    DeviceType: 'Workstation',
    AssignedDate: '2023-03-12',
    Processor: 'Intel Xeon W-1290',
    Graphics: 'abc',
    Memory: '16 GB',
    SerialNumber: 'SN654321987',
    OS: 'Windows 11 Pro',
    Model: 'Lenovo ThinkStation',
    uploaded: true,
  },
];

function EmployeeProfile() {
  return (
    <>
      <StyledBox>
        <EmployeeDetails />
        <AssetDetails />
      </StyledBox>
      <AssetsContainer>
        <AllAssets assets={assets} />
        <RaisedTicketComponent />
      </AssetsContainer>
    </>
  );
}

export default EmployeeProfile;
