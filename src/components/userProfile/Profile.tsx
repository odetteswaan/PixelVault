import {
  Box,
  TextField,
  Typography,
  Grid,
  Button,
  styled,
  useMediaQuery,
} from '@mui/material';
import { colors } from 'src/themes/colors';
import { customTheme } from 'src/themes/theme';
import { useEffect, useState } from 'react';
import UserDetails from './UserDetails';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'src/redux/store';
import { getUserDetails, updateUser } from 'src/redux/userProfile/userProfileSlice';

const MainContainer = styled(Box)(({ theme }) => ({
  background: colors.primary.grayishWhite,
  border: `1px solid ${colors.greys.lightGrey}`,
  padding: '20px',
  height: '100%',
  borderRadius: '5px',
  [theme.breakpoints.down('sm')]: {
    border: 'none',
    padding: '25px',
  },
}));

const StyledProfile = styled(Typography)({
  borderBottom: `1px solid ${colors.greys.frostedGrey}`,
  marginBottom: '20px',
  color: `${colors.headers.charcoalBlack}`,
  fontWeight: 600,
  fontSize: customTheme.typography.fontSizes[12],
  fontFamily: customTheme.typography.fontFamily.main,
  paddingBottom: '5px',
});

const StyledLabel = styled(Typography)({
  color: `${colors.greys.grey}`,
  fontSize: customTheme.typography.fontSizes[10],
  fontFamily: customTheme.typography.fontFamily.main,
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

const StyledFormBox = styled(Box)(({ theme }) => ({
  width: '70%',
  marginBottom: '50px',
  [theme.breakpoints.down('md')]: {
    width: '90%',
    marginBottom: '10px',
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    marginBottom: '10px',
  },
}));

const ButtonContainer = styled(Box)(({ theme }) => ({
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
  [theme.breakpoints.down('sm')]: {
    justifyContent: 'center',
    width: '100%',
    gap: '20px',
  },
}));

function Profile() {
  const empDetails = useSelector((state: RootState) => state.login.user);
  const userDetails = useSelector((state: RootState) => state.user.userDetails);
  const [formState, setFormState] = useState({
    full_name: userDetails?.full_name || '',
    mobile: userDetails?.mobile || '',
    official_email: userDetails?.official_email || '',
    personal_email: userDetails?.personal_email || '',
    emp_id: userDetails?.emp_id || '',
    companyName: 'Actual pixel',
    state: userDetails?.state || '',
    city: userDetails?.city || '',
    address: userDetails?.address || '',
    pin_code: userDetails?.pin_code || '',
    profile_image_url: userDetails?.profile_image_url || '',
    designation: userDetails?.designation || '',
  });
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    if (empDetails && empDetails.id) {
      dispatch(getUserDetails(empDetails.id));
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
    setIsEditing(true);
  };

  const handleUpdate = async () => {
    if (empDetails?.id) {
      const updatedUserPayload = {
        id: empDetails.id,
        formState
      };
      await dispatch(updateUser(updatedUserPayload));
      await dispatch(getUserDetails(empDetails.id));
      setIsEditing(false);
    }
  };
  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <MainContainer>
      <StyledProfile>My Profile</StyledProfile>
      <FormContainer>
        <Box>
          <UserDetails />
        </Box>
        <StyledFormBox>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <StyledLabel>Full Name</StyledLabel>
              <StyledTextfield
                size={isSmallScreen ? 'medium' : 'small'}
                onChange={handleChange}
                name="full_name"
                value={formState.full_name}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <StyledLabel>Mobile Number</StyledLabel>
              <StyledTextfield
                size={isSmallScreen ? 'medium' : 'small'}
                onChange={handleChange}
                name="mobile"
                value={formState.mobile}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <StyledLabel>Office Email ID</StyledLabel>
              <StyledTextfield
                size={isSmallScreen ? 'medium' : 'small'}
                onChange={handleChange}
                name="office_email"
                value={formState.official_email}
                disabled
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <StyledLabel>Personal Email ID</StyledLabel>
              <StyledTextfield
                size={isSmallScreen ? 'medium' : 'small'}
                onChange={handleChange}
                name="personal_email"
                value={formState.personal_email}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <StyledLabel>Employee ID</StyledLabel>
              <StyledTextfield
                size={isSmallScreen ? 'medium' : 'small'}
                onChange={handleChange}
                name="emp_id"
                value={formState.emp_id}
                disabled
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <StyledLabel>Company Name</StyledLabel>
              <StyledTextfield
                size={isSmallScreen ? 'medium' : 'small'}
                value={formState.companyName}
                disabled
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <StyledLabel>State</StyledLabel>
              <StyledTextfield
                size={isSmallScreen ? 'medium' : 'small'}
                onChange={handleChange}
                name="state"
                value={formState.state}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <StyledLabel>City</StyledLabel>
              <StyledTextfield
                size={isSmallScreen ? 'medium' : 'small'}
                onChange={handleChange}
                name="city"
                value={formState.city}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <StyledLabel>Address</StyledLabel>
              <StyledTextfield
                multiline={!isSmallScreen}
                rows={2}
                onChange={handleChange}
                name="address"
                value={formState.address}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <StyledLabel>Pin Code</StyledLabel>
              <StyledTextfield
                size={isSmallScreen ? 'medium' : 'small'}
                onChange={handleChange}
                name="pin_code"
                value={formState.pin_code}
              />
            </Grid>
            {isEditing && (
              <Grid size={{ xs: 12 }}>
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
