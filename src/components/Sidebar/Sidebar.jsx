import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Box,
  Typography,
  useTheme,
  Popper,
  Paper,
  Fade,
} from '@mui/material';
import {
  Home as HomeIcon,
  Person as PersonIcon,
  Favorite as FavoriteIcon,
  Chat as ChatIcon,
  Group as GroupIcon,
  Code as CodeIcon,
} from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';

const drawerWidth = 70;

const menuItems = [
  { 
    text: 'Home',
    icon: <HomeIcon />,
    path: '/',
    description: 'Dashboard & Overview'
  },
  { 
    text: 'Profile',
    icon: <PersonIcon />,
    path: '/profile',
    description: 'Your Developer Profile'
  },
  { 
    text: 'Matches',
    icon: <FavoriteIcon />,
    path: '/matches',
    description: 'Find Coding Partners'
  },
  { 
    text: 'Chat',
    icon: <ChatIcon />,
    path: '/chat',
    description: 'Message Your Matches'
  },
  { 
    text: 'Community',
    icon: <GroupIcon />,
    path: '/community',
    description: 'Connect & Collaborate'
  },
  { 
    text: 'Challenges',
    icon: <CodeIcon />,
    path: '/challenges',
    description: 'Coding Challenges'
  },
];

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (event, item) => {
    setAnchorEl(event.currentTarget);
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setAnchorEl(null);
    setHoveredItem(null);
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: 'background.paper',
          borderRight: '1px solid',
          borderColor: 'divider',
          mt: 8,
        },
      }}
    >
      <List sx={{ pt: 2 }}>
        {menuItems.map((item) => {
          const isSelected = location.pathname === item.path;
          
          return (
            <ListItem 
              key={item.text} 
              disablePadding 
              onMouseEnter={(e) => handleMouseEnter(e, item)}
              onMouseLeave={handleMouseLeave}
              sx={{ 
                display: 'flex',
                justifyContent: 'center',
                py: 1,
              }}
            >
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '50%',
                  backgroundColor: isSelected ? 'primary.main' : 'transparent',
                  transition: 'all 0.2s ease-in-out',
                  cursor: 'pointer',
                  '&:hover': {
                    backgroundColor: isSelected 
                      ? 'primary.dark'
                      : theme.palette.mode === 'light'
                        ? 'rgba(0, 0, 0, 0.04)'
                        : 'rgba(255, 255, 255, 0.08)',
                  },
                }}
                onClick={() => navigate(item.path)}
              >
                <Box
                  component="span"
                  sx={{
                    color: isSelected ? 'white' : 'text.primary',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 24,
                  }}
                >
                  {item.icon}
                </Box>
              </Box>
            </ListItem>
          );
        })}
      </List>

      <Popper
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        placement="right"
        transition
        sx={{ zIndex: theme.zIndex.drawer + 2 }}
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={200}>
            <Paper
              elevation={4}
              sx={{
                p: 2,
                ml: 1,
                width: 200,
                backgroundColor: theme.palette.mode === 'dark' 
                  ? 'background.paper' 
                  : 'white',
                borderRadius: 2,
              }}
            >
              {hoveredItem && (
                <>
                  <Typography variant="subtitle1" fontWeight={600}>
                    {hoveredItem.text}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {hoveredItem.description}
                  </Typography>
                </>
              )}
            </Paper>
          </Fade>
        )}
      </Popper>
    </Drawer>
  );
};

export default Sidebar; 