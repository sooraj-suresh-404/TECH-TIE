import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Stack,
  Chip,
  Paper,
  useTheme,
} from '@mui/material';
import {
  Code as CodeIcon,
  Group as GroupIcon,
  Rocket as RocketIcon,
  Psychology as PsychologyIcon,
} from '@mui/icons-material';

const features = [
  {
    title: 'Smart Matching',
    description: 'Find developers who match your tech stack and project interests.',
    icon: <PsychologyIcon sx={{ fontSize: 40 }} />,
    color: '#2D46B9',
  },
  {
    title: 'Code Challenges',
    description: 'Improve your skills with daily coding challenges and competitions.',
    icon: <CodeIcon sx={{ fontSize: 40 }} />,
    color: '#14C38E',
  },
  {
    title: 'Project Collaboration',
    description: 'Join exciting projects or find team members for your ideas.',
    icon: <RocketIcon sx={{ fontSize: 40 }} />,
    color: '#FF6B6B',
  },
];

const techStacks = [
  'React', 'Node.js', 'Python', 'TypeScript', 'AWS', 'Docker',
  'MongoDB', 'GraphQL', 'Vue.js', 'Flutter', 'Go', 'Kubernetes'
];

const Home = () => {
  const theme = useTheme();

  return (
    <Box sx={{ bgcolor: 'background.default' }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
          color: 'white',
          pt: { xs: 8, md: 12 },
          pb: { xs: 8, md: 12 },
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', maxWidth: 800, mx: 'auto' }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                fontWeight: 700,
                mb: 2,
              }}
            >
              Connect with Tech Professionals
            </Typography>
            <Typography variant="h5" sx={{ mb: 4, opacity: 0.9 }}>
              Find your perfect tech partner for projects, mentorship, and collaboration
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
              <Button
                variant="contained"
                size="large"
                startIcon={<CodeIcon />}
                sx={{
                  bgcolor: 'white',
                  color: 'primary.main',
                  '&:hover': { bgcolor: 'grey.100' },
                  py: 1.5,
                  px: 4,
                }}
              >
                Get Started
              </Button>
              <Button
                variant="outlined"
                size="large"
                startIcon={<GroupIcon />}
                sx={{
                  borderColor: 'white',
                  color: 'white',
                  '&:hover': { borderColor: 'grey.100' },
                  py: 1.5,
                  px: 4,
                }}
              >
                Browse Developers
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {features.map((feature) => (
            <Grid item xs={12} md={4} key={feature.title}>
              <Card
                elevation={3}
                sx={{
                  height: '100%',
                  transition: 'transform 0.2s',
                  '&:hover': { transform: 'translateY(-8px)' },
                }}
              >
                <CardContent sx={{ textAlign: 'center', p: 4 }}>
                  <Box sx={{ color: feature.color, mb: 2 }}>
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

      {/* Tech Stack Section */}
      <Box sx={{ bgcolor: 'grey.50', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" align="center" gutterBottom>
            Popular Tech Stacks
          </Typography>
          <Typography variant="subtitle1" align="center" color="text.secondary" sx={{ mb: 4 }}>
            Connect with developers who share your tech interests
          </Typography>
          <Paper elevation={2} sx={{ p: 4 }}>
            <Grid container spacing={2} justifyContent="center">
              {techStacks.map((tech) => (
                <Grid item key={tech}>
                  <Chip
                    label={tech}
                    variant="outlined"
                    clickable
                    sx={{
                      borderRadius: 2,
                      '&:hover': {
                        bgcolor: 'primary.main',
                        color: 'white',
                      },
                    }}
                  />
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Container>
      </Box>

      {/* Stats Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {[
            { number: '10K+', label: 'Developers' },
            { number: '5K+', label: 'Projects' },
            { number: '1K+', label: 'Matches' },
            { number: '500+', label: 'Challenges' },
          ].map((stat) => (
            <Grid item xs={6} md={3} key={stat.label}>
              <Paper
                elevation={2}
                sx={{
                  p: 3,
                  textAlign: 'center',
                  transition: 'transform 0.2s',
                  '&:hover': { transform: 'translateY(-4px)' },
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    mb: 1,
                    background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {stat.number}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {stat.label}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Home; 