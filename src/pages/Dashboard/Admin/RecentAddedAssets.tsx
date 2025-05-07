import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import CustomLink from 'src/components/actions/CustomLink';
import { colors } from 'src/themes/colors';
import SectionHeading from 'src/components/adminDashboard/SectionHeading';

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

const assets = [
  {
    id: 1,
    title: 'iPhone 15 pro max',
    brand: 'Apple',
    device: 'iPhone',
    date: 'May 8, 2024 4:48 pm',
  },
  {
    id: 2,
    title: 'Oppo Reno 3 pro',
    brand: 'Oppo',
    device: 'Mobile phone',
    date: 'May 8, 2024 4:48 pm',
  },
  {
    id: 3,
    title: 'MacBook Pro 16”',
    brand: 'Apple',
    device: 'MacBook',
    date: 'May 8, 2024 4:48 pm',
  },
];

const RecentAddedAssets = () => {
  return (
    <CardContainer>
      <SectionHeading title=" Recent Assets Added" />
      {assets.map((asset) => (
        <AssetCard key={asset.id}>
          <CardContent>
            <Grid container spacing={2}>
              <Grid size={{ xs: 2 }}>
                <AssetIconBox/>
              </Grid>
              <Grid size={{ xs: 5 }}>
                <AssetTitle variant="body1">
                  {asset.title}
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
                  {asset.date}
                </RightText>
                <RightText
                  variant="body2"
                  color="text.secondary"
                >
                  Device: {asset.device}
                </RightText>
              </Grid>
            </Grid>
          </CardContent>
        </AssetCard>
      ))}
      <CustomLink to="/abc" text=" View All Assets" />
    </CardContainer>
  );
};

export default RecentAddedAssets;
