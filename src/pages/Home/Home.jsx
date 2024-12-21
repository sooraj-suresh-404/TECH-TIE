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
  Avatar,
  useTheme,
} from '@mui/material';
import {
  Code as CodeIcon,
  Group as GroupIcon,
  Rocket as RocketIcon,
  Psychology as PsychologyIcon,
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  Star as StarIcon,
} from '@mui/icons-material';

const featuredDevelopers = [
  {
    name: 'Sarah Chen',
    role: 'Full Stack Developer',
    avatar: '/path-to-avatar1.jpg',
    skills: ['React', 'Node.js', 'AWS'],
    github: '#',
    linkedin: '#',
  },
  {
    name: 'Alex Kumar',
    role: 'Frontend Specialist',
    avatar: '/path-to-avatar2.jpg',
    skills: ['Vue.js', 'TypeScript', 'Figma'],
    github: '#',
    linkedin: '#',
  },
  {
    name: 'Maria Garcia',
    role: 'DevOps Engineer',
    avatar: '/path-to-avatar3.jpg',
    skills: ['Docker', 'Kubernetes', 'AWS'],
    github: '#',
    linkedin: '#',
  },
];

const successStories = [
  {
    title: 'AI-Powered Healthcare Platform',
    description: 'A team of 4 developers collaborated to build a revolutionary healthcare platform.',
    tech: ['Python', 'TensorFlow', 'React'],
    teamSize: 4,
    duration: '3 months',
  },
  {
    title: 'E-commerce Marketplace',
    description: 'Successfully launched a marketplace connecting artisans with customers globally.',
    tech: ['Node.js', 'React', 'MongoDB'],
    teamSize: 3,
    duration: '4 months',
  },
];

const Home = () => {
  const theme = useTheme();

  return (
    <Box sx={{ bgcolor: 'background.default' }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
          color: 'white',
          pt: { xs: 10, md: 15 },
          pb: { xs: 12, md: 18 },
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'url(/path-to-pattern.svg)',
            opacity: 0.1,
          },
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box sx={{ position: 'relative', zIndex: 1 }}>
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '2.5rem', md: '4rem' },
                    fontWeight: 800,
                    mb: 2,
                    textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
                  }}
                >
                  Connect. Code.
                  <br />
                  Create Together.
                </Typography>
                <Typography variant="h5" sx={{ mb: 4, opacity: 0.9, maxWidth: 500 }}>
                  Find your perfect tech partner for projects, mentorship, and collaboration
                </Typography>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <Button
                    variant="contained"
                    size="large"
                    startIcon={<CodeIcon />}
                    sx={{
                      bgcolor: 'white',
                      color: 'primary.main',
                      '&:hover': { bgcolor: 'grey.100' },
                      py: 2,
                      px: 4,
                      fontSize: '1.1rem',
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
                      py: 2,
                      px: 4,
                      fontSize: '1.1rem',
                    }}
                  >
                    Browse Developers
                  </Button>
                </Stack>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
              <Box
                component="img"
                src="/hero-illustration.png"
                alt="Collaboration"
                sx={{
                  width: '100%',
                  maxWidth: 600,
                  filter: 'drop-shadow(5px 5px 10px rgba(0,0,0,0.3))',
                  animation: 'float 6s ease-in-out infinite',
                  '@keyframes float': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                  },
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Featured Developers */}
      <Container maxWidth="lg" sx={{ mt: -8, position: 'relative', zIndex: 2 }}>
        <Grid container spacing={3}>
          {featuredDevelopers.map((dev) => (
            <Grid item xs={12} md={4} key={dev.name}>
              <Card
                elevation={4}
                sx={{
                  height: '100%',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                  },
                }}
              >
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Avatar
                      src={dev.avatar}
                      sx={{ width: 64, height: 64, mr: 2 }}
                    />
                    <Box>
                      <Typography variant="h6">{dev.name}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {dev.role}
                      </Typography>
                    </Box>
                  </Box>
                  <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                    {dev.skills.map((skill) => (
                      <Chip key={skill} label={skill} size="small" />
                    ))}
                  </Stack>
                  <Stack direction="row" spacing={1}>
                    <Button
                      startIcon={<GitHubIcon />}
                      variant="outlined"
                      size="small"
                      href={dev.github}
                    >
                      GitHub
                    </Button>
                    <Button
                      startIcon={<LinkedInIcon />}
                      variant="outlined"
                      size="small"
                      href={dev.linkedin}
                    >
                      LinkedIn
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Success Stories */}
      <Box sx={{ bgcolor: 'grey.50', py: { xs: 8, md: 12 }, mt: 8 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            align="center"
            gutterBottom
            sx={{
              fontWeight: 700,
              mb: 6,
              background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Success Stories
          </Typography>
          <Grid container spacing={4}>
            {successStories.map((story, index) => (
              <Grid item xs={12} md={6} key={story.title}>
                <Paper
                  elevation={4}
                  sx={{
                    p: 4,
                    height: '100%',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: 4,
                      height: '100%',
                      background: `linear-gradient(to bottom, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    },
                  }}
                >
                  <Typography variant="h5" gutterBottom>
                    {story.title}
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {story.description}
                  </Typography>
                  <Stack direction="row" spacing={1} sx={{ mb: 3 }}>
                    {story.tech.map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        size="small"
                        variant="outlined"
                      />
                    ))}
                  </Stack>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      color: 'text.secondary',
                    }}
                  >
                    <Typography variant="body2">
                      Team Size: {story.teamSize}
                    </Typography>
                    <Typography variant="body2">
                      Duration: {story.duration}
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Call to Action */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: { xs: 8, md: 12 },
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h3" gutterBottom sx={{ fontWeight: 700 }}>
            Ready to Start Collaborating?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
            Join thousands of developers building amazing projects together
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              bgcolor: 'white',
              color: 'primary.main',
              '&:hover': { bgcolor: 'grey.100' },
              py: 2,
              px: 6,
              fontSize: '1.1rem',
            }}
          >
            Join Now
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default Home; 