import {
  Box,
  Typography,
  Slider,
  FormControl,
  FormLabel,
  FormGroup,
  Checkbox,
  FormControlLabel,
  Chip,
  TextField,
  Autocomplete,
} from '@mui/material';

const techStacks = [
  'React', 'Angular', 'Vue.js', 'Node.js', 'Python', 'Java',
  'TypeScript', 'Go', 'Ruby', 'PHP', 'AWS', 'Azure',
  'Docker', 'Kubernetes', 'MongoDB', 'PostgreSQL'
];

const projectTypes = [
  'Web Development',
  'Mobile Apps',
  'AI/ML',
  'Blockchain',
  'DevOps',
  'Open Source',
];

const MatchPreferences = () => {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Experience Range
      </Typography>
      <Slider
        defaultValue={[0, 5]}
        valueLabelDisplay="auto"
        step={1}
        marks
        min={0}
        max={10}
        sx={{ mb: 4 }}
      />

      <FormControl component="fieldset" sx={{ mb: 4 }}>
        <FormLabel component="legend">Project Types</FormLabel>
        <FormGroup>
          {projectTypes.map((type) => (
            <FormControlLabel
              key={type}
              control={<Checkbox defaultChecked />}
              label={type}
            />
          ))}
        </FormGroup>
      </FormControl>

      <Box sx={{ mb: 4 }}>
        <Typography variant="subtitle1" gutterBottom>
          Tech Stack Preferences
        </Typography>
        <Autocomplete
          multiple
          options={techStacks}
          defaultValue={['React', 'Node.js']}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="outlined"
              placeholder="Add technologies"
            />
          )}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip
                variant="outlined"
                label={option}
                {...getTagProps({ index })}
                key={option}
              />
            ))
          }
        />
      </Box>
    </Box>
  );
};

export default MatchPreferences; 