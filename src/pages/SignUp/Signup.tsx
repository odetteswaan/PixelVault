import React, { useState } from 'react';
import {
  Box,
  IconButton,
  InputAdornment,
  Link,
  TextField,
  Typography,
  Button,
  styled,
  useMediaQuery,
  useTheme,
  Grid,
} from '@mui/material';
import { colors } from 'src/themes/colors';
import { customTheme } from 'src/themes/theme';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import HomeImage from '../../assets/HomeImage.svg';
import logo from '../../assets/Actual-pixel-logo.svg';
import MobileLogo from '../../assets/Mobile-logo.svg';

interface FormErrors {
  employeeId?: string;
  email?: string;
  fullName?: string;
  designation?: string;
  password?: string;
  confirmPassword?: string;
}

const Container = styled(Box)(({ theme }) => ({
  height: '100vh',
  width: '100vw',
  display: 'flex',

  position: 'relative',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    height: 'auto',
    minHeight: '100vh',
    width: '100%',
  },
}));

const LeftContainer = styled(Box)(({ theme }) => ({
  width: '50%',
  background: colors.primary.metallicViolet,
  padding: '10% 6%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    minHeight: '50vh',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
}));

const RightContainer = styled(Box)(({ theme }) => ({
  width: '50%',
  height: '100vh',
  padding: '5% 5%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    height: 'auto',
    flexDirection: 'column',
  },
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '3rem',
  right: '3rem',
  [theme.breakpoints.down('sm')]: {
    left: '1.5rem',
    right: 'auto',
    top: '1rem',
  },
}));

const LogoImage = styled('img')({
  width: 'auto',
  height: 'auto',
});

const Heading = styled(Typography)({
  color: colors.body.white,
  fontFamily: customTheme.typography.fontFamily.main,
  wordSpacing: customTheme.typography.letterSpacing.small,
  marginTop: '10px',
});

const SubHeading = styled(Typography)({
  color: colors.body.white,
  opacity: 0.4,
  marginTop: '0.5rem',
  fontFamily: customTheme.typography.fontFamily.main,
});

const ImageBox = styled(Box)(({ theme }) => ({
  marginTop: '3rem',
  maxHeight: '300px',
  maxWidth: '400px',
  padding: '5% 10%',
  [theme.breakpoints.down('sm')]: {
    padding: '0% 10%',
  },
}));

const HomeImageStyled = styled('img')({
  width: '100%',
  height: '100%',
});

const StyledFormContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '500px',
  marginTop: '5rem',
  justifyContent: 'space-between',
  [theme.breakpoints.down('sm')]: {
    marginTop: 0,
    height: 'auto',
  },
}));

const LoginHeading = styled(Typography)({
  fontFamily: customTheme.typography.fontFamily.main,
  fontSize: customTheme.typography.fontSizes[18],
  color: colors.headers.darkBlack,
  fontWeight: customTheme.typography.fontWeights.bold,
  marginBottom: '0.3rem',
});

const LoginSubHeading = styled(Typography)({
  color: colors.greys.grey,
  fontFamily: customTheme.typography.fontFamily.main,
  fontWeight: customTheme.typography.fontWeights.default,
  marginBottom: '2.5rem',
});

const StyledLabel = styled(Typography)({
  fontFamily: customTheme.typography.fontFamily.main,
  color: colors.greys.grey,
  marginBottom: customTheme.whitespace.spacings[2],
});

const StyledTextField = styled(TextField)({
  width: '100%',
  '& .MuiOutlinedInput-root': {
    '&.Mui-focused fieldset': {
      borderColor: colors.primary.metallicViolet,
    },
    '&.Mui-error fieldset': {
      borderColor: 'red',
    },
  },
  '& .MuiFormHelperText-root': {
    color: 'red',
  },
});

const StyledLink = styled(Link)({
  fontFamily: customTheme.typography.fontFamily.main,
  color: colors.primary.electricIndigo,
  fontWeight: customTheme.typography.fontWeights.medium,
  textDecoration: 'none',
  cursor: 'pointer',
});

const StyledBox = styled(Box)({
  maxWidth: '600px',
});

const StyledButton = styled(Button)({
  background: colors.primary.metallicViolet,
  fontFamily: customTheme.typography.fontFamily.main,
  color: colors.body.white,
  textTransform: 'none',
  marginBottom: '0.5rem',
  marginTop: '1.5rem',
  width: '80%',
  '&:hover': {
    background: colors.primary.violet,
  },
});
const ButtonBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

