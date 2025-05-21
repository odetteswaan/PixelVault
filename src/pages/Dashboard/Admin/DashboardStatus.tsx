import { Grid, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';
import { useSelector } from 'react-redux';
import { RootState } from 'src/redux/store';

const Container = styled(Grid)({
  border: '1px solid #ECECEC',
  borderRadius: '10px',
  width: '100%',
  marginLeft: '0',
  padding: '20px',
});

const StyledLine = styled(Box)({
  width: '4px',
  height: '50px',
  borderRadius: '2px',
});
const StyledValue = styled(Typography)({
  marginTop: 1,
  marginLeft: 1,
});

const DashboardStatus = () => {
  const dashboardStatus = useSelector((state: RootState) => state.admin.data);
  const stats = [
    { title: 'Total Assets', value: dashboardStatus?.total_assets, color: '#E2AC02' },
    { title: 'Assets in Stock', value: dashboardStatus?.assets_in_stock, color: '#A779D3' },
    { title: 'New Asset Request', value: dashboardStatus?.new_asset_requests, color: '#F07F41' },
    { title: 'New Issue Raised', value: dashboardStatus?.tickets_raised.in_progress, color: '#2F8CC1' },
    { title: 'Total Assets Cost', value: dashboardStatus?.total_amount, color: '#145AFE' },
  ];

  return (
    <Container container spacing={2}>
      {stats.map((stat, index) => (
        <Grid key={index} size={{ xs: 6, sm: 6, md: 4, lg: 2.4 }}>
          <Box display="flex" alignItems="center" gap={1}>
            <StyledLine sx={{ backgroundColor: stat.color }}></StyledLine>
            <Box>
              <Typography variant="subtitle2" color="textSecondary">
                {stat.title}
              </Typography>
              <Typography variant="caption" color="textSecondary">
                All
              </Typography>
            </Box>
          </Box>
          <StyledValue variant="h4">{stat.value}</StyledValue>
        </Grid>
      ))}
    </Container>
  );
};

export default DashboardStatus;
