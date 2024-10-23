import {
  Avatar,
  Box,
  TextField,
  Typography,
  Grid,
  Button,
  styled,
} from '@mui/material';
import { colors } from 'src/themes/colors';
import { theme } from 'src/themes/theme';
import editImage from '../../assets/EditImage.svg';

const MainContainer = styled(Box)({
  background: colors.primary.grayishWhite,
  border: `1px solid ${colors.greys.lightGrey}`,
  padding: '20px',
  height: '100%',
  borderRadius: '5px',
});

const StyledProfile = styled(Typography)({
  borderBottom: `1px solid ${colors.greys.frostedGrey}`,
  marginBottom: '20px',
  color: `${colors.headers.charcoalBlack}`,
  fontWeight: 600,
  fontSize: theme.typography.fontSizes[12],
  fontFamily: theme.typography.fontFamily.main,
  paddingBottom: '5px',
});

const ProfileContainer = styled(Box)({
  width: '30%',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  fontFamily: theme.typography.fontFamily.main,
  '.job-title': {
    color: `${colors.primary.metallicViolet}`,
  },
});

const StyledLabel = styled(Typography)({
  color: `${colors.greys.grey}`,
  fontSize: theme.typography.fontSizes[10],
  fontFamily: theme.typography.fontFamily.main,
  marginBottom: '3px',
});

const StyledTextfield = styled(TextField)(({ theme }) => ({
  width: '80%',
  '& .MuiInputBase-root': {
    height: '35px',
  },
  '& .MuiOutlinedInput-root': {
    height: '35px',
  },
  '& .MuiInputBase-input': {
    padding: '4px 8px',
  },
  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
}));

const FormContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'column',
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    width: '100%',
  },
}));

const EditButton = styled(Button)({
  position: 'absolute',
  bottom: '1px',
  right: '1px',
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
});

const StyledAvatarContainer = styled(Box)({
  position: 'relative',
});

const StyledAvatar = styled(Avatar)({
  width: '150px',
  height: '150px',
  marginBottom: '10px',
});

const StyledEditImage = styled('img')({
  width: '30px',
  height: '30px',
});

function Profile() {
  return (
    <MainContainer>
      <StyledProfile>My Profile</StyledProfile>
      <FormContainer>
        <ProfileContainer>
          <StyledAvatarContainer>
            <StyledAvatar />
            <EditButton>
              <StyledEditImage src={editImage} alt="Edit" />
            </EditButton>
          </StyledAvatarContainer>
          <Typography variant="h6">Camero Jorden</Typography>
          <Typography variant="body2" className="job-title">
            Software Designer
          </Typography>
        </ProfileContainer>

        <Box sx={{ width: '70%' }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <StyledLabel>Full Name</StyledLabel>
              <StyledTextfield size="small" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <StyledLabel>Mobile Number</StyledLabel>
              <StyledTextfield size="small" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <StyledLabel>Office Email ID</StyledLabel>
              <StyledTextfield size="small" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <StyledLabel>Personal Email ID</StyledLabel>
              <StyledTextfield size="small" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <StyledLabel>Employee ID</StyledLabel>
              <StyledTextfield size="small" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <StyledLabel>Company Name</StyledLabel>
              <StyledTextfield size="small" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <StyledLabel>State</StyledLabel>
              <StyledTextfield size="small" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <StyledLabel>City</StyledLabel>
              <StyledTextfield size="small" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <StyledLabel>Address</StyledLabel>
              <StyledTextfield multiline rows={2} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <StyledLabel>Pin Code</StyledLabel>
              <StyledTextfield size="small" />
            </Grid>
          </Grid>
        </Box>
      </FormContainer>
    </MainContainer>
  );
}

export default Profile;
