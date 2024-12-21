import { useState, useEffect } from 'react';
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
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Slider,
  FormGroup,
  FormControlLabel,
  Switch,
  Drawer,
  Divider,
  Badge,
  OutlinedInput,
  Autocomplete,
  TextField,
  Snackbar,
  Alert,
} from '@mui/material';
import {
  Close as CloseIcon,
  Favorite as FavoriteIcon,
  Star as StarIcon,
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  FilterList as FilterIcon,
  Clear as ClearIcon,
  Refresh as RefreshIcon,
  ArrowBack as ArrowBackIcon,
  ArrowForward as ArrowForwardIcon,
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import { styled } from '@mui/material/styles';

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

const SKILLS = [
  'React', 'Node.js', 'Python', 'Java', 'TypeScript', 'AWS', 
  'Docker', 'Kubernetes', 'MongoDB', 'PostgreSQL', 'Vue.js', 
  'Angular', 'Flutter', 'React Native', 'Go', 'Ruby'
];

const LOCATIONS = [
  'Remote', 'San Francisco, CA', 'New York, NY', 'London, UK', 
  'Berlin, DE', 'Toronto, CA', 'Sydney, AU', 'Singapore, SG'
];

const EXPERIENCE_LEVELS = [
  'Entry Level', 'Junior', 'Mid-Level', 'Senior', 'Lead'
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

const StackContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  height: '600px',
  width: '100%',
  maxWidth: '400px',
  margin: '0 auto',
  perspective: '1500px',
}));

const SwipeIndicator = styled(Box)(({ direction, visible }) => ({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  left: direction === 'left' ? '20px' : 'auto',
  right: direction === 'right' ? '20px' : 'auto',
  padding: '8px 16px',
  borderRadius: '20px',
  backgroundColor: direction === 'left' ? '#ff4d4d99' : '#4caf5099',
  color: 'white',
  fontSize: '18px',
  fontWeight: 'bold',
  opacity: visible ? 1 : 0,
  transition: 'opacity 0.2s ease-in-out',
  zIndex: 1000,
}));

const SwipeGuide = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  textAlign: 'center',
  color: theme.palette.text.primary,
  backgroundColor: 'rgba(255, 255, 255, 0.95)',
  padding: '24px',
  borderRadius: '16px',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
  backdropFilter: 'blur(8px)',
  zIndex: 1000,
  maxWidth: '280px',
  animation: 'fadeIn 0.5s ease-out',
  '@keyframes fadeIn': {
    from: { opacity: 0, transform: 'translate(-50%, -40%)' },
    to: { opacity: 1, transform: 'translate(-50%, -50%)' },
  },
}));

const InstructionStep = ({ icon, text }) => (
  <Stack
    direction="row"
    alignItems="center"
    spacing={2}
    sx={{
      py: 1,
      px: 2,
      borderRadius: 2,
      backgroundColor: 'rgba(0, 0, 0, 0.02)',
      mb: 1,
      transition: 'transform 0.2s ease',
      '&:hover': {
        transform: 'translateX(8px)',
        backgroundColor: 'rgba(0, 0, 0, 0.04)',
      },
    }}
  >
    <Box sx={{ color: 'primary.main' }}>{icon}</Box>
    <Typography variant="body2">{text}</Typography>
  </Stack>
);

