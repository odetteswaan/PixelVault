import { Box, styled } from '@mui/material';
import AllAssets from 'src/components/assets/AllAssets';
import RecentIssues from './RecentIssues';
import AllocatedAssets from './AllocatedAssets';
import mobile from 'src/assets/Mobile.svg';
import NoAssets from './NoAsset';

const AssetsContainer = styled(Box)({
  padding: '3%',
});

const IssueContainer = styled(Box)(({ theme }) => ({
  padding: '0 3% 3% 3%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    gap: '20px',
  },
}));
document.body.style.overflowX = 'hidden';
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

function Dashboard() {
  return (
    <Box>
      {assets.length > 0 ? (
        <>
          <AssetsContainer>
            <AllAssets/>
          </AssetsContainer>
          <IssueContainer>
            <RecentIssues />
            <AllocatedAssets />
          </IssueContainer>
        </>
      ) : (
        <AssetsContainer>
          <NoAssets />
        </AssetsContainer>
      )}
    </Box>
  );
}
export default Dashboard;
