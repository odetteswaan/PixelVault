import React, { useRef } from 'react';
import { Button, Typography, Box, styled, TextField } from '@mui/material';
import OtpVerification from '../../assets/OtpVerification.svg';
import { colors } from 'src/themes/colors';
import { theme } from 'src/themes/theme';

interface VerifyOtpProps {
  otp: string[];
  setOtp: (otp: string[]) => void;
  onVerifyOtp: () => void;
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
  gap: '20px',
});

const StyledTypographyH6 = styled(Typography)({
  fontFamily: theme.typography.fontFamily.main,
  fontWeight: theme.typography.fontWeights.semiBold,
});

const StyledTypographyBody2 = styled(Typography)({
  fontFamily: theme.typography.fontFamily.main,
  color: '5A5A5A',
});

const OtpInput = styled(TextField)({
  width: '40px',
  textAlign: 'center',
  margin: '0 5px',
  '& input': {
    textAlign: 'center',
  },
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

const VerifyOtp: React.FC<VerifyOtpProps> = ({
  otp,
  setOtp,
  onVerifyOtp,
  onClose,
}) => {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    const newOtp = [...otp];

    if (!/^\d*$/.test(value) || value.length > 1) {
      return;
    }

    newOtp[index] = value;
    setOtp(newOtp);

    if (index < otp.length - 1 && value) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, event: React.KeyboardEvent) => {
    if (event.key === 'Backspace' && index > 0 && !otp[index]) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleOtpValidation = () => {
    onVerifyOtp();
  };

  return (
    <Container>
      <CloseButton onClick={onClose}>X</CloseButton>
      <ImageContainer>
        <StyledImage src={OtpVerification} alt="withdraw password" />
      </ImageContainer>
      <ContentContainer>
        <TextContainer>
          <Box>
            <StyledTypographyH6 variant="h6">
              OTP Verification
            </StyledTypographyH6>
            <StyledTypographyBody2 variant="body2">
              Enter the OTP sent to -<b>abcxyz23@gmail.com</b>
            </StyledTypographyBody2>
          </Box>
          <Box display="flex" justifyContent="center">
            {otp.map((value, index) => (
              <OtpInput
                size="small"
                key={index}
                value={value}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                inputRef={(el) => (inputRefs.current[index] = el)}
              ></OtpInput>
            ))}
          </Box>

          <Box>
            <StyledTypographyBody2>00:120 Sec</StyledTypographyBody2>
            <StyledTypographyBody2 variant="body2">
              Don’t receive code ? <b>Re-send</b>
            </StyledTypographyBody2>
          </Box>
        </TextContainer>
        <SubmitButton
          onClick={handleOtpValidation}
          color="primary"
          variant="contained"
        >
          Verify
        </SubmitButton>
      </ContentContainer>
    </Container>
  );
};

export default VerifyOtp;
