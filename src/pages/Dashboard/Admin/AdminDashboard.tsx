import { Box } from '@mui/material';
import DashboardStatus from './DashboardStatus';
import RecentAddedAssets from './RecentAddedAssets';
import RecentAllocatedAssets from './RecentAllocatedAssets';
import { styled } from '@mui/system';
import TicketChart from 'src/pages/Dashboard/Admin/TicketChart';
import AllAssets from 'src/pages/Dashboard/Admin/AllAssets';
import AllocatedAssets from 'src/pages/Dashboard/Admin/AllocatedAssets';
import AssetsWarranty from './AssetsWarranty';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'src/redux/store';
import { fetchDashboardData } from 'src/redux/admin/adminSlice';

const MainContainer = styled(Box)({
  width: '100%',
  padding: '3% 5%',
});
const SubContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '20px',
  padding: '3% 0 0',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
  },
}));

function AdminDashboard() {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      dispatch(fetchDashboardData(token));
    }
  }, [dispatch]);

  return (
    <MainContainer>
      <DashboardStatus></DashboardStatus>
      <SubContainer>
        <RecentAddedAssets />
        <RecentAllocatedAssets />
      </SubContainer>
      <SubContainer>
        <TicketChart />
        <AssetsWarranty />
      </SubContainer>
      <SubContainer>
        <AllAssets />
        <AllocatedAssets />
      </SubContainer>
    </MainContainer>
  );
}

export default AdminDashboard;
