import { Box, useMediaQuery, useTheme } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import BottomNav from '../BottomNav/BottomNav';

const Layout = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <Navbar />
      {!isMobile && <Sidebar />}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          mt: 8,
          mb: isMobile ? 8 : 0,
          backgroundColor: 'background.default',
        }}
      >
        <Outlet />
      </Box>
      <BottomNav />
    </Box>
  );
};

export default Layout; 