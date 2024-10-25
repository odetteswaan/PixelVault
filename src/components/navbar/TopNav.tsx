import { Avatar, Box, TextField, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import notificationLogo from '../../assets/notification-bing.svg';
import { colors } from 'src/themes/colors';
import { theme } from 'src/themes/theme';

const TopNavContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
});

const LeftSection = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
});

const RightSection = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  width: '400px',
  maxWidth: '100%',
  justifyContent: 'space-between',
});

const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    borderRadius: '0 5px 5px 0',
    height: '40px',
    '& fieldset': {
      borderColor: colors.greys.lightGrey,
    },
    '& input': {
      height: '100%',
      padding: '6px 10px',
      background: colors.primary.grayishWhite,
    },
    '&:hover fieldset': {
      borderColor: colors.greys.lightGrey,
    },
    '&.Mui-focused fieldset': {
      borderColor: colors.greys.lightGrey,
    },
  },
});

const Header = styled(Typography)({
  color: colors.headers.charcoalBlack,
  fontFamily: theme.typography.fontFamily.main,
  fontSize: theme.typography.fontSizes[12],
  fontWeight: theme.typography.fontWeights.bold,
});

const SubHeading = styled(Typography)({
  fontFamily: theme.typography.fontFamily.main,
  fontSize: '13px',
  color: colors.greys.grey,
});

const StyledBox = styled(Box)({
  width: '50px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '5px 0 0 5px',
  height: '40px',
  background: colors.primary.grayishWhite,
  border: `1px solid ${colors.greys.lightGrey}`,
});
const StyledText = styled(Typography)({
  fontFamily: 'Urbanist',
  fontSize: '14px',
  fontWeight: '500',
  color: '#8A96A8',
});

function TopNav() {
  return (
    <TopNavContainer>
      <LeftSection>
        <Header>Good Evening, Camero 🤩</Header>
        <SubHeading>
          It’s a great day to optimise your asset management for greater
          efficiency and growth.
        </SubHeading>
      </LeftSection>

      <RightSection>
        <Box display="flex" alignItems="center">
          <StyledBox>
            <StyledText>All</StyledText>
          </StyledBox>
          <StyledTextField placeholder="search..." variant="outlined" />
        </Box>
        <img src={notificationLogo} alt="Notifications" />
        <Avatar />
      </RightSection>
    </TopNavContainer>
  );
}

export default TopNav;
