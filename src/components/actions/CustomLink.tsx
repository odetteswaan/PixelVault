import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { customTheme } from 'src/themes/theme';
import { colors } from 'src/themes/colors';
import { ArrowForward } from '@mui/icons-material';
const StyledLink = styled(Link)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '15px',
  color: colors.primary.metallicViolet,
  cursor: 'pointer',
  fontWeight: customTheme.typography.fontWeights.semiBold,
  fontSize: customTheme.typography.fontSizes[10],
  fontFamily: customTheme.typography.fontFamily.main,
  textDecoration: 'none',
  '&:hover': {
    color: colors.primary.metallicViolet,
  },
});

interface CustomLinkProps {
  to: string;
  text: string;
}

const CustomLink: React.FC<CustomLinkProps> = ({ to, text }) => {
  return (
    <StyledLink to={to}>
      {text}
      <ArrowForward sx={{ marginLeft: '4px' }} />
    </StyledLink>
  );
};

export default CustomLink;
