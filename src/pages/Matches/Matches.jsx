import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  IconButton,
  Chip,
  Avatar,
  Stack,
  LinearProgress,
  Grid,
  Paper,
  Button,
  useTheme,
} from '@mui/material';
import {
  Close as CloseIcon,
  Favorite as FavoriteIcon,
  Star as StarIcon,
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  FilterList as FilterIcon,
} from '@mui/icons-material';

// Mock data for developers
const developers = [
  {
    id: 1,
    name: 'Sarah Chen',
    title: 'Full Stack Developer',
    avatar: '/path-to-avatar1.jpg',
    bio: 'Passionate about building scalable web applications and contributing to open source projects.',
    techStack: ['React', 'Node.js', 'TypeScript', 'AWS'],
    experience: 4,
    github: 'github.com/sarahchen',
    linkedin: 'linkedin.com/in/sarahchen',
    topSkills: [
      { name: 'React', level: 90 },
      { name: 'Node.js', level: 85 },
      { name: 'TypeScript', level: 80 },
    ],
    interests: ['Web3', 'AI/ML', 'Cloud Native'],
  },
  {
    id: 2,
    name: 'Alex Kumar',
    title: 'Frontend Developer',
    avatar: '/path-to-avatar2.jpg',
    bio: 'UI/UX enthusiast with a passion for creating beautiful and intuitive user interfaces.',
    techStack: ['Vue.js', 'React', 'Tailwind CSS'],
    experience: 3,
    github: 'github.com/alexk',
    linkedin: 'linkedin.com/in/alexk',
    topSkills: [
      { name: 'Vue.js', level: 95 },
      { name: 'React', level: 85 },
      { name: 'UI Design', level: 88 },
    ],
    interests: ['Design Systems', 'Animation', 'Accessibility'],
  },
];

const MatchCard = ({ developer, onSwipe }) => {
  const theme = useTheme();

  return (
    <Card 
      elevation={4}
      sx={{
        maxWidth: 600,
        mx: 'auto',
        position: 'relative',
        transition: 'transform 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-8px)',
        },
      }}
    >
      <CardContent sx={{ p: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <Avatar
            src={developer.avatar}
            sx={{ width: 80, height: 80, mr: 2 }}
          />
          <Box>
            <Typography variant="h5" gutterBottom>
              {developer.name}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {developer.title} • {developer.experience} years
            </Typography>
          </Box>
        </Box>

        <Typography variant="body1" sx={{ mb: 3 }}>
          {developer.bio}
        </Typography>

        <Typography variant="subtitle1" gutterBottom fontWeight="bold">
          Tech Stack
        </Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mb: 3 }}>
          {developer.techStack.map((tech) => (
            <Chip
              key={tech}
              label={tech}
              variant="outlined"
              size="small"
              sx={{ mb: 1 }}
            />
          ))}
        </Stack>

        <Typography variant="subtitle1" gutterBottom fontWeight="bold">
          Top Skills
        </Typography>
        <Box sx={{ mb: 3 }}>
          {developer.topSkills.map((skill) => (
            <Box key={skill.name} sx={{ mb: 2 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                <Typography variant="body2">{skill.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {skill.level}%
                </Typography>
              </Box>
              <LinearProgress
                variant="determinate"
                value={skill.level}
                sx={{ height: 6, borderRadius: 3 }}
              />
            </Box>
          ))}
        </Box>

        <Typography variant="subtitle1" gutterBottom fontWeight="bold">
          Interests
        </Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mb: 4 }}>
          {developer.interests.map((interest) => (
            <Chip
              key={interest}
              label={interest}
              color="primary"
              variant="outlined"
              size="small"
              sx={{ mb: 1 }}
            />
          ))}
        </Stack>

        <Stack direction="row" spacing={2} justifyContent="center">
          <IconButton
            size="large"
            onClick={() => onSwipe('left')}
            sx={{
              border: '2px solid',
              borderColor: 'error.light',
              p: 2,
              '&:hover': {
                backgroundColor: 'error.light',
                color: 'white',
              },
            }}
          >
            <CloseIcon sx={{ fontSize: 30 }} />
          </IconButton>
          <IconButton
            size="large"
            onClick={() => onSwipe('right')}
            sx={{
              border: '2px solid',
              borderColor: 'success.light',
              p: 2,
              '&:hover': {
                backgroundColor: 'success.light',
                color: 'white',
              },
            }}
          >
            <FavoriteIcon sx={{ fontSize: 30 }} />
          </IconButton>
          <IconButton
            size="large"
            onClick={() => onSwipe('superlike')}
            sx={{
              border: '2px solid',
              borderColor: 'primary.light',
              p: 2,
              '&:hover': {
                backgroundColor: 'primary.light',
                color: 'white',
              },
            }}
          >
            <StarIcon sx={{ fontSize: 30 }} />
          </IconButton>
        </Stack>
      </CardContent>
    </Card>
  );
};

const Matches = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSwipe = (direction) => {
    console.log(`Swiped ${direction} on developer ${developers[currentIndex].name}`);
    setCurrentIndex((prev) => Math.min(prev + 1, developers.length - 1));
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 4, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Find Your Perfect Match
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Swipe through profiles of talented developers who match your interests
        </Typography>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <MatchCard
            developer={developers[currentIndex]}
            onSwipe={handleSwipe}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper elevation={2} sx={{ p: 3, mb: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Typography variant="h6">
                Filters
              </Typography>
              <IconButton>
                <FilterIcon />
              </IconButton>
            </Box>
            <Stack spacing={2}>
              <Button variant="outlined" fullWidth>Tech Stack</Button>
              <Button variant="outlined" fullWidth>Experience Level</Button>
              <Button variant="outlined" fullWidth>Project Type</Button>
            </Stack>
          </Paper>

          <Paper elevation={2} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Recent Matches
            </Typography>
            <Stack spacing={2}>
              {developers.slice(0, 3).map((dev) => (
                <Box
                  key={dev.id}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    p: 1,
                    borderRadius: 1,
                    '&:hover': { bgcolor: 'action.hover' },
                  }}
                >
                  <Avatar src={dev.avatar} />
                  <Box>
                    <Typography variant="subtitle2">{dev.name}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {dev.title}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Matches; 