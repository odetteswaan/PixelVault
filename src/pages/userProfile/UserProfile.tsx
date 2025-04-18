import { Box, styled } from '@mui/material';
import Profile from 'src/components/userProfile/Profile';
import { customTheme } from 'src/themes/theme';

const UserProfileContainer = styled(Box)({
  display: 'flex',
  height: 'auto',
  width: 'auto',
});

const ContentWrapper = styled(Box)(({ theme }) => ({
  padding: customTheme.whitespace.spacings[16],
  [theme.breakpoints.down('sm')]: {
    padding: '0',
  },
}));

function UserProfile() {
  return (
    <UserProfileContainer>
      <ContentWrapper>
        <Profile />
      </ContentWrapper>
    </UserProfileContainer>
  );
}

export default UserProfile;
