import { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  Avatar,
  Chip,
  Button,
  LinearProgress,
  Card,
  CardContent,
  IconButton,
  Stack,
  Link,
  CircularProgress,
} from '@mui/material';
import {
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  Edit as EditIcon,
  Code as CodeIcon,
  Star as StarIcon,
  Assessment as AssessmentIcon,
  Language as WebsiteIcon,
} from '@mui/icons-material';
import EditProfileDialog from '../../components/Profile/EditProfileDialog';

const techSkills = [
  { name: 'React', level: 90 },
  { name: 'Node.js', level: 85 },
  { name: 'TypeScript', level: 80 },
  { name: 'Python', level: 75 },
  { name: 'AWS', level: 70 },
];

const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce platform with real-time inventory management.',
    techStack: ['React', 'Node.js', 'MongoDB'],
    githubUrl: 'https://github.com/username/project1',
    liveUrl: 'https://project1.demo.com',
    stars: 45,
  },
  {
    id: 2,
    title: 'AI Chat Application',
    description: 'Real-time chat application with AI-powered language translation.',
    techStack: ['Python', 'TensorFlow', 'WebSocket'],
    githubUrl: 'https://github.com/username/project2',
    liveUrl: 'https://project2.demo.com',
    stars: 32,
  },
];

const achievements = [
  { label: 'Projects Completed', value: 15 },
  { label: 'Collaborations', value: 8 },
  { label: 'Code Reviews', value: 124 },
  { label: 'Reputation Score', value: '2.5K' },
];

const Profile = () => {
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'John Developer',
    title: 'Full Stack Developer | Open Source Contributor',
    bio: '',
    github: '#',
    linkedin: '#',
    website: '#',
    techStack: ['React', 'Node.js', 'TypeScript', 'Python', 'AWS'],
    availableForProjects: true,
    isMentor: true,
    isRemote: true,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  const handleEditClick = () => {
    setIsEditDialogOpen(true);
  };

  const handleEditClose = (updatedData) => {
    if (updatedData) {
      setProfileData(prev => ({
        ...prev,
        ...updatedData
      }));
      // Here you would typically make an API call to update the profile
    }
    setIsEditDialogOpen(false);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Profile Header */}
      <Paper elevation={2} sx={{ p: 4, mb: 4, position: 'relative' }}>
        <IconButton 
          sx={{ position: 'absolute', right: 16, top: 16 }}
          color="primary"
          onClick={handleEditClick}
        >
          <EditIcon />
        </IconButton>
        
        <Grid container spacing={4} alignItems="center">
          <Grid item>
            <Avatar
              sx={{ width: 120, height: 120 }}
              src="/path-to-profile-image.jpg"
              alt="Profile"
            />
          </Grid>
          <Grid item xs={12} sm>
            <Typography variant="h4" gutterBottom>
              {profileData.name}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" gutterBottom>
              {profileData.title}
            </Typography>
            <Typography variant="body1" color="text.primary" sx={{ mb: 2 }}>
              {profileData.bio}
            </Typography>
            <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
              <Button startIcon={<GitHubIcon />} variant="outlined" size="small" component={Link} href={profileData.github}>
                GitHub
              </Button>
              <Button startIcon={<LinkedInIcon />} variant="outlined" size="small" component={Link} href={profileData.linkedin}>
                LinkedIn
              </Button>
              <Button startIcon={<WebsiteIcon />} variant="outlined" size="small" component={Link} href={profileData.website}>
                Portfolio
              </Button>
            </Stack>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
              <Chip label={profileData.availableForProjects ? "Available for Projects" : "Not Available for Projects"} color={profileData.availableForProjects ? "success" : "default"} />
              <Chip label={profileData.isMentor ? "Mentor" : "Not Mentor"} variant="outlined" />
              <Chip label={profileData.isRemote ? "Remote" : "Not Remote"} variant="outlined" />
            </Box>
          </Grid>
        </Grid>
      </Paper>

      <Grid container spacing={4}>
        {/* Left Column */}
        <Grid item xs={12} md={4}>
          {/* Tech Skills */}
          <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
            <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <CodeIcon color="primary" />
              Tech Skills
            </Typography>
            <Box sx={{ mt: 2 }}>
              {techSkills.map((skill) => (
                <Box key={skill.name} sx={{ mb: 2 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2">{skill.name}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {skill.level}%
                    </Typography>
                  </Box>
                  <LinearProgress 
                    variant="determinate" 
                    value={skill.level}
                    sx={{ 
                      height: 6, 
                      borderRadius: 3,
                      backgroundColor: 'grey.200',
                      '& .MuiLinearProgress-bar': {
                        backgroundColor: 'primary.main',
                      }
                    }}
                  />
                </Box>
              ))}
            </Box>
          </Paper>

          {/* Stats */}
          <Paper elevation={2} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <AssessmentIcon color="primary" />
              Stats
            </Typography>
            <Grid container spacing={2} sx={{ mt: 1 }}>
              {achievements.map((stat) => (
                <Grid item xs={6} key={stat.label}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h5" color="primary.main">
                      {stat.value}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {stat.label}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>

        {/* Right Column */}
        <Grid item xs={12} md={8}>
          {/* Featured Projects */}
          <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
            <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <StarIcon color="primary" />
              Featured Projects
            </Typography>
            <Grid container spacing={3}>
              {projects.map((project) => (
                <Grid item xs={12} key={project.id}>
                  <Card variant="outlined">
                    <CardContent>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                        <Typography variant="h6" gutterBottom>
                          {project.title}
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                          <StarIcon sx={{ fontSize: 16, color: 'gold' }} />
                          <Typography variant="body2">{project.stars}</Typography>
                        </Box>
                      </Box>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        {project.description}
                      </Typography>
                      <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                        {project.techStack.map((tech) => (
                          <Chip key={tech} label={tech} size="small" />
                        ))}
                      </Stack>
                      <Stack direction="row" spacing={2}>
                        <Button 
                          startIcon={<GitHubIcon />} 
                          size="small" 
                          variant="outlined"
                          component={Link}
                          href={project.githubUrl}
                          target="_blank"
                        >
                          View Code
                        </Button>
                        <Button
                          startIcon={<WebsiteIcon />}
                          size="small"
                          variant="outlined"
                          component={Link}
                          href={project.liveUrl}
                          target="_blank"
                        >
                          Live Demo
                        </Button>
                      </Stack>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>
      </Grid>

      <EditProfileDialog
        open={isEditDialogOpen}
        onClose={handleEditClose}
        initialData={profileData}
      />
    </Container>
  );
};

export default Profile; 