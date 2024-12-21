import {
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  Grid,
  Typography,
  LinearProgress,
  Card,
  CardContent,
  Avatar,
  Tooltip,
  Badge,
} from '@mui/material';
import {
  Code as CodeIcon,
  EmojiEvents as TrophyIcon,
  Psychology as MentorIcon,
  Group as TeamIcon,
  Favorite as MatchIcon,
  Star as StarIcon,
} from '@mui/icons-material';

const achievements = [
  {
    id: 1,
    title: 'Code Master',
    description: 'Complete 50 coding challenges',
    icon: <CodeIcon sx={{ fontSize: 40 }} />,
    progress: 35,
    total: 50,
    color: '#2196f3',
    unlocked: false,
  },
  {
    id: 2,
    title: 'Team Player',
    description: 'Collaborate on 10 projects',
    icon: <TeamIcon sx={{ fontSize: 40 }} />,
    progress: 8,
    total: 10,
    color: '#4caf50',
    unlocked: false,
  },
  {
    id: 3,
    title: 'Mentor',
    description: 'Help 20 developers with their projects',
    icon: <MentorIcon sx={{ fontSize: 40 }} />,
    progress: 20,
    total: 20,
    color: '#9c27b0',
    unlocked: true,
  },
  {
    id: 4,
    title: 'Perfect Match',
    description: 'Get 5 successful project matches',
    icon: <MatchIcon sx={{ fontSize: 40 }} />,
    progress: 3,
    total: 5,
    color: '#f44336',
    unlocked: false,
  },
];

const AchievementCard = ({ achievement }) => {
  const progress = (achievement.progress / achievement.total) * 100;

  return (
    <Card 
      sx={{ 
        height: '100%',
        position: 'relative',
        opacity: achievement.unlocked ? 1 : 0.7,
        transition: 'transform 0.2s, opacity 0.2s',
        '&:hover': {
          transform: 'translateY(-4px)',
        },
      }}
    >
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Avatar
            sx={{
              bgcolor: achievement.color,
              width: 56,
              height: 56,
              mr: 2,
            }}
          >
            {achievement.icon}
          </Avatar>
          <Box>
            <Typography variant="h6" gutterBottom>
              {achievement.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {achievement.description}
            </Typography>
          </Box>
        </Box>

        <Box sx={{ mt: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
            <Typography variant="body2" color="text.secondary">
              Progress
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {achievement.progress}/{achievement.total}
            </Typography>
          </Box>
          <LinearProgress
            variant="determinate"
            value={progress}
            sx={{
              height: 8,
              borderRadius: 4,
              bgcolor: 'grey.200',
              '& .MuiLinearProgress-bar': {
                bgcolor: achievement.color,
              },
            }}
          />
        </Box>

        {achievement.unlocked && (
          <Badge
            sx={{
              position: 'absolute',
              top: 16,
              right: 16,
            }}
          >
            <StarIcon sx={{ color: 'gold' }} />
          </Badge>
        )}
      </CardContent>
    </Card>
  );
};

const AchievementUnlockDialog = ({ achievement, open, onClose }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          background: 'linear-gradient(45deg, #2D46B9 30%, #14C38E 90%)',
          color: 'white',
        },
      }}
    >
      <DialogTitle sx={{ textAlign: 'center', pt: 4 }}>
        <TrophyIcon sx={{ fontSize: 60, color: 'gold', mb: 2 }} />
        <Typography variant="h4">Achievement Unlocked!</Typography>
      </DialogTitle>
      <DialogContent sx={{ textAlign: 'center', pb: 4 }}>
        <Avatar
          sx={{
            bgcolor: achievement?.color,
            width: 80,
            height: 80,
            mx: 'auto',
            mb: 2,
          }}
        >
          {achievement?.icon}
        </Avatar>
        <Typography variant="h5" gutterBottom>
          {achievement?.title}
        </Typography>
        <Typography variant="body1">
          {achievement?.description}
        </Typography>
      </DialogContent>
    </Dialog>
  );
};

const Achievements = () => {
  const [unlockedAchievement, setUnlockedAchievement] = useState(null);

  const handleCloseDialog = () => {
    setUnlockedAchievement(null);
  };

  // Simulate achievement unlock
  useEffect(() => {
    const checkAchievements = () => {
      const newUnlock = achievements.find(
        (a) => !a.unlocked && a.progress === a.total
      );
      if (newUnlock) {
        setUnlockedAchievement(newUnlock);
      }
    };

    checkAchievements();
  }, []);

  return (
    <Box>
      <Grid container spacing={3}>
        {achievements.map((achievement) => (
          <Grid item xs={12} sm={6} md={4} key={achievement.id}>
            <AchievementCard achievement={achievement} />
          </Grid>
        ))}
      </Grid>

      <AchievementUnlockDialog
        achievement={unlockedAchievement}
        open={Boolean(unlockedAchievement)}
        onClose={handleCloseDialog}
      />
    </Box>
  );
};

export default Achievements; 