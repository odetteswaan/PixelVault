import { useState, useRef, useEffect } from 'react';
import {
  Box,
  Typography,
  Paper,
  List,
  ListItem,
  IconButton,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import notificationLogo from 'src/assets/notification-bing.svg';
import { colors } from 'src/themes/colors';
import { customTheme } from 'src/themes/theme';

interface Notification {
  title: string;
  message: string;
  time: string;
  read: boolean;
}

const NotificationBox = styled(Paper)(({ theme }) => ({
  position: 'absolute',
  top: '50px',
  right: '10px',
  width: '400px',
  maxHeight: '400px',
  overflowY: 'auto',
  padding: theme.spacing(2),
  boxShadow: theme.shadows[3],
  borderRadius: '8px',
  zIndex: 10,
  border: `1px splid ${colors.greys.lightGrey}`,
  [theme.breakpoints.down('sm')]: {
    width: '80vw',
    right: '-50px',
  },
}));

const Heading = styled(Typography)({
  fontSize: '15px',
  fontFamily: customTheme.typography.fontFamily.main,
  fontWeight: customTheme.typography.fontWeights.semiBold,
  color: colors.headers.charcoalBlack,
});

const Message = styled(Typography)({
  fontSize: '13px',
  fontFamily: customTheme.typography.fontFamily.main,
  fontWeight: customTheme.typography.fontWeights.default,
  color: colors.greys.slateGrey,
});

const NotificationItem = styled(ListItem)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  borderBottom: `1px solid ${theme.palette.divider}`,
  paddingBottom: theme.spacing(1),
  paddingTop: theme.spacing(1),
}));

const MarkAsRead = styled(Typography)(({ theme }) => ({
  color: '#5900B3',
  cursor: 'pointer',
  textAlign: 'center',
  paddingTop: theme.spacing(1),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

function NotificationDropdown() {
  const [open, setOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const notifications: Notification[] = [
    {
      title: 'New Asset Added',
      message: 'Congratulations! You have added a new asset.',
      time: '3 min ago',
      read: false,
    },
    {
      title: 'New Employee Login',
      message: 'Your new employee just logged in',
      time: '3 min ago',
      read: false,
    },
    {
      title: 'New Employee Login',
      message: 'Your new employee just logged in',
      time: '3 min ago',
      read: false,
    },
    {
      title: 'New Asset Added',
      message: 'Congratulations! You have added a new asset.',
      time: '3 min ago',
      read: true,
    },
  ];

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <Box sx={{ position: 'relative' }}>
      <IconButton onClick={handleToggle}>
        <img src={notificationLogo} alt="Notifications" />
      </IconButton>
      {open && (
        <NotificationBox ref={dropdownRef}>
          <List>
            {notifications.map((notification, index) => (
              <NotificationItem key={index}>
                <Box>
                  <Heading>{notification.title}</Heading>
                  <Message>{notification.message}</Message>
                </Box>
                <Box>
                  <Typography
                    variant="caption"
                    color="textSecondary"
                    sx={{ fontFamily: 'Urbanist' }}
                  >
                    {notification.time}
                  </Typography>
                </Box>
              </NotificationItem>
            ))}
          </List>
          <MarkAsRead variant="body2">
            Mark all as read <ArrowForwardIcon />
          </MarkAsRead>
        </NotificationBox>
      )}
    </Box>
  );
}

export default NotificationDropdown;
