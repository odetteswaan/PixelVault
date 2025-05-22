import { Box, Typography, styled } from '@mui/material';
import Asset from './Asset';
import { colors } from 'src/themes/colors';
import { customTheme } from 'src/themes/theme';


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

const AllAssets=()=>{
  return (
    <Box>
      <StyledHeading>All Assets Allocated</StyledHeading>
      <StyledContainer>
        
          <Asset></Asset>
        
      </StyledContainer>
    </Box>
  );
}

export default AllAssets;
