import { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Grid,
  Autocomplete,
  Chip,
  Box,
  Typography,
  Switch,
  FormControlLabel,
} from '@mui/material';

const techStackOptions = [
  'React', 'Angular', 'Vue.js', 'Node.js', 'Python', 'Java',
  'TypeScript', 'Go', 'Ruby', 'PHP', 'AWS', 'Azure',
  'Docker', 'Kubernetes', 'MongoDB', 'PostgreSQL'
];

const EditProfileDialog = ({ open, onClose, initialData }) => {
  const [formData, setFormData] = useState({
    name: initialData?.name || '',
    title: initialData?.title || '',
    bio: initialData?.bio || '',
    github: initialData?.github || '',
    linkedin: initialData?.linkedin || '',
    website: initialData?.website || '',
    techStack: initialData?.techStack || [],
    availableForProjects: initialData?.availableForProjects || false,
    isMentor: initialData?.isMentor || false,
    isRemote: initialData?.isRemote || false,
  });

  const handleChange = (event) => {
    const { name, value, checked } = event.target;
    setFormData(prev => ({
      ...prev,
      [name]: event.target.type === 'checkbox' ? checked : value
    }));
  };

  const handleTechStackChange = (event, newValue) => {
    setFormData(prev => ({
      ...prev,
      techStack: newValue
    }));
  };

  const handleSubmit = () => {
    // Here you would typically make an API call to update the profile
    console.log('Updated Profile Data:', formData);
    onClose(formData);
  };

  return (
    <Dialog open={open} onClose={() => onClose(null)} maxWidth="md" fullWidth>
      <DialogTitle>Edit Profile</DialogTitle>
      <DialogContent dividers>
        <Grid container spacing={3}>
          {/* Basic Information */}
          <Grid item xs={12}>
            <Typography variant="subtitle1" gutterBottom>
              Basic Information
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Professional Title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Bio"
                  name="bio"
                  value={formData.bio}
                  onChange={handleChange}
                  multiline
                  rows={4}
                />
              </Grid>
            </Grid>
          </Grid>

          {/* Social Links */}
          <Grid item xs={12}>
            <Typography variant="subtitle1" gutterBottom>
              Social Links
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="GitHub Profile"
                  name="github"
                  value={formData.github}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="LinkedIn Profile"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Personal Website"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
          </Grid>

          {/* Tech Stack */}
          <Grid item xs={12}>
            <Typography variant="subtitle1" gutterBottom>
              Tech Stack
            </Typography>
            <Autocomplete
              multiple
              options={techStackOptions}
              value={formData.techStack}
              onChange={handleTechStackChange}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  label="Tech Stack"
                  placeholder="Add technologies"
                />
              )}
              renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                  <Chip
                    label={option}
                    {...getTagProps({ index })}
                    key={option}
                  />
                ))
              }
            />
          </Grid>

          {/* Preferences */}
          <Grid item xs={12}>
            <Typography variant="subtitle1" gutterBottom>
              Preferences
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={formData.availableForProjects}
                    onChange={handleChange}
                    name="availableForProjects"
                  />
                }
                label="Available for Projects"
              />
              <FormControlLabel
                control={
                  <Switch
                    checked={formData.isMentor}
                    onChange={handleChange}
                    name="isMentor"
                  />
                }
                label="Available as Mentor"
              />
              <FormControlLabel
                control={
                  <Switch
                    checked={formData.isRemote}
                    onChange={handleChange}
                    name="isRemote"
                  />
                }
                label="Open to Remote Work"
              />
            </Box>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => onClose(null)}>Cancel</Button>
        <Button onClick={handleSubmit} variant="contained" color="primary">
          Save Changes
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditProfileDialog; 