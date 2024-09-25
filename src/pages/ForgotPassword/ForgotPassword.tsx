import React, { useState } from 'react';
import { Dialog } from '@mui/material';
import VerifyOtp from './VerifyOTP';
import ResetPassword from './ResetPassword';
import EnterEmail from './EnterEmail';

interface ForgotPasswordProps {
  open: boolean;
  setShowForgotPassword: React.Dispatch<React.SetStateAction<boolean>>;
}

const ForgotPassword: React.FC<ForgotPasswordProps> = ({
  open,
  setShowForgotPassword,
}) => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState<string[]>(['', '', '', '']);
  const [newPassword, setNewPassword] = useState('');

  const handleSendOtp = () => {
    console.log(`Sending OTP to ${email}`);
    setStep(2);
  };

  const handleVerifyOtp = () => {
    console.log(`Verifying OTP ${otp}`);
    setStep(3);
  };

  const handleResetPassword = () => {
    console.log(`Resetting password to ${newPassword}`);
    HandleClose();
  };

  const HandleClose = () => {
    setShowForgotPassword(false);
  };

  return (
    <Dialog open={open} onClose={HandleClose} maxWidth="sm">
      {step === 1 && (
        <EnterEmail
          email={email}
          setEmail={setEmail}
          onSendOtp={handleSendOtp}
          onClose={HandleClose}
        />
      )}
      {step === 2 && (
        <VerifyOtp
          otp={otp}
          setOtp={setOtp}
          onVerifyOtp={handleVerifyOtp}
          onClose={HandleClose}
        />
      )}
      {step === 3 && (
        <ResetPassword
          newPassword={newPassword}
          setNewPassword={setNewPassword}
          onResetPassword={handleResetPassword}
          onClose={HandleClose}
        />
      )}
    </Dialog>
  );
};

export default ForgotPassword;
