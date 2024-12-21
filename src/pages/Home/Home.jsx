import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Stack,
  useTheme,
  Avatar,
  AvatarGroup,
  Snackbar,
  Alert,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import { alpha } from '@mui/material/styles';
import {
  Code as CodeIcon,
  ArrowForward as ArrowForwardIcon,
  GitHub as GitHubIcon,
  Rocket as RocketIcon,
  Psychology as PsychologyIcon,
} from '@mui/icons-material';

const defaultAvatar = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIGZpbGw9IiNFNUU3RUIiLz48cGF0aCBkPSJNMTAwIDEwMEMxMTQuMzYgMTAwIDEyNiA4OC4zNiAxMjYgNzRDMTI2IDU5LjY0IDExNC4zNiA0OCAxMDAgNDhDODUuNjQgNDggNzQgNTkuNjQgNzQgNzRDNzQgODguMzYgODUuNjQgMTAwIDEwMCAxMDBaIiBmaWxsPSIjOUNBM0FGIi8+PHBhdGggZD0iTTEwMCAxMTJDNjYuODYgMTEyIDQwIDEzOC44NiA0MCAxNzJIMTYwQzE2MCAxMzguODYgMTMzLjE0IDExMiAxMDAgMTEyWiIgZmlsbD0iIzlDQTNBRiIvPjwvc3ZnPg==';

const features = [
  {
    title: 'Smart Matching',
    description: 'Find your perfect coding partner with our AI-powered matching system.',
    icon: <PsychologyIcon sx={{ fontSize: 40 }} />,
    color: '#FF6B6B',
  },
  {
    title: 'Live Collaboration',
    description: 'Code together in real-time with built-in IDE and version control.',
    icon: <CodeIcon sx={{ fontSize: 40 }} />,
    color: '#4ECDC4',
  },
  {
    title: 'Project Hub',
    description: 'Launch and join exciting projects that match your interests.',
    icon: <RocketIcon sx={{ fontSize: 40 }} />,
    color: '#45B7D1',
  },
];

const activeUsers = [
  { name: 'Sarah Chen', avatar: defaultAvatar, role: 'Full Stack' },
  { name: 'Alex Kumar', avatar: defaultAvatar, role: 'Frontend' },
  { name: 'Maria Garcia', avatar: defaultAvatar, role: 'DevOps' },
  { name: 'John Doe', avatar: defaultAvatar, role: 'Backend' },
  { name: 'Lisa Wang', avatar: defaultAvatar, role: 'Mobile' },
];

const codingIllustration = `data:image/svg+xml;base64,${btoa(`
<svg width="800" height="600" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="600" fill="#F8F9FD"/>
  
  <!-- Background Elements -->
  <circle cx="700" cy="100" r="150" fill="#2D46B915"/>
  <circle cx="100" cy="500" r="100" fill="#14C38E15"/>
  
  <!-- Code Window -->
  <rect x="150" y="100" width="500" height="400" rx="10" fill="white" stroke="#E0E0E0" stroke-width="2"/>
  <rect x="150" y="100" width="500" height="40" rx="10" fill="#F5F5F5"/>
  
  <!-- Window Controls -->
  <circle cx="180" cy="120" r="6" fill="#FF6B6B"/>
  <circle cx="200" cy="120" r="6" fill="#FFD93D"/>
  <circle cx="220" cy="120" r="6" fill="#6BCB77"/>
  
  <!-- Code Lines -->
  <rect x="180" y="180" width="200" height="12" rx="2" fill="#2D46B930"/>
  <rect x="180" y="210" width="300" height="12" rx="2" fill="#14C38E30"/>
  <rect x="180" y="240" width="250" height="12" rx="2" fill="#2D46B930"/>
  <rect x="180" y="270" width="280" height="12" rx="2" fill="#14C38E30"/>
  <rect x="180" y="300" width="220" height="12" rx="2" fill="#2D46B930"/>
  <rect x="180" y="330" width="260" height="12" rx="2" fill="#14C38E30"/>
  <rect x="180" y="360" width="240" height="12" rx="2" fill="#2D46B930"/>
  
  <!-- Decorative Elements -->
  <rect x="500" y="180" width="100" height="100" rx="10" fill="#2D46B915"/>
  <rect x="500" y="300" width="100" height="100" rx="10" fill="#14C38E15"/>
  
  <!-- Floating Elements -->
  <circle cx="650" cy="250" r="20" fill="#2D46B930"/>
  <circle cx="100" cy="150" r="15" fill="#14C38E30"/>
  <circle cx="700" cy="450" r="25" fill="#2D46B915"/>
