import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { colors } from 'src/themes/colors';
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
    width: '100%',
  },
}));


const AssetsWarranty = () => {
  const dashboardStatus = useSelector((state: RootState) => state.admin.data);
  const warranty_expiring_data = dashboardStatus?.warranty_expiring_data;
  return (
    <CardContainer>
      <SectionHeading title=" Warranty Expiring" />
      {warranty_expiring_data && warranty_expiring_data.map((asset) => (
        <Card
          key={asset.id}
          sx={{
            mb: 2,
            boxShadow: 'none',
            border: '1px solid #e0e0e0',
            borderRadius: '8px',
          }}
        >
          <CardContent>
            <Grid container spacing={2}>
              <Grid size={{ xs: 2 }}>
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    backgroundColor: '#f1f1f1',
                    borderRadius: '8px',
                  }}
                ></Box>
              </Grid>
              <Grid size={{ xs: 5 }}>
                <Typography variant="body1" fontWeight={600}>
                  {asset.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Brand: {asset.brand}
                </Typography>
              </Grid>
              <Grid size={{ xs: 5 }}>
                <Typography variant="body1" fontWeight={600} textAlign="right">
                  {asset.warranty_end_date}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  textAlign="right"
                >
                  Device: {asset.asset_type}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      ))}
      <CustomLink to="/admin/ticketsWarranty" text=" View All Assets" />
    </CardContainer>
  );
};

export default AssetsWarranty;
