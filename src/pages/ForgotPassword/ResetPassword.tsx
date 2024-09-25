import React, { useState } from 'react';
import {
  Button,
  Typography,
  Box,
  styled,
  TextField,
  InputAdornment,
  IconButton,
} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { colors } from 'src/themes/colors';
import { theme } from 'src/themes/theme';
import UpdatePassword from '../../assets/UpdatePassword.svg';

interface ResetPasswordProps {
  newPassword: string;
  setNewPassword: (newPassword: string) => void;
  onResetPassword: () => void;
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
  right: 10,
  color: '#6c6c6c',
});

const ImageContainer = styled(Box)({
  height: '180px',
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
  color: '#5A5A5A',
});

const StyledBox = styled(Box)({
  width: '100%',
});

const StyledLabel = styled(Typography)({
  fontFamily: theme.typography.fontFamily.main,
  color: colors.body.lightGrey,
  marginBottom: theme.whitespace.spacings[2],
});

const StyledTextField = styled(TextField)({
  marginBottom: theme.whitespace.spacings[8],
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

const ResetPassword: React.FC<ResetPasswordProps> = ({
  newPassword,
  setNewPassword,
  onResetPassword,
  onClose,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const handleResetPassword = () => {
    if (!passwordRegex.test(newPassword)) {
      setError('password must be valid');
      return error;
    }
    if (newPassword !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    setError('');
    onResetPassword();
  };

  return (
    <Container>
      <CloseButton onClick={onClose}>X</CloseButton>
      <ImageContainer>
        <StyledImage src={UpdatePassword} alt="Update Password" />
      </ImageContainer>
      <ContentContainer>
        <TextContainer>
          <Box>
            <StyledTypographyH6 variant="h6">
              Enter New Password
            </StyledTypographyH6>
            <StyledTypographyBody2 variant="body2">
              Create a new password. Ensure it differs from previous ones for
              security.
            </StyledTypographyBody2>
          </Box>
        </TextContainer>
        <StyledBox>
          <StyledLabel variant="body2">Your New Password</StyledLabel>
          <StyledTextField
            size="small"
            placeholder="Enter your new password"
            type={showPassword ? 'text' : 'password'}
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword((prev) => !prev)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Box>
            <StyledLabel variant="body2">Confirm Password</StyledLabel>
            <StyledTextField
              size="small"
              placeholder="Re-enter your password"
              type={showPassword ? 'text' : 'password'}
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword((prev) => !prev)}
                      edge="end"
                    >
                      {showPassword ? (
                        <VisibilityIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </StyledBox>
        <SubmitButton
          onClick={handleResetPassword}
          color="primary"
          variant="contained"
        >
          Update Password
        </SubmitButton>
      </ContentContainer>
    </Container>
  );
};

export default ResetPassword;