</svg>
`)}`;

const Home = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [openDialog, setOpenDialog] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

  // Handle Start Coding button
  const handleStartCoding = () => {
    setOpenDialog(true);
  };

  // Handle GitHub Sign Up
  const handleGitHubSignUp = () => {
    // Implement GitHub OAuth logic here
    setSnackbar({
      open: true,
      message: 'GitHub integration coming soon!',
      severity: 'info'
    });
  };

  // Handle navigation to different sections
  const handleNavigation = (path) => {
    navigate(path);
  };

  // Handle feature card click
  const handleFeatureClick = (feature) => {
    switch (feature.title) {
      case 'Smart Matching':
        handleNavigation('/matches');
        break;
      case 'Live Collaboration':
        handleNavigation('/challenges');
        break;
      case 'Project Hub':
        handleNavigation('/community');
        break;
      default:
        break;
    }
  };

  // Handle active user click
  const handleUserClick = (user) => {
    setSnackbar({
      open: true,
      message: `Viewing ${user.name}'s profile coming soon!`,
      severity: 'info'
    });
  };

  return (
    <Box sx={{ overflow: 'hidden' }}>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          bgcolor: 'background.paper',
          pt: { xs: 8, md: 12 },
          pb: { xs: 12, md: 16 },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.15)} 0%, ${alpha(theme.palette.secondary.main, 0.15)} 100%)`,
            zIndex: 0,
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative' }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box>
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                    fontWeight: 800,
                    lineHeight: 1.2,
                    mb: 3,
                    background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Code Together,
                  <br />
                  Grow Together
                </Typography>
                <Typography
                  variant="h5"
                  color="text.secondary"
                  sx={{ 
                    mb: 2,
                    maxWidth: 600,
                    fontSize: { xs: '1.2rem', md: '1.4rem' },
                    lineHeight: 1.6,
                  }}
                >
                  Connect with skilled developers, build real-world projects,
                  and level up your coding journey.
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ 
                    mb: 4,
                    maxWidth: 500,
                    opacity: 0.8,
                  }}
                >
                  Join our community of 10,000+ developers and start building something amazing today.
                </Typography>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <Button
                    variant="contained"
                    size="large"
                    startIcon={<CodeIcon />}
                    onClick={handleStartCoding}
                    sx={{
                      py: 2,
                      px: 4,
                      fontSize: '1.1rem',
                      background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                      transition: 'transform 0.2s',
                      '&:hover': {
                        transform: 'scale(1.05)',
                      },
                    }}
                  >
                    Start Coding
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    endIcon={<ArrowForwardIcon />}
                    onClick={() => handleNavigation('/challenges')}
                    sx={{
                      py: 2,
                      px: 4,
                      fontSize: '1.1rem',
                      transition: 'transform 0.2s',
                      '&:hover': {
                        transform: 'scale(1.05)',
                      },
                    }}
                  >
                    Explore Projects
                  </Button>
                </Stack>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  position: 'relative',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: -40,
                    right: -40,
                    width: 80,
                    height: 80,
                    background: theme.palette.primary.main,
                    borderRadius: '50%',
                    opacity: 0.1,
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -20,
                    left: -20,
                    width: 40,
                    height: 40,
                    background: theme.palette.secondary.main,
                    borderRadius: '50%',
                    opacity: 0.1,
                  },
                }}
              >
                <Box
                  component="img"
                  src={codingIllustration}
                  alt="Collaboration"
                  sx={{
                    width: '100%',
                    maxWidth: 600,
                    height: 'auto',
                    filter: 'drop-shadow(0px 10px 20px rgba(0,0,0,0.1))',
                    animation: 'float 6s ease-in-out infinite',
                    '@keyframes float': {
                      '0%, 100%': { transform: 'translateY(0)' },
                      '50%': { transform: 'translateY(-20px)' },
                    },
                    borderRadius: 2,
                    backgroundColor: 'background.paper',
                    p: 2,
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Active Users Section */}
      <Container maxWidth="lg" sx={{ mt: -8, position: 'relative', zIndex: 1 }}>
        <Card
          elevation={4}
          sx={{
            p: 4,
            background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${alpha(
              theme.palette.primary.main,
              0.05
            )} 100%)`,
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: 'translateY(-4px)',
            },
          }}
        >
          <Grid container alignItems="center" spacing={3}>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom>
                Active Developers
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Join our growing community of passionate developers
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Stack direction="row" alignItems="center" spacing={2}>
                <AvatarGroup max={5}>
                  {activeUsers.map((user) => (
                    <Avatar
                      key={user.name}
                      alt={user.name}
                      src={user.avatar}
                      onClick={() => handleUserClick(user)}
                      sx={{
                        width: 48,
                        height: 48,
                        border: `2px solid ${theme.palette.background.paper}`,
                        cursor: 'pointer',
                        transition: 'transform 0.2s',
                        '&:hover': {
                          transform: 'scale(1.1)',
                        },
                      }}
                    />
                  ))}
                </AvatarGroup>
                <Box sx={{ flexGrow: 1 }}>
                  <Typography variant="subtitle1" fontWeight={600}>
                    1,234+ Developers
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Online now
                  </Typography>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Card>
      </Container>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 12 }}>
        <Grid container spacing={4}>
          {features.map((feature) => (
            <Grid item xs={12} md={4} key={feature.title}>
              <Card
                onClick={() => handleFeatureClick(feature)}
                sx={{
                  height: '100%',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'visible',
                  background: alpha(feature.color, 0.05),
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: -10,
                    left: -10,
                    right: -10,
                    bottom: -10,
                    border: `2px solid ${feature.color}`,
                    opacity: 0.1,
                    borderRadius: 4,
                    transition: 'all 0.3s ease',
                  },
                  '&:hover::before': {
                    top: -15,
                    left: -15,
                    right: -15,
                    bottom: -15,
                    opacity: 0.2,
                  },
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box
                    sx={{
                      mb: 3,
                      color: feature.color,
                      transform: 'rotate(-10deg)',
                    }}
                  >
                    {feature.icon}
                  </Box>
                  <Typography variant="h5" gutterBottom>
                    {feature.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* CTA Section */}
      <Box
        sx={{
          bgcolor: 'background.paper',
          py: 12,
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `linear-gradient(135deg, ${theme.palette.primary.main}10 0%, ${theme.palette.secondary.main}10 100%)`,
          },
        }}
      >
        <Container maxWidth="md">
          <Box textAlign="center">
            <Typography
              variant="h2"
              gutterBottom
              sx={{
                fontWeight: 700,
                background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Ready to Start Building?
            </Typography>
            <Typography variant="h5" color="text.secondary" paragraph>
              Join thousands of developers creating amazing projects together
            </Typography>
            <Stack direction="row" spacing={2} justifyContent="center">
              <Button
                variant="contained"
                size="large"
                startIcon={<GitHubIcon />}
                onClick={handleGitHubSignUp}
                sx={{
                  py: 2,
                  px: 4,
                  bgcolor: 'grey.900',
                  '&:hover': { bgcolor: 'grey.800' },
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                }}
              >
                Sign up with GitHub
              </Button>
              <Button
                variant="outlined"
                size="large"
                onClick={() => handleNavigation('/community')}
                sx={{
                  py: 2,
                  px: 4,
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                }}
              >
                Learn More
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>

      {/* Get Started Dialog */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Get Started with TechTie</DialogTitle>
        <DialogContent>
          <Typography>Choose how you want to begin:</Typography>
          <Stack spacing={2} sx={{ mt: 2 }}>
            <Button
              variant="contained"
              startIcon={<CodeIcon />}
              onClick={() => {
                setOpenDialog(false);
                handleNavigation('/challenges');
              }}
            >
              Start with Challenges
            </Button>
            <Button
              variant="outlined"
              startIcon={<RocketIcon />}
              onClick={() => {
                setOpenDialog(false);
                handleNavigation('/matches');
              }}
            >
              Find a Coding Partner
            </Button>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Close</Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar for notifications */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Home; 