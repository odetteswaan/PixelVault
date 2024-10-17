import React, { useState } from 'react';
import { Dialog } from '@mui/material';
import VerifyOtp from './VerifyOTP';
import ResetPassword from './ResetPassword';
import EnterEmail from './EnterEmail';
import SuccessMessage from './SuccessMessage';

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
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSendOtp = () => {
    setStep(2);
  };

  const handleVerifyOtp = () => {
    setStep(3);
  };

  const handleResetPassword = () => {
    HandleClose();
    setStep(1);
  };

  const HandleClose = () => {
    setShowForgotPassword(false);
  };

  const handleSuccessClose = () => {
    setShowSuccess(false);
  };

  return (
    <>
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
            setShowSuccess={setShowSuccess}
          />
        )}
      </Dialog>
      {showSuccess && (
        <Dialog open={showSuccess} onClose={handleSuccessClose} maxWidth="sm">
          <SuccessMessage onClose={handleSuccessClose} />
        </Dialog>
      )}
    </>
  );
};

export default ForgotPassword;