const CenteredText = styled(Typography)({
  textAlign: 'center',
  fontFamily: customTheme.typography.fontFamily.main,
  color: colors.body.lightGrey,
});

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const idRegex = /^\d+$/;
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    employeeId: '',
    email: '',
    fullName: '',
    designation: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newErrors: FormErrors = {};

    if (!formData.employeeId) newErrors.employeeId = 'employee id is required';
    else if (!idRegex.test(formData.employeeId)) {
      newErrors.employeeId = 'Employee ID must be numeric';
    }
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Email must be valid';
    }

    if (!formData.fullName) newErrors.fullName = 'employee id is required';
    if (!formData.designation)
      newErrors.designation = 'designation is required';
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (!passwordRegex.test(formData.password)) {
      newErrors.password = 'password must be valid';
    }
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = 'Confirm password does not match';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePasswordShow = () => {
    setShowPassword((prev) => !prev);
  };

  const handleConfirmPasswordShow = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  return (
    <Container>
      <ImageContainer>
        {isMobile ? (
          <LogoImage src={MobileLogo} alt="Logo" />
        ) : (
          <LogoImage src={logo} alt="Logo" />
        )}
      </ImageContainer>

      <LeftContainer>
        <Box>
          <Heading variant="h4">Lorem ipsum dolor sit amet, cons...</Heading>
          <SubHeading variant="body1">
            Fusce volutpat lectus et nisl consectetur finibus. In vitae
            scelerisque augue, in varius eros. Nunc sapien diam, euismod et
            pretium id.
          </SubHeading>
        </Box>
        <ImageBox>
          <HomeImageStyled src={HomeImage} alt="Home" />
        </ImageBox>
      </LeftContainer>

      <RightContainer>
        <StyledFormContainer>
          <LoginHeading variant="h4">Let’s create your account.</LoginHeading>
          <LoginSubHeading variant="body2">
            Enter your details and create a password to continue with us.
          </LoginSubHeading>
          <StyledBox>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid size={{xs:12,md:6,sm:6}}>
                  <StyledLabel variant="body2">Your Employee ID</StyledLabel>
                  <StyledTextField
                    size="small"
                    placeholder="1004320"
                    name="employeeId"
                    onChange={handleChange}
                    value={formData.employeeId}
                    error={!!errors.employeeId}
                    helperText={errors.employeeId}
                  />
                </Grid>
                <Grid size={{xs:12,md:6,sm:6}}>
                  <StyledLabel variant="body2">
                    Your Official Email ID
                  </StyledLabel>
                  <StyledTextField
                    size="small"
                    placeholder="enter your official email id"
                    name="email"
                    onChange={handleChange}
                    value={formData.email}
                    error={!!errors.email}
                    helperText={errors.email}
                  />
                </Grid>
                <Grid size={{xs:12,md:6,sm:6}}>
                  <StyledLabel variant="body2">Your Full Name</StyledLabel>
                  <StyledTextField
                    size="small"
                    placeholder="enter your full name"
                    name="fullName"
                    onChange={handleChange}
                    value={formData.fullName}
                    error={!!errors.fullName}
                    helperText={errors.fullName}
                  />
                </Grid>
                <Grid size={{xs:12,md:6,sm:6}}>
                  <StyledLabel variant="body2">Your Designation</StyledLabel>
                  <StyledTextField
                    size="small"
                    placeholder="enter your designation"
                    name="designation"
                    onChange={handleChange}
                    value={formData.designation}
                    error={!!errors.designation}
                    helperText={errors.designation}
                  />
                </Grid>
                <Grid size={{xs:12,md:6,sm:6}}>
                  <StyledLabel variant="body2">Your Password</StyledLabel>
                  <StyledTextField
                    size="small"
                    placeholder="enter your password"
                    name="password"
                    onChange={handleChange}
                    value={formData.password}
                    type={showPassword ? 'text' : 'password'}
                    helperText={errors.password}
                    error={!!errors.password}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={handlePasswordShow} edge="end">
                            {showPassword ? (
                              <VisibilityOffIcon />
                            ) : (
                              <VisibilityIcon />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid size={{xs:12,md:6,sm:6}}>
                  <StyledLabel variant="body2">Confirm Password</StyledLabel>
                  <StyledTextField
                    size="small"
                    placeholder="confirm your password"
                    name="confirmPassword"
                    onChange={handleChange}
                    value={formData.confirmPassword}
                    type={showConfirmPassword ? 'text' : 'password'}
                    error={!!errors.confirmPassword}
                    helperText={errors.confirmPassword}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={handleConfirmPasswordShow}
                            edge="end"
                          >
                            {showConfirmPassword ? (
                              <VisibilityOffIcon />
                            ) : (
                              <VisibilityIcon />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
              </Grid>

              <ButtonBox>
                <StyledButton variant="contained" type="submit">
                  Create Account
                </StyledButton>
                <CenteredText variant="body2">
                  Already have an account?
                  <StyledLink href="login">Sign In Now</StyledLink>
                </CenteredText>
              </ButtonBox>
            </form>
          </StyledBox>
        </StyledFormContainer>
      </RightContainer>
    </Container>
  );
}

export default Signup;
