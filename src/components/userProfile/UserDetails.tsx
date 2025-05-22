import { Avatar, Box, Button, styled, Typography } from '@mui/material';
import editImage from 'src/assets/EditImage.svg';
import { colors } from 'src/themes/colors';
import { customTheme } from 'src/themes/theme';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'src/redux/store';
import { useRef } from 'react';
import axios from 'axios';
import { getUserDetails } from 'src/redux/userProfile/userProfileSlice';
import { baseUrl, userEndPoint } from 'src/config';

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
  const user = useSelector((state:RootState) => state.login.user);
  const userDetails = useSelector((state:RootState) => state.user.userDetails);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch<AppDispatch>();

  const handleFileClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const token = localStorage.getItem('token');
    const file = e.target.files?.[0];
    if (!file || !user?.id || !token) return;

    const formData = new FormData();
    formData.append('user[profile_image]', file);
    try {
      const response = await axios.patch(
        `${baseUrl}${userEndPoint}${user.id}`,
        formData,
        {
          headers: {
            token: token
          }
        }
      );
      const updatedUrl = response.data.user?.profile_image_url
      if (updatedUrl) 
        await dispatch(getUserDetails(user.id)); 
    } catch (error) {
      console.error('Image upload failed', error);
    }
  };

  return (
    <ProfileContainer>
      <StyledAvatarContainer>
         <StyledAvatar src={userDetails?.profile_image_url} />
        <EditButton onClick={handleFileClick}>
          <StyledEditImage src={editImage} alt="Edit" />
        </EditButton>
         <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/*"
          style={{ display: 'none' }}
        />
      </StyledAvatarContainer>
      <Typography variant="h6">{userDetails?.full_name}</Typography>
      <Typography variant="body2" className="job-title">
        {userDetails?.designation}
      </Typography>
    </ProfileContainer>
  );
}

export default UserDetails;