const Matches = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filters, setFilters] = useState({
    skills: [],
    location: 'all',
    experienceLevel: 'all',
    matchPercentage: [60, 100],
    availability: 'all',
    onlineOnly: false,
    projectType: 'all',
  });
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeFiltersCount, setActiveFiltersCount] = useState(0);
  const [filteredMatches, setFilteredMatches] = useState(developers);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
  const theme = useTheme();
  const [stack, setStack] = useState([]);
  const [direction, setDirection] = useState(null);
  const [dragX, setDragX] = useState(0);
  const [showGuide, setShowGuide] = useState(true);
  const [swipeMessage, setSwipeMessage] = useState('');

  useEffect(() => {
    setFilteredMatches(developers);
  }, []);

  useEffect(() => {
    let count = 0;
    if (filters.skills.length > 0) count++;
    if (filters.location !== 'all') count++;
    if (filters.experienceLevel !== 'all') count++;
    if (filters.matchPercentage[0] !== 60 || filters.matchPercentage[1] !== 100) count++;
    if (filters.availability !== 'all') count++;
    if (filters.onlineOnly) count++;
    if (filters.projectType !== 'all') count++;
    setActiveFiltersCount(count);
  }, [filters]);

  useEffect(() => {
    let filtered = [...developers];

    if (filters.skills.length > 0) {
      filtered = filtered.filter(dev =>
        filters.skills.every(skill => dev.techStack.includes(skill))
      );
    }

    if (filters.experienceLevel !== 'all') {
      filtered = filtered.filter(dev => {
        if (filters.experienceLevel === 'Entry Level') return dev.experience <= 2;
        if (filters.experienceLevel === 'Junior') return dev.experience > 2 && dev.experience <= 4;
        if (filters.experienceLevel === 'Mid-Level') return dev.experience > 4 && dev.experience <= 6;
        if (filters.experienceLevel === 'Senior') return dev.experience > 6 && dev.experience <= 8;
        if (filters.experienceLevel === 'Lead') return dev.experience > 8;
        return true;
      });
    }

    setFilteredMatches(filtered);

    if (filtered.length === 0 && activeFiltersCount > 0) {
      setSnackbar({
        open: true,
        message: 'No matches found with current filters',
        severity: 'info'
      });
    }
  }, [filters, activeFiltersCount]);

  useEffect(() => {
    setStack(filteredMatches);
    setCurrentIndex(0);
  }, [filteredMatches]);

  useEffect(() => {
    if (showGuide) {
      const timer = setTimeout(() => {
        setShowGuide(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showGuide]);

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleResetFilters = () => {
    setFilters({
      skills: [],
      location: 'all',
      experienceLevel: 'all',
      matchPercentage: [60, 100],
      availability: 'all',
      onlineOnly: false,
      projectType: 'all',
    });
    setFilteredMatches(developers);
    setSnackbar({
      open: true,
      message: 'Filters reset successfully',
      severity: 'success'
    });
  };

  const handleSwipe = (direction) => {
    setDirection(direction);
    
    const currentMatch = stack[currentIndex];
    let message = '';

    switch (direction) {
      case 'right':
        message = `You matched with ${currentMatch.name}!`;
        setSnackbar({
          open: true,
          message,
          severity: 'success'
        });
        break;
      case 'left':
        message = 'Maybe next time!';
        break;
      case 'superlike':
        message = `Super liked ${currentMatch.name}!`;
        setSnackbar({
          open: true,
          message,
          severity: 'info'
        });
        break;
      default:
        break;
    }

    setSwipeMessage(message);
    setTimeout(() => {
      setCurrentIndex(prev => prev + 1);
      setDirection(null);
      setSwipeMessage('');
    }, 500);
  };

  const handleDrag = (event, info) => {
    setDragX(info.offset.x);
    setShowGuide(false);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4" gutterBottom>
          Your Matches
        </Typography>
        <Button
          startIcon={
            <Badge badgeContent={activeFiltersCount} color="primary">
              <FilterIcon />
            </Badge>
          }
          onClick={() => setDrawerOpen(true)}
          variant="outlined"
        >
          Filters
        </Button>
      </Box>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        sx={{
          '& .MuiDrawer-paper': {
            width: { xs: '100%', sm: 400 },
            p: 3,
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h6">Filters</Typography>
          <IconButton onClick={handleResetFilters}>
            <ClearIcon />
          </IconButton>
        </Box>

        <Stack spacing={3}>
          <Autocomplete
            multiple
            options={SKILLS}
            value={filters.skills}
            onChange={(_, newValue) => handleFilterChange('skills', newValue)}
            renderInput={(params) => (
              <TextField {...params} label="Skills" placeholder="Select skills" />
            )}
          />

          <FormControl fullWidth>
            <InputLabel>Location</InputLabel>
            <Select
              value={filters.location}
              onChange={(e) => handleFilterChange('location', e.target.value)}
              label="Location"
            >
              <MenuItem value="all">All Locations</MenuItem>
              {LOCATIONS.map(location => (
                <MenuItem key={location} value={location}>{location}</MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl fullWidth>
            <InputLabel>Experience Level</InputLabel>
            <Select
              value={filters.experienceLevel}
              onChange={(e) => handleFilterChange('experienceLevel', e.target.value)}
              label="Experience Level"
            >
              <MenuItem value="all">All Levels</MenuItem>
              {EXPERIENCE_LEVELS.map(level => (
                <MenuItem key={level} value={level}>{level}</MenuItem>
              ))}
            </Select>
          </FormControl>

          <Box>
            <Typography gutterBottom>Match Percentage</Typography>
            <Slider
              value={filters.matchPercentage}
              onChange={(_, newValue) => handleFilterChange('matchPercentage', newValue)}
              valueLabelDisplay="auto"
              min={0}
              max={100}
              sx={{ mt: 2 }}
            />
          </Box>

          <FormControl fullWidth>
            <InputLabel>Availability</InputLabel>
            <Select
              value={filters.availability}
              onChange={(e) => handleFilterChange('availability', e.target.value)}
              label="Availability"
            >
              <MenuItem value="all">All</MenuItem>
              <MenuItem value="Full-time">Full-time</MenuItem>
              <MenuItem value="Part-time">Part-time</MenuItem>
              <MenuItem value="Contract">Contract</MenuItem>
            </Select>
          </FormControl>

          <FormControlLabel
            control={
              <Switch
                checked={filters.onlineOnly}
                onChange={(e) => handleFilterChange('onlineOnly', e.target.checked)}
              />
            }
            label="Show Online Only"
          />

          <Button
            variant="contained"
            onClick={() => setDrawerOpen(false)}
            fullWidth
          >
            Apply Filters
          </Button>
        </Stack>
      </Drawer>

      <Box sx={{ mb: 3 }}>
        <Typography variant="body1" color="text.secondary">
          Showing {filteredMatches.length} {filteredMatches.length === 1 ? 'match' : 'matches'}
          {activeFiltersCount > 0 && ` with ${activeFiltersCount} active ${activeFiltersCount === 1 ? 'filter' : 'filters'}`}
        </Typography>
      </Box>

      {filteredMatches.length === 0 ? (
        <Paper sx={{ p: 4, textAlign: 'center' }}>
          <Typography variant="h6" gutterBottom>
            No matches found
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            Try adjusting your filters or resetting them to see more results
          </Typography>
          <Button
            variant="outlined"
            onClick={handleResetFilters}
            startIcon={<ClearIcon />}
          >
            Reset Filters
          </Button>
        </Paper>
      ) : (
        <StackContainer>
          {showGuide && currentIndex === 0 && (
            <SwipeGuide>
              <Typography variant="h6" gutterBottom sx={{ mb: 3, fontWeight: 600 }}>
                How to Find Your Match
              </Typography>
              
              <Stack spacing={1}>
                <InstructionStep
                  icon={<ArrowBackIcon />}
                  text="Swipe left to pass"
                />
                <InstructionStep
                  icon={<ArrowForwardIcon />}
                  text="Swipe right to match"
                />
                <InstructionStep
                  icon={<StarIcon sx={{ color: 'primary.main' }} />}
                  text="Tap star to super like"
                />
              </Stack>

              <Button
                variant="text"
                size="small"
                onClick={() => setShowGuide(false)}
                sx={{ mt: 3, textTransform: 'none' }}
              >
                Got it
              </Button>
            </SwipeGuide>
          )}

          <SwipeIndicator 
            direction="left" 
            visible={dragX < -50}
          >
            PASS
          </SwipeIndicator>

          <SwipeIndicator 
            direction="right" 
            visible={dragX > 50}
          >
            MATCH
          </SwipeIndicator>

          <AnimatePresence>
            {stack.map((match, index) => {
              if (index < currentIndex || index >= currentIndex + 3) return null;
              
              const isTop = index === currentIndex;
              const zIndex = stack.length - index;

              return (
                <motion.div
                  key={match.id}
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    zIndex,
                  }}
                  initial={isTop ? { scale: 1 } : { scale: 0.95, y: -20 * (index - currentIndex) }}
                  animate={isTop ? {
                    scale: direction ? 1.1 : 1,
                    x: direction === 'left' ? -1000 : direction === 'right' ? 1000 : 0,
                    rotate: direction === 'left' ? -20 : direction === 'right' ? 20 : 0,
                  } : {
                    scale: 0.95,
                    y: -20 * (index - currentIndex),
                    x: 0,
                    rotate: 0,
                  }}
                  exit={{ 
                    x: direction === 'left' ? -1000 : 1000, 
                    rotate: direction === 'left' ? -20 : 20,
                    opacity: 0,
                  }}
                  transition={{ duration: 0.2 }}
                  drag={isTop ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  onDrag={handleDrag}
                  onDragEnd={(e, { offset, velocity }) => {
                    if (offset.x > 100) handleSwipe('right');
                    else if (offset.x < -100) handleSwipe('left');
                    setDragX(0);
                  }}
                >
                  <MatchCard
                    developer={match}
                    onSwipe={handleSwipe}
                    isTop={isTop}
                  />
                </motion.div>
              );
            })}
          </AnimatePresence>

          {currentIndex >= stack.length && (
            <Box
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                p: 3,
              }}
            >
              <Typography variant="h5" gutterBottom>
                No More Matches
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                You've seen all potential matches. Try adjusting your filters to see more.
              </Typography>
              <Button
                variant="contained"
                onClick={handleResetFilters}
                startIcon={<RefreshIcon />}
              >
                Reset Filters
              </Button>
            </Box>
          )}

          {currentIndex < stack.length && (
            <Stack
              direction="row"
              spacing={2}
              justifyContent="center"
              sx={{ mt: 3 }}
            >
              <IconButton
                size="large"
                onClick={() => handleSwipe('left')}
                sx={{
                  bgcolor: 'error.light',
                  color: 'white',
                  '&:hover': { bgcolor: 'error.main' },
                }}
              >
                <CloseIcon />
              </IconButton>
              <IconButton
                size="large"
                onClick={() => handleSwipe('right')}
                sx={{
                  bgcolor: 'success.light',
                  color: 'white',
                  '&:hover': { bgcolor: 'success.main' },
                }}
              >
                <FavoriteIcon />
              </IconButton>
            </Stack>
          )}
        </StackContainer>
      )}

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.severity}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Matches; 