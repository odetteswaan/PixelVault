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
import { useState } from 'react';

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
  width: '20%',
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
  borderRadius: '5px',
  '& .MuiOutlinedInput-root': {
    '&:hover fieldset': {
      borderColor: '#5900B3',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#5900B3',
    },
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
const StyledFormBox = styled(Box)({
  width: '70%',
  marginBottom: '50px',
});

const ButtonContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'flex-end',
  marginTop: '20px',
  width: '90%',
  '& .cancel-button': {
    color: '#5900B3',
    backgroundColor: 'transparent',
    border: '1px solid #5900B3',
    fontSize: '16px',
    fontWeight: '500',
    fontFamily: 'Urbanist',
  },
  '& .update-button': {
    marginLeft: '10px',
    background: '#5900B3',
    border: '1px solid #5900B3',
    fontSize: '16px',
    fontWeight: '500',
    fontFamily: 'Urbanist',
  },
});

function Profile() {
  const [formState, setFormState] = useState({
    fullName: '',
    mobileNumber: '',
    officeEmail: '',
    personalEmail: '',
    employeeId: '',
    companyName: 'Actual pixel',
    state: '',
    city: '',
    address: '',
    pinCode: '',
  });
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
    setIsEditing(true);
  };

  const handleUpdate = () => {
    setIsEditing(false);
  };
  const handleCancel = () => {
    setIsEditing(false);
  };

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

        <StyledFormBox>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <StyledLabel>Full Name</StyledLabel>
              <StyledTextfield
                size="small"
                onChange={handleChange}
                name="fullName"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <StyledLabel>Mobile Number</StyledLabel>
              <StyledTextfield
                size="small"
                onChange={handleChange}
                name="mobileNumber"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <StyledLabel>Office Email ID</StyledLabel>
              <StyledTextfield
                size="small"
                onChange={handleChange}
                name="officeEmail"
                disabled
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <StyledLabel>Personal Email ID</StyledLabel>
              <StyledTextfield
                size="small"
                onChange={handleChange}
                name="personalEmail"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <StyledLabel>Employee ID</StyledLabel>
              <StyledTextfield
                size="small"
                onChange={handleChange}
                name="employeeId"
                disabled
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <StyledLabel>Company Name</StyledLabel>
              <StyledTextfield size="small" disabled />
            </Grid>
            <Grid item xs={12} sm={6}>
              <StyledLabel>State</StyledLabel>
              <StyledTextfield
                size="small"
                onChange={handleChange}
                name="state"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <StyledLabel>City</StyledLabel>
              <StyledTextfield
                size="small"
                onChange={handleChange}
                name="city"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <StyledLabel>Address</StyledLabel>
              <StyledTextfield
                multiline
                rows={2}
                onChange={handleChange}
                name="address"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <StyledLabel>Pin Code</StyledLabel>
              <StyledTextfield
                size="small"
                onChange={handleChange}
                name="pinCode"
              />
            </Grid>
            {isEditing && (
              <Grid item xs={12}>
                <ButtonContainer>
                  <Button
                    onClick={handleCancel}
                    variant="outlined"
                    className="cancel-button"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={handleUpdate}
                    variant="contained"
                    className="update-button"
                  >
                    Update
                  </Button>
                </ButtonContainer>
              </Grid>
            )}
          </Grid>
        </StyledFormBox>
      </FormContainer>
    </MainContainer>
  );
}

export default Profile;
