import { useState } from 'react';
import {
  Box,
  Container,
  Paper,
  Typography,
  Divider,
  Switch,
  FormGroup,
  FormControlLabel,
  Slider,
  Select,
  MenuItem,
  TextField,
  Button,
  Grid,
  Stack,
  Alert,
  Tab,
  Tabs,
  Avatar,
  IconButton,
} from '@mui/material';
import {
  Notifications as NotificationsIcon,
  Visibility as VisibilityIcon,
  Security as SecurityIcon,
  Tune as PreferencesIcon,
  PhotoCamera as CameraIcon,
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
} from '@mui/icons-material';

const Settings = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [settings, setSettings] = useState({
    notifications: {
      matches: true,
      messages: true,
      challenges: true,
      projectUpdates: true,
      newsletter: false,
    },
    privacy: {
      profileVisibility: 'public',
      showOnlineStatus: true,
      showActivity: true,
      showEmail: false,
    },
    matching: {
      experienceRange: [0, 10],
      remoteOnly: false,
      availableForHiring: true,
      projectDuration: 'any',
    },
    profile: {
      name: 'John Developer',
      title: 'Full Stack Developer',
      email: 'john@example.com',
      github: 'github.com/johndoe',
      linkedin: 'linkedin.com/in/johndoe',
      bio: 'Passionate about building scalable web applications.',
    }
  });

  const [saveStatus, setSaveStatus] = useState(null);

  const handleChange = (section, key) => (event) => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    setSettings(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [key]: value
      }
    }));
  };

  const handleSaveSettings = async () => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSaveStatus({ type: 'success', message: 'Settings saved successfully!' });
    } catch (error) {
      setSaveStatus({ type: 'error', message: 'Failed to save settings. Please try again.' });
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Paper sx={{ mb: 3 }}>
        <Tabs
          value={activeTab}
          onChange={(e, newValue) => setActiveTab(newValue)}
          variant="scrollable"
          scrollButtons="auto"
          sx={{ borderBottom: 1, borderColor: 'divider' }}
        >
          <Tab icon={<PreferencesIcon />} label="Profile" />
          <Tab icon={<NotificationsIcon />} label="Notifications" />
          <Tab icon={<VisibilityIcon />} label="Privacy" />
          <Tab icon={<SecurityIcon />} label="Security" />
        </Tabs>
      </Paper>

      {saveStatus && (
        <Alert 
          severity={saveStatus.type} 
          sx={{ mb: 3 }}
          onClose={() => setSaveStatus(null)}
        >
          {saveStatus.message}
        </Alert>
      )}

      {/* Profile Settings */}
      {activeTab === 0 && (
        <Paper sx={{ p: 3 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sx={{ textAlign: 'center' }}>
              <Box sx={{ position: 'relative', display: 'inline-block' }}>
                <Avatar
                  sx={{ width: 120, height: 120 }}
                  src="/path-to-avatar.jpg"
                />
                <IconButton
                  sx={{
                    position: 'absolute',
                    right: -8,
                    bottom: -8,
                    backgroundColor: 'primary.main',
                    '&:hover': { backgroundColor: 'primary.dark' },
                    color: 'white',
                  }}
                >
                  <CameraIcon />
                </IconButton>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Full Name"
                value={settings.profile.name}
                onChange={handleChange('profile', 'name')}
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Professional Title"
                value={settings.profile.title}
                onChange={handleChange('profile', 'title')}
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Email"
                value={settings.profile.email}
                onChange={handleChange('profile', 'email')}
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="GitHub Profile"
                value={settings.profile.github}
                onChange={handleChange('profile', 'github')}
                InputProps={{
                  startAdornment: <GitHubIcon sx={{ mr: 1, color: 'text.secondary' }} />,
                }}
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="LinkedIn Profile"
                value={settings.profile.linkedin}
                onChange={handleChange('profile', 'linkedin')}
                InputProps={{
                  startAdornment: <LinkedInIcon sx={{ mr: 1, color: 'text.secondary' }} />,
                }}
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                multiline
                rows={4}
                label="Bio"
                value={settings.profile.bio}
                onChange={handleChange('profile', 'bio')}
              />
            </Grid>
          </Grid>
        </Paper>
      )}

      {/* Notification Settings */}
      {activeTab === 1 && (
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            Notification Settings
          </Typography>
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  checked={settings.notifications.matches}
                  onChange={handleChange('notifications', 'matches')}
                />
              }
              label="New Matches"
            />
            <FormControlLabel
              control={
                <Switch
                  checked={settings.notifications.messages}
                  onChange={handleChange('notifications', 'messages')}
                />
              }
              label="Messages"
            />
            <FormControlLabel
              control={
                <Switch
                  checked={settings.notifications.challenges}
                  onChange={handleChange('notifications', 'challenges')}
                />
              }
              label="New Challenges"
            />
            <FormControlLabel
              control={
                <Switch
                  checked={settings.notifications.projectUpdates}
                  onChange={handleChange('notifications', 'projectUpdates')}
                />
              }
              label="Project Updates"
            />
          </FormGroup>
        </Paper>
      )}

      {/* Privacy Settings */}
      {activeTab === 2 && (
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            Privacy Settings
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Select
                    value={settings.privacy.profileVisibility}
                    onChange={handleChange('privacy', 'profileVisibility')}
                    fullWidth
                  >
                    <MenuItem value="public">Public</MenuItem>
                    <MenuItem value="connections">Connections Only</MenuItem>
                    <MenuItem value="private">Private</MenuItem>
                  </Select>
                }
                label="Profile Visibility"
                labelPlacement="top"
                sx={{ width: '100%' }}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Switch
                    checked={settings.privacy.showOnlineStatus}
                    onChange={handleChange('privacy', 'showOnlineStatus')}
                  />
                }
                label="Show Online Status"
              />
            </Grid>
          </Grid>
        </Paper>
      )}

      {/* Security Settings */}
      {activeTab === 3 && (
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            Security Settings
          </Typography>
          <Stack spacing={3}>
            <Box>
              <Typography variant="subtitle1" gutterBottom>
                Change Password
              </Typography>
              <TextField
                type="password"
                label="Current Password"
                fullWidth
                sx={{ mb: 2 }}
              />
              <TextField
                type="password"
                label="New Password"
                fullWidth
                sx={{ mb: 2 }}
              />
              <TextField
                type="password"
                label="Confirm New Password"
                fullWidth
              />
            </Box>
            <Box>
              <Typography variant="subtitle1" gutterBottom>
                Two-Factor Authentication
              </Typography>
              <Button variant="outlined">
                Enable 2FA
              </Button>
            </Box>
          </Stack>
        </Paper>
      )}

      <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          variant="contained"
          onClick={handleSaveSettings}
          size="large"
        >
          Save Settings
        </Button>
      </Box>
    </Container>
  );
};

export default Settings; 