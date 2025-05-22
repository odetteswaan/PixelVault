import { Box, Button, Modal, styled, Typography } from '@mui/material';
import { customTheme } from 'src/themes/theme';
import { colors } from 'src/themes/colors';
import { useDispatch } from 'react-redux';
import { logout } from 'src/redux/login/loginSlice';
import { useNavigate } from 'react-router-dom';

const ModalWrapper = styled(Box)(() => ({
  position: 'fixed',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(22, 25, 32, 0.8)',
}));

const LogoutContainer = styled(Box)(() => ({
  width: '500px',
  maxWidth: '90%',
  height: '300px',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  padding: '20px',
  backgroundColor: colors.body.white,
  border: `1px solid ${colors.primary.grayishWhite}`,
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  position: 'fixed',
  zIndex: 1000,
  justifyContent: 'center',
  gap: '50px',
}));

const TextContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  textAlign: 'center',
  gap: '10px',
  '& .logout': {
    fontSize: customTheme.typography.fontSizes[16],
    fontFamily: customTheme.typography.fontFamily.main,
    fontWeight: customTheme.typography.fontWeights.semiBold,
    color: colors.headers.black,
  },
  '& .confirmation': {
    fontSize: customTheme.typography.fontSizes[10],
    fontFamily: customTheme.typography.fontFamily.main,
    fontWeight: customTheme.typography.fontWeights.semiBold,
    color: colors.greys.charcoalGray,
  },
});

const ButtonContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  width: '200px',
  '& .cancel-btn': {
    border: `1px solid ${colors.primary.metallicViolet}`,
    borderRadius: '5px',
    color: colors.greys.charcoalGray,
    textTransform: 'none',
  },
  '& .logout-btn': {
    background: colors.primary.metallicViolet,
    textTransform: 'none',
    '&:hover': {
      background: colors.primary.metallicViolet,
    },
    '&:active': {
      background: colors.primary.metallicViolet,
    },
  },
});

function Logout({ open, close }: { open: boolean; close: () => void }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  }
  return (
    <Modal
      open={open}
      onClose={close}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <ModalWrapper>
        <LogoutContainer>
          <TextContainer>
            <Typography variant="h4" className="logout">
              Logout
            </Typography>
            <Typography variant="h6" className="confirmation">
              Are you sure you want to logout?
            </Typography>
          </TextContainer>
          <ButtonContainer>
            <Button variant="outlined" className="cancel-btn" onClick={close}>
              Cancel
            </Button>
            <Button variant="contained" className="logout-btn" onClick={handleLogout}>
              Logout
            </Button>
          </ButtonContainer>
        </LogoutContainer>
      </ModalWrapper>
    </Modal>
  );
}

export default Logout;
