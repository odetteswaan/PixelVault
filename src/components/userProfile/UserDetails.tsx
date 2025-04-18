import { Avatar, Box, Button, styled, Typography } from '@mui/material';
import editImage from '../../assets/EditImage.svg';
import { colors } from 'src/themes/colors';
import { customTheme } from 'src/themes/theme';

const ProfileContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  fontFamily: customTheme.typography.fontFamily.main,
  '.job-title': {
    color: `${colors.primary.metallicViolet}`,
  },
  [theme.breakpoints.down('md')]: {
    width: '100%',
    marginBottom: '20px',
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    marginBottom: '20px',
  },
}));

const StyledAvatarContainer = styled(Box)({
  position: 'relative',
});

const StyledAvatar = styled(Avatar)({
  width: '150px',
  height: '150px',
  marginBottom: '10px',
});

const StyledEditImage = styled('img')({
  width: '30px',
  height: '30px',
});

const EditButton = styled(Button)({
  position: 'absolute',
  bottom: '1px',
  right: '1px',
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
});

function UserDetails() {
  return (
    <ProfileContainer>
      <StyledAvatarContainer>
        <StyledAvatar />
        <EditButton>
          <StyledEditImage src={editImage} alt="Edit" />
        </EditButton>
      </StyledAvatarContainer>
      <Typography variant="h6">Camero Jorden</Typography>
      <Typography variant="body2" className="job-title">
        Software Designer
      </Typography>
    </ProfileContainer>
  );
}

export default UserDetails;
