import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { colors } from 'src/themes/colors';
import CustomLink from 'src/components/actions/CustomLink';
import SectionHeading from 'src/components/adminDashboard/SectionHeading';

const CardContainer = styled(Card)(({ theme }) => ({
  backgroundColor: colors.primary.grayishWhite,
  borderRadius: '8px',
  padding: theme.spacing(2),
  width: '50%',
  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
}));

const assets = [
  {
    id: 1,
    title: 'iPhone 15 pro max',
    brand: 'Apple',
    device: 'iPhone',
    date: 'May 8, 2024',
  },
  {
    id: 2,
    title: 'Oppo Reno 3 pro',
    brand: 'Oppo',
    device: 'Mobile phone',
    date: 'May 8, 2024',
  },
  {
    id: 3,
    title: 'MacBook Pro 16”',
    brand: 'Apple',
    device: 'MacBook',
    date: 'May 8, 2024',
  },
];

const AssetsWarranty = () => {
  return (
    <CardContainer>
      <SectionHeading title=" Warranty Expiring" />
      {assets.map((asset) => (
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
                  {asset.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Brand: {asset.brand}
                </Typography>
              </Grid>
              <Grid size={{ xs: 5 }}>
                <Typography variant="body1" fontWeight={600} textAlign="right">
                  {asset.date}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  textAlign="right"
                >
                  Device: {asset.device}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      ))}
      <CustomLink to="/abc" text=" View All Assets" />
    </CardContainer>
  );
};

export default AssetsWarranty;
