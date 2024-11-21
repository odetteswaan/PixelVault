import { Box, Typography, styled } from '@mui/material';
import Asset from './Asset';
import { colors } from '../../../themes/colors';
import { customTheme } from '../../../themes/theme';

interface AssetProps {
  AssetName: string;
  image: string;
  DeviceType: string;
  AssignedDate: string;
  Processor: string;
  Graphics: string;
  Memory: string;
  SerialNumber: string;
  OS: string;
  Model: string;
  uploaded: boolean;
}

interface AllAssetsProps {
  assets: AssetProps[];
}

const StyledHeading = styled(Typography)({
  fontFamily: customTheme.typography.fontFamily.main,
  fontSize: customTheme.typography.fontSizes[10],
  fontWeight: customTheme.typography.fontWeights.semiBold,
  color: colors.headers.charcoalBlack,
  marginBottom: '20px',
});

const StyledContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  flexWrap: 'wrap',
  gap: '20px',
});

function AllAssets({ assets }: AllAssetsProps) {
  return (
    <Box>
      <StyledHeading>All Assets Allocated</StyledHeading>
      <StyledContainer>
        {assets.map((asset, index) => (
          <Asset key={index} asset={asset}></Asset>
        ))}
      </StyledContainer>
    </Box>
  );
}

export default AllAssets;
