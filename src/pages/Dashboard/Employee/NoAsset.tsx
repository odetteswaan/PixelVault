import { Box, Button, Typography, styled } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import NoAsset from 'src/assets/NoAsset.svg';
import { customTheme } from '../../../themes/theme';
import { colors } from '../../../themes/colors';

const NoAssetsContainer = styled(Box)(() => ({
  width: '100%',
  border: '1px solid #ECECEC',
  display: 'flex',
  justifyContent: 'center',
  background: colors.primary.grayishWhite,
  borderRadius: '10px',
  height: '70vh',
  alignItems: 'center',
}));

const Text = styled(Typography)({
  fontFamily: customTheme.typography.fontFamily.main,
  fontSize: customTheme.typography.fontSizes[16],
  fontWeight: customTheme.typography.fontWeights.semiBold,
  color: colors.headers.black,
  textAlign: 'center',
});

const ContentBox = styled(Box)(({ theme }) => ({
  maxWidth: '600px',
  Maxheight: '540px',
  padding: '10px',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'space-between',
  [theme.breakpoints.down('sm')]: {
    maxWidth: '90%',
  },
}));

const AssetImage = styled('img')({
  width: '100%',
  height: '100%',
  marginBottom: '20px',
});

const StyledBox = styled(Box)({
  height: '280px',
  width: '280px',
});

const RequestButton = styled(Button)({
  background: colors.primary.metallicViolet,
  color: colors.body.white,
  fontFamily: customTheme.typography.fontFamily.main,
  fontWeight: customTheme.typography.fontWeights.semiBold,
  fontSize: customTheme.typography.fontSizes[10],
  textTransform: 'none',
  gap: '5px',
  '&:hover': {
    background: colors.primary.metallicViolet,
  },
});

const NoAssets = () => {
  return (
    <NoAssetsContainer>
      <ContentBox>
        <Text>You currently have no assets assigned to you!</Text>
        <StyledBox>
          <AssetImage src={NoAsset} alt="noAsset" />
        </StyledBox>
        <RequestButton variant="contained">
          Request New Asset <AddCircleOutlineIcon />
        </RequestButton>
      </ContentBox>
    </NoAssetsContainer>
  );
};

export default NoAssets;
