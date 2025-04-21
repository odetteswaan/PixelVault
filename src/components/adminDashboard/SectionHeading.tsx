import React from 'react';
import { Box, Divider, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { colors } from 'src/themes/colors';
import { customTheme } from 'src/themes/theme';

interface SectionHeadingProps {
  title: string;
}

const StyledTypography = styled(Typography)({
  flexGrow: 1,
  fontSize: '18px',
  color: colors.headers.Heading,
  fontFamily: customTheme.typography.fontFamily.main,
  fontWeight: customTheme.typography.fontWeights.semiBold,
});

const SectionHeading: React.FC<SectionHeadingProps> = ({ title }) => {
  return (
    <>
      <Box display="flex" alignItems="center" mb={2}>
        <StyledTypography>{title}</StyledTypography>
      </Box>
      <Divider sx={{ mb: 2 }} />
    </>
  );
};

export default SectionHeading;
