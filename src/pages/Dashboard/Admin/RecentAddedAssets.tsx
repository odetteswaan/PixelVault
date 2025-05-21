import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import CustomLink from 'src/components/actions/CustomLink';
import { colors } from 'src/themes/colors';
import SectionHeading from 'src/components/adminDashboard/SectionHeading';
import { useSelector } from 'react-redux';
import { RootState } from 'src/redux/store';

const CardContainer = styled(Card)(({ theme }) => ({
  backgroundColor: colors.primary.grayishWhite,
  borderRadius: '8px',
  padding: theme.spacing(2),
  width: '50%',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    width: '100%',
  },
}));
const AssetCard = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  boxShadow: 'none',
  border: '1px solid #e0e0e0',
  borderRadius: '8px',
}));

const AssetIconBox = styled(Box)({
  width: 40,
  height: 40,
  backgroundColor: '#f1f1f1',
  borderRadius: '8px',
});

const AssetTitle = styled(Typography)({
  fontWeight: 600,
});

const RightText = styled(Typography)({
  textAlign: 'right',
});


const RecentAddedAssets = () => {
  const dashboardStatus = useSelector((state: RootState) => state.admin.data);
  const assets = dashboardStatus?.recent_assets_added;
  return (
    <CardContainer>
      <SectionHeading title=" Recent Assets Added" />
      {assets && assets.map((asset) => (
        <AssetCard key={asset.id}>
          <CardContent>
            <Grid container spacing={2}>
              <Grid size={{ xs: 2 }}>
                <AssetIconBox />
              </Grid>
              <Grid size={{ xs: 5 }}>
                <AssetTitle variant="body1">
                  {asset.name}
                </AssetTitle>
                <Typography variant="body2" color="text.secondary">
                  Brand: {asset.brand}
                </Typography>
              </Grid>
              <Grid size={{ xs: 5 }}>
                <RightText
                  variant="body2"
                  color="text.secondary"
                >
                  {new Date(asset.updated_at).toLocaleString('en-GB', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                    hour: 'numeric',
                    minute: '2-digit',
                    hour12: true,
                  }).replace(',', '').toLowerCase()}
                </RightText>
                <RightText
                  variant="body2"
                  color="text.secondary"
                >
                  Device: {asset.asset_type}
                </RightText>
              </Grid>
            </Grid>
          </CardContent>
        </AssetCard>
      ))}
      <CustomLink to="/admin/assets" text=" View All Assets" />
    </CardContainer>
  );
};

export default RecentAddedAssets;
