import { useState } from 'react';
import {
  IconButton,
  Badge,
  Menu,
  MenuItem,
  Typography,
  Box,
  Avatar,
  Divider,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  CircularProgress,
} from '@mui/material';
import {
  Notifications as NotificationsIcon,
  Person as PersonIcon,
  Code as CodeIcon,
  Message as MessageIcon,
  Star as StarIcon,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

// Mock notifications data
const mockNotifications = [
  {
    id: 1,
    type: 'match',
    title: 'New Match!',
    message: 'Sarah Chen wants to collaborate with you',
    avatar: '/avatars/sarah.jpg',
    timestamp: '2 minutes ago',
    read: false,
    link: '/matches',
  },
  {
    id: 2,
    type: 'message',
    title: 'New Message',
    message: 'Alex Kumar: Here\'s the code snippet we discussed',
    avatar: '/avatars/alex.jpg',
    timestamp: '1 hour ago',
    read: false,
    link: '/chat',
  },
  {
    id: 3,
    type: 'project',
    title: 'Project Update',
    message: 'Your project "AI Chat App" received 5 new stars',
    avatar: null,
    timestamp: '3 hours ago',
    read: true,
    link: '/community',
  },
];

const NotificationMenu = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [notifications, setNotifications] = useState(mockNotifications);
  const [loading, setLoading] = useState(false);

  const unreadCount = notifications.filter(n => !n.read).length;

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
    // Mark notifications as read when opened
    setNotifications(prev =>
      prev.map(notification => ({ ...notification, read: true }))
    );
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNotificationClick = (notification) => {
    handleClose();
    navigate(notification.link);
  };

  const handleClearAll = () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setNotifications([]);
      setLoading(false);
      handleClose();
    }, 500);
  };

  const getNotificationIcon = (type) => {
    switch (type) {
      case 'match':
        return <PersonIcon color="primary" />;
      case 'message':
        return <MessageIcon color="info" />;
      case 'project':
        return <CodeIcon color="success" />;
      default:
        return <StarIcon color="warning" />;
    }
  };

  return (
    <>
      <IconButton
        color="inherit"
        onClick={handleOpen}
        sx={{
          animation: unreadCount > 0 ? 'pulse 2s infinite' : 'none',
          '@keyframes pulse': {
            '0%': { transform: 'scale(1)' },
            '50%': { transform: 'scale(1.1)' },
            '100%': { transform: 'scale(1)' },
          },
        }}
      >
        <Badge badgeContent={unreadCount} color="error">
          <NotificationsIcon />
        </Badge>
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
          sx: {
            width: 360,
            maxHeight: 480,
            overflow: 'auto',
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6">Notifications</Typography>
          {notifications.length > 0 && (
            <Button
              size="small"
              onClick={handleClearAll}
              disabled={loading}
            >
              Clear All
            </Button>
          )}
        </Box>

        <Divider />

        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
            <CircularProgress size={24} />
          </Box>
        ) : notifications.length === 0 ? (
          <Box sx={{ p: 4, textAlign: 'center' }}>
            <NotificationsIcon sx={{ fontSize: 48, color: 'text.disabled', mb: 2 }} />
            <Typography color="text.secondary">
              No notifications yet
            </Typography>
          </Box>
        ) : (
          <List sx={{ p: 0 }}>
            {notifications.map((notification) => (
              <ListItem
                key={notification.id}
                onClick={() => handleNotificationClick(notification)}
                sx={{
                  bgcolor: notification.read ? 'transparent' : 'action.hover',
                  cursor: 'pointer',
                  '&:hover': {
                    bgcolor: 'action.selected',
                  },
                }}
              >
                <ListItemAvatar>
                  {notification.avatar ? (
                    <Avatar src={notification.avatar} />
                  ) : (
                    <Avatar>
                      {getNotificationIcon(notification.type)}
                    </Avatar>
                  )}
                </ListItemAvatar>
                <ListItemText
                  primary={notification.title}
                  secondary={
                    <>
                      <Typography
                        component="span"
                        variant="body2"
                        color="text.primary"
                        sx={{ display: 'block' }}
                      >
                        {notification.message}
                      </Typography>
                      <Typography
                        component="span"
                        variant="caption"
                        color="text.secondary"
                      >
                        {notification.timestamp}
                      </Typography>
                    </>
                  }
                />
              </ListItem>
            ))}
          </List>
        )}
      </Menu>
    </>
  );
};

export default NotificationMenu; 