import React, { useState } from 'react';
import {
  Box,
  IconButton,
  InputAdornment,
  Link,
  Checkbox,
  TextField,
  Typography,
  FormControlLabel,
  Button,
  styled,
} from '@mui/material';

import { colors } from 'src/themes/colors';
import { theme } from 'src/themes/theme';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import HomeImage from '../../assets/HomeImage.png';
import logo from '../../assets/Actual-pixel-logo.png';

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
  gap: theme.whitespace.spacings[32],
});

const RightContainer = styled(Box)({
  width: '50%',
  padding: '10%',
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
  wordSpacing: theme.typography.letterSpacing.small,
});

const LoginSubHeading = styled(Typography)({
  color: colors.greys.grey,
  fontFamily: theme.typography.fontFamily.main,
  marginBottom: '2.5rem',
});

const StyledLabel = styled(Typography)(({ error }: { error?: boolean }) => ({
  fontFamily: theme.typography.fontFamily.body,
  color: error ? '#E15552' : colors.greys.grey,
  marginBottom: theme.whitespace.spacings[2],
}));

const StyledTextField = styled(TextField)({
  marginBottom: theme.whitespace.spacings[8],
  width: '100%',
  '& .MuiOutlinedInput-root': {
    '&.Mui-focused fieldset': {
      borderColor: colors.primary.metallicViolet,
    },
  },
});

const StyledLink = styled(Link)({
  fontFamily: theme.typography.fontFamily.main,
  color: colors.primary.electricIndigo,
  textDecoration: 'none',
  cursor: 'pointer',
});

const StyledButton = styled(Button)({
  background: colors.primary.metallicViolet,
  fontFamily: theme.typography.fontFamily.main,
  color: colors.body.white,
  textTransform: 'none',
  marginBottom: '0.5rem',
  marginTop: '1.5rem',
  width: '100%',
  '&:hover': {
    background: colors.primary.violet,
  },
});

const StyledFormControlLabel = styled(FormControlLabel)({
  fontFamily: theme.typography.fontFamily.main,
  color: colors.body.lightGrey,
  fontSize: theme.typography.fontSizes[10],
});

const FlexBox = styled(Box)({
  marginBottom: '10px',
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const StyledBox = styled(Box)({
  maxWidth: '350px',
});

const CenteredText = styled(Typography)({
  textAlign: 'center',
  fontFamily: theme.typography.fontFamily.main,
  color: colors.body.lightGrey,
});

const ErrorText = styled(Typography)({
  fontFamily: 'Urbanist',
  fontWeight: 500,
  fontStyle: 'italic',
  fontSize: '14px',
  marginBottom: theme.whitespace.spacings[2],
  color: '#E15552',
});

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const idRegex = /^\d+$/;
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = { email: '', password: '' };

    if (!formData.email) {
      newErrors.email = 'Please enter your email';
      isValid = false;
    } else if (
      !emailRegex.test(formData.email) &&
      !idRegex.test(formData.email)
    ) {
      newErrors.email = 'Invalid email or ID';
      isValid = false;
    }

    if (!formData.password) {
      newErrors.password = 'Please enter your password';
      isValid = false;
    } else if (!passwordRegex.test(formData.password)) {
      newErrors.password = 'Invalid password';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData.email, formData.password);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePasswordShow = () => {
    setShowPassword((prev) => !prev);
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
        <LoginHeading variant="h4">Login to your account.</LoginHeading>
        <LoginSubHeading variant="body2">
          Enter your email address and password to continue with us.
        </LoginSubHeading>
        <StyledBox>
          <form onSubmit={handleSubmit}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <StyledLabel error={!!errors.email} variant="body2">
                Employee ID/Email ID
              </StyledLabel>
              <ErrorText>{errors.email}</ErrorText>
            </Box>
            <StyledTextField
              size="small"
              placeholder="1004320"
              name="email"
              onChange={handleChange}
              value={formData.email}
              error={!!errors.email}
            />
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <StyledLabel error={!!errors.password} variant="body2">
                Your Password
              </StyledLabel>
              <ErrorText>{errors.password}</ErrorText>
            </Box>
            <StyledTextField
              size="small"
              placeholder="Enter your password"
              value={formData.password}
              name="password"
              onChange={handleChange}
              type={showPassword ? 'text' : 'password'}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handlePasswordShow}>
                      {showPassword ? (
                        <VisibilityIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              error={!!errors.password}
            />
            <FlexBox>
              <StyledFormControlLabel
                control={<Checkbox size="small" />}
                label="Remember me?"
              />
              <StyledLink>Forgot Password?</StyledLink>
            </FlexBox>
            <StyledButton variant="contained" type="submit">
              Sign In Now
            </StyledButton>
            <CenteredText variant="body2">
              Don’t have an account?{' '}
              <StyledLink href="signup">sign up now.</StyledLink>
            </CenteredText>
          </form>
        </StyledBox>
      </RightContainer>
    </Container>
  );
}

export default Login;
