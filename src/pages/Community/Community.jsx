import { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  Avatar,
  Stack,
  Tab,
  Tabs,
  IconButton,
  TextField,
  InputAdornment,
} from '@mui/material';
import {
  Search as SearchIcon,
  Favorite as LikeIcon,
  Comment as CommentIcon,
  Share as ShareIcon,
  Event as EventIcon,
  Code as CodeIcon,
  TrendingUp as TrendingIcon,
} from '@mui/icons-material';

const posts = [
  {
    id: 1,
    type: 'project',
    title: 'Open Source React Component Library',
    author: {
      name: 'Sarah Chen',
      avatar: '/path-to-avatar1.jpg',
    },
    content: 'Building a modern React component library with TypeScript and Styled Components. Looking for contributors!',
    tags: ['React', 'TypeScript', 'Open Source'],
    likes: 128,
    comments: 45,
    timestamp: '2 hours ago',
  },
  {
    id: 2,
    type: 'discussion',
    title: 'Best Practices for GraphQL API Design',
    author: {
      name: 'Alex Kumar',
      avatar: '/path-to-avatar2.jpg',
    },
    content: 'What are your thoughts on implementing pagination in GraphQL? REST vs GraphQL for complex queries?',
    tags: ['GraphQL', 'API Design', 'Backend'],
    likes: 89,
    comments: 32,
    timestamp: '4 hours ago',
  },
];

const events = [
  {
    id: 1,
    title: 'React Meetup',
    date: '2024-03-15',
    time: '18:00',
    location: 'Virtual',
    attendees: 156,
  },
  {
    id: 2,
    title: 'Hackathon 2024',
    date: '2024-03-20',
    time: '09:00',
    location: 'Tech Hub',
    attendees: 300,
  },
];

const CommunityPost = ({ post }) => {
  return (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Avatar src={post.author.avatar} sx={{ mr: 2 }} />
          <Box>
            <Typography variant="subtitle1">
              {post.author.name}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {post.timestamp}
            </Typography>
          </Box>
        </Box>

        <Typography variant="h6" gutterBottom>
          {post.title}
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          {post.content}
        </Typography>

        <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
          {post.tags.map((tag) => (
            <Chip
              key={tag}
              label={tag}
              size="small"
              variant="outlined"
              clickable
            />
          ))}
        </Stack>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <IconButton size="small">
            <LikeIcon />
          </IconButton>
          <Typography variant="body2">{post.likes}</Typography>
          <IconButton size="small">
            <CommentIcon />
          </IconButton>
          <Typography variant="body2">{post.comments}</Typography>
          <IconButton size="small">
            <ShareIcon />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
};

const EventCard = ({ event }) => {
  return (
    <Card variant="outlined" sx={{ mb: 2 }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <EventIcon color="primary" sx={{ mr: 1 }} />
          <Typography variant="h6">{event.title}</Typography>
        </Box>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {new Date(event.date).toLocaleDateString()} at {event.time}
        </Typography>
        <Typography variant="body2" gutterBottom>
          📍 {event.location}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {event.attendees} attending
        </Typography>
        <Button variant="outlined" size="small" sx={{ mt: 1 }}>
          Join Event
        </Button>
      </CardContent>
    </Card>
  );
};

const Community = () => {
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
              <Tab icon={<TrendingIcon />} label="Trending" />
              <Tab icon={<CodeIcon />} label="Projects" />
              <Tab icon={<EventIcon />} label="Events" />
            </Tabs>
          </Paper>

          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search community..."
            sx={{ mb: 4 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />

          {tabValue === 0 && (
            <Box>
              {posts.map((post) => (
                <CommunityPost key={post.id} post={post} />
              ))}
            </Box>
          )}
        </Grid>

        {/* Sidebar */}
        <Grid item xs={12} md={4}>
          {/* Upcoming Events */}
          <Paper sx={{ p: 3, mb: 4 }}>
            <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <EventIcon color="primary" />
              Upcoming Events
            </Typography>
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
            <Button fullWidth variant="contained">
              View All Events
            </Button>
          </Paper>

          {/* Trending Topics */}
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <TrendingIcon color="primary" />
              Trending Topics
            </Typography>
            <Stack spacing={1}>
              {['#ReactJS', '#TypeScript', '#WebDev', '#OpenSource', '#CodingTips'].map((topic) => (
                <Chip
                  key={topic}
                  label={topic}
                  variant="outlined"
                  clickable
                  sx={{ justifyContent: 'flex-start' }}
                />
              ))}
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Community; 