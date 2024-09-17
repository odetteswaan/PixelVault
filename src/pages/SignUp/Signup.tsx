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
} from '@mui/material';
import { colors } from 'src/themes/colors';
import { theme } from 'src/themes/theme';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import HomeImage from '../../assets/HomeImage.png';
import logo from '../../assets/Actual-pixel-logo.png';

interface FormErrors {
  employeeId?: string;
  email?: string;
  fullName?: string;
  designation?: string;
  password?: string;
  confirmPassword?: string;
}

const Container = styled(Box)({
  width: '100vw',
  height: '100vh',
  display: 'flex',
  position: 'relative',
});

const LeftContainer = styled(Box)({
  width: '50%',
  background: colors.primary.metallicViolet,
  padding: '10% 6%',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.whitespace.spacings[48],
});

const RightContainer = styled(Box)({
  width: '50%',
  padding: '10% 8%',
  display: 'flex',
  flexDirection: 'column',
});

const ImageContainer = styled(Box)({
  position: 'absolute',
  top: '3rem',
  right: '3rem',
});

const LogoImage = styled('img')({
  width: 'auto',
  height: 'auto',
});

const Heading = styled(Typography)({
  color: colors.body.white,
  fontFamily: theme.typography.fontFamily.main,
  wordSpacing: theme.typography.letterSpacing.small,
});

const SubHeading = styled(Typography)({
  color: colors.body.white,
  opacity: 0.4,
  marginTop: '0.5rem',
  fontFamily: theme.typography.fontFamily.main,
});

const ImageBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const HomeImageStyled = styled('img')({
  width: '60%',
  height: '90%',
});

const LoginHeading = styled(Typography)({
  fontFamily: theme.typography.fontFamily.main,
  fontSize: theme.typography.fontSizes[18],
  color: colors.headers.darkBlack,
  fontWeight: theme.typography.fontWeights.bold,
  marginBottom: '0.3rem',
});

const LoginSubHeading = styled(Typography)({
  color: colors.greys.grey,
  fontFamily: theme.typography.fontFamily.main,
  fontWeight: theme.typography.fontWeights.default,
  marginBottom: '2.5rem',
});

const StyledLabel = styled(Typography)({
  fontFamily: theme.typography.fontFamily.body,
  color: colors.greys.grey,
  marginBottom: theme.whitespace.spacings[2],
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
  fontFamily: theme.typography.fontFamily.main,
  color: colors.primary.electricIndigo,
  textDecoration: 'none',
  cursor: 'pointer',
});

const FlexBox = styled(Box)({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  gap: '5%',
});

const StyledBox = styled(Box)({
  maxWidth: '600px',
});

const StyledButton = styled(Button)({
  background: colors.primary.metallicViolet,
  fontFamily: theme.typography.fontFamily.main,
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
  fontFamily: theme.typography.fontFamily.main,
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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Form submitted:', formData);
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

    console.log('Form submitted:', formData);
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
        <LogoImage src={logo} alt="Logo" />
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
        <LoginHeading variant="h4">Let’s create your account.</LoginHeading>
        <LoginSubHeading variant="body2">
          Enter your details and create a password to continue with us.
        </LoginSubHeading>
        <StyledBox>
          <form
            onSubmit={handleSubmit}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '300px',
            }}
          >
            <FlexBox>
              <Box>
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
              </Box>
              <Box>
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
              </Box>
            </FlexBox>
            <FlexBox>
              <Box>
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
              </Box>
              <Box>
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
              </Box>
            </FlexBox>
            <FlexBox>
              <Box>
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
              </Box>
              <Box>
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
              </Box>
            </FlexBox>

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
      </RightContainer>
    </Container>
  );
}

export default Signup;
