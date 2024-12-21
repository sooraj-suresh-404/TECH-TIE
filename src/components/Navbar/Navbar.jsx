import { useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Avatar,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from '@mui/material';
import {
  Code as CodeIcon,
  Logout as LogoutIcon,
  Person as PersonIcon,
  Settings as SettingsIcon,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import NotificationMenu from './NotificationMenu';
import { useAuth } from '../../contexts/AuthContext';

const Navbar = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = useState(null);
  const [logoutDialog, setLogoutDialog] = useState(false);
  const { user, logout } = useAuth();

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogoutClick = () => {
    handleMenuClose();
    setLogoutDialog(true);
  };

  const handleLogoutConfirm = () => {
    setLogoutDialog(false);
    logout();
  };

  const menuItems = [
    {
      label: 'Profile',
      icon: <PersonIcon fontSize="small" />,
      onClick: () => {
        handleMenuClose();
        navigate('/profile');
      },
    },
    {
      label: 'Settings',
      icon: <SettingsIcon fontSize="small" />,
      onClick: () => {
        handleMenuClose();
        navigate('/settings');
      },
    },
    {
      label: 'Logout',
      icon: <LogoutIcon fontSize="small" />,
      onClick: handleLogoutClick,
    },
  ];

  const mobileMenu = (
    <Menu
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={handleMenuClose}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      {menuItems.map((item) => (
        <MenuItem
          key={item.label}
          onClick={item.onClick}
          sx={{
            gap: 1,
            minWidth: 150,
          }}
        >
          {item.icon}
          {item.label}
        </MenuItem>
      ))}
    </Menu>
  );

  return (
    <>
      <AppBar 
        position="fixed" 
        sx={{ 
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: (theme) => 
            theme.palette.mode === 'dark' 
              ? theme.palette.background.paper 
              : theme.palette.primary.main,
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          {isMobile ? (
            // Mobile Layout
            <>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography
                  variant="h6"
                  noWrap
                  sx={{
                    fontWeight: 700,
                    color: 'inherit',
                  }}
                >
                  TechTie
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <NotificationMenu />
                <IconButton
                  edge="end"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                  size="large"
                >
                  <Avatar 
                    sx={{ width: 32, height: 32 }}
                    src={user?.avatar}
                  >
                    {user?.name?.charAt(0)}
                  </Avatar>
                </IconButton>
              </Box>
            </>
          ) : (
            // Desktop Layout
            <>
              <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => navigate('/')}>
                <CodeIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                <Typography
                  variant="h6"
                  noWrap
                  sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontWeight: 700,
                    color: 'inherit',
                    textDecoration: 'none',
                  }}
                >
                  TechTie
                </Typography>
              </Box>

              <Box sx={{ flexGrow: 1 }} />

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <NotificationMenu />
                <IconButton
                  edge="end"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                  <Avatar 
                    sx={{ width: 32, height: 32 }}
                    src={user?.avatar}
                  >
                    {user?.name?.charAt(0)}
                  </Avatar>
                </IconButton>
              </Box>
            </>
          )}
          {mobileMenu}
        </Toolbar>
      </AppBar>

      {/* Logout Confirmation Dialog */}
      <Dialog
        open={logoutDialog}
        onClose={() => setLogoutDialog(false)}
        maxWidth="xs"
        fullWidth
      >
        <DialogTitle>Confirm Logout</DialogTitle>
        <DialogContent>
          Are you sure you want to logout?
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setLogoutDialog(false)}>
            Cancel
          </Button>
          <Button 
            onClick={handleLogoutConfirm}
            color="primary"
            variant="contained"
          >
            Logout
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Navbar; 