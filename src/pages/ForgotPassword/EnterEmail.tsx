import React, { useState } from 'react';
import { TextField, Button, Typography, Box, styled } from '@mui/material';
import PasswordWithdraw from '../../assets/Passwordwithdraw.svg';
import { colors } from 'src/themes/colors';
import { theme } from 'src/themes/theme';

interface EnterEmailProps {
  email: string;
  setEmail: (email: string) => void;
  onSendOtp: () => void;
  onClose: () => void;
}

const Container = styled(Box)({
  width: '400px',
  maxWidth: '100%',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  padding: '5% 10%',
});

const CloseButton = styled(Button)({
  position: 'absolute',
  top: 10,
  borderRadius: '6px',
  right: 10,
  color: colors.greys.darkgrey,
  minWidth: '0',
  lineHeight: '10px',
  padding: '5px',
  background: colors.greys.dustygrey,
  border: colors.greys.dustygrey,
});

const ImageContainer = styled(Box)({
  height: '200px',
  margin: 'auto',
});

const StyledImage = styled('img')({
  height: '100%',
});

const ContentContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '20px',
});

const TextContainer = styled(Box)({
  width: '90%',
  textAlign: 'center',
  marginTop: '20px',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
});

const FormContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  gap: '20px',
});

const StyledTextField = styled(TextField)({
  width: '100%',
  '& .MuiOutlinedInput-root': {
    '&.Mui-focused fieldset': {
      borderColor: colors.primary.metallicViolet,
    },
  },
});

const SubmitButton = styled(Button)({
  background: colors.primary.metallicViolet,
  width: '100%',
  marginBottom: '10px',
  textTransform: 'none',
});

const StyledTypographyH6 = styled(Typography)({
  fontFamily: theme.typography.fontFamily.main,
  fontWeight: theme.typography.fontWeights.semiBold,
});

const StyledTypographyBody2 = styled(Typography)({
  fontFamily: theme.typography.fontFamily.main,
});

const StyledTypographySubtitle = styled(Typography)({
  fontFamily: theme.typography.fontFamily.main,
  color: '#8A92A6',
});

const EnterEmail: React.FC<EnterEmailProps> = ({
  email,
  setEmail,
  onSendOtp,
  onClose,
}) => {
  const [error, setError] = useState('');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleEmailSubmit = () => {
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email');
      return error;
    }
    setError('');
    onSendOtp();
  };

  return (
    <Container>
      <CloseButton onClick={onClose}>X</CloseButton>
      <ImageContainer>
        <StyledImage src={PasswordWithdraw} alt="withdraw password" />
      </ImageContainer>
      <ContentContainer>
        <TextContainer>
          <StyledTypographyH6 variant="h6">Forgot Password?</StyledTypographyH6>

          <StyledTypographyBody2 variant="body2">
            Don’t worry! It happens. Please enter the email Id, we will send the
            OTP to this email.
          </StyledTypographyBody2>
        </TextContainer>

        <FormContainer>
          <Box>
            <StyledTypographySubtitle variant="subtitle1">
              Your Email Id
            </StyledTypographySubtitle>
            <StyledTextField
              type="email"
              size="small"
              value={email}
              placeholder="Enter your email id"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Box>

          <SubmitButton
            color="primary"
            variant="contained"
            onClick={handleEmailSubmit}
          >
            Send verification code
          </SubmitButton>
        </FormContainer>
      </ContentContainer>
    </Container>
  );
};

export default EnterEmail;
