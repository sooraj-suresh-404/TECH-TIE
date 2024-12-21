import { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  Card,
  CardContent,
  Button,
  Chip,
  LinearProgress,
  Avatar,
  Stack,
  Tab,
  Tabs,
  IconButton,
} from '@mui/material';
import {
  Code as CodeIcon,
  Timer as TimerIcon,
  Star as StarIcon,
  TrendingUp as TrendingUpIcon,
  WorkspacePremium as PremiumIcon,
  FilterList as FilterIcon,
} from '@mui/icons-material';

const challenges = [
  {
    id: 1,
    title: 'Build a Real-time Chat Component',
    difficulty: 'Intermediate',
    category: 'Frontend',
    points: 100,
    timeLimit: '2 hours',
    completions: 245,
    techStack: ['React', 'WebSocket', 'CSS'],
    description: 'Create a real-time chat component with typing indicators and message status.',
  },
  {
    id: 2,
    title: 'Optimize Database Queries',
    difficulty: 'Advanced',
    category: 'Backend',
    points: 150,
    timeLimit: '3 hours',
    completions: 128,
    techStack: ['SQL', 'Node.js', 'MongoDB'],
    description: 'Optimize a set of complex database queries to improve performance.',
  },
  {
    id: 3,
    title: 'Build a Responsive Dashboard',
    difficulty: 'Beginner',
    category: 'Frontend',
    points: 75,
    timeLimit: '1.5 hours',
    completions: 312,
    techStack: ['HTML', 'CSS', 'JavaScript'],
    description: 'Create a responsive admin dashboard with charts and data visualization.',
  },
];

const leaderboard = [
  {
    rank: 1,
    user: {
      name: 'Sarah Chen',
      avatar: '/path-to-avatar1.jpg',
      level: 32,
    },
    points: 12500,
    challenges: 45,
    badges: 12,
  },
  {
    rank: 2,
    user: {
      name: 'Alex Kumar',
      avatar: '/path-to-avatar2.jpg',
      level: 28,
    },
    points: 10800,
    challenges: 38,
    badges: 9,
  },
];

const ChallengeCard = ({ challenge }) => {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
          <Typography variant="h6" gutterBottom>
            {challenge.title}
          </Typography>
          <Chip
            label={challenge.difficulty}
            color={
              challenge.difficulty === 'Advanced' ? 'error' :
              challenge.difficulty === 'Intermediate' ? 'warning' : 'success'
            }
            size="small"
          />
        </Box>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {challenge.description}
        </Typography>

        <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
          {challenge.techStack.map((tech) => (
            <Chip key={tech} label={tech} size="small" variant="outlined" />
          ))}
        </Stack>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <TimerIcon sx={{ fontSize: 16, mr: 0.5 }} />
            <Typography variant="body2">{challenge.timeLimit}</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <StarIcon sx={{ fontSize: 16, mr: 0.5 }} />
            <Typography variant="body2">{challenge.points} pts</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <TrendingUpIcon sx={{ fontSize: 16, mr: 0.5 }} />
            <Typography variant="body2">{challenge.completions} completed</Typography>
          </Box>
        </Box>

        <Button variant="contained" fullWidth>
          Start Challenge
        </Button>
      </CardContent>
    </Card>
  );
};

const SkillProgress = () => {
  const skills = [
    { name: 'Frontend Development', progress: 75 },
    { name: 'Backend Development', progress: 60 },
    { name: 'Data Structures', progress: 85 },
    { name: 'Algorithms', progress: 70 },
  ];

  return (
    <Paper sx={{ p: 3, mb: 4 }}>
      <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <TrendingUpIcon color="primary" />
        Skill Progress
      </Typography>
      {skills.map((skill) => (
        <Box key={skill.name} sx={{ mb: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
            <Typography variant="body2">{skill.name}</Typography>
            <Typography variant="body2" color="text.secondary">
              Level {Math.floor(skill.progress / 10)}
            </Typography>
          </Box>
          <LinearProgress
            variant="determinate"
            value={skill.progress}
            sx={{ height: 6, borderRadius: 3 }}
          />
        </Box>
      ))}
    </Paper>
  );
};

const Challenges = () => {
  const [tabValue, setTabValue] = useState(0);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={4}>
        {/* Main Content */}
        <Grid item xs={12} md={8}>
          <Paper sx={{ mb: 4 }}>
            <Tabs
              value={tabValue}
              onChange={(e, newValue) => setTabValue(newValue)}
              variant="fullWidth"
            >
              <Tab icon={<CodeIcon />} label="All Challenges" />
              <Tab icon={<StarIcon />} label="My Progress" />
              <Tab icon={<PremiumIcon />} label="Leaderboard" />
            </Tabs>
          </Paper>

          {tabValue === 0 && (
            <Grid container spacing={3}>
              {challenges.map((challenge) => (
                <Grid item xs={12} key={challenge.id}>
                  <ChallengeCard challenge={challenge} />
                </Grid>
              ))}
            </Grid>
          )}

          {tabValue === 2 && (
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Top Performers
              </Typography>
              {leaderboard.map((entry) => (
                <Box
                  key={entry.rank}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    p: 2,
                    mb: 2,
                    borderRadius: 1,
                    bgcolor: 'background.default',
                  }}
                >
                  <Typography variant="h6" sx={{ minWidth: 30 }}>
                    #{entry.rank}
                  </Typography>
                  <Avatar src={entry.user.avatar} />
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="subtitle1">
                      {entry.user.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Level {entry.user.level}
                    </Typography>
                  </Box>
                  <Box sx={{ textAlign: 'right' }}>
                    <Typography variant="h6" color="primary.main">
                      {entry.points}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      points
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Paper>
          )}
        </Grid>

        {/* Sidebar */}
        <Grid item xs={12} md={4}>
          <SkillProgress />

          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <PremiumIcon color="primary" />
              Your Achievements
            </Typography>
            <Box sx={{ textAlign: 'center', py: 2 }}>
              <Typography variant="h3" color="primary.main" gutterBottom>
                1,250
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Total Points Earned
              </Typography>
              <Stack direction="row" spacing={1} justifyContent="center" sx={{ mt: 2 }}>
                <Chip icon={<StarIcon />} label="15 Challenges" />
                <Chip icon={<PremiumIcon />} label="5 Badges" />
              </Stack>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Challenges; 