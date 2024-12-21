import { useState } from 'react';
import {
  Container,
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Divider,
  IconButton,
  InputAdornment,
  Alert,
  Link,
  Stepper,
  Step,
  StepLabel,
  FormControlLabel,
  Checkbox,
  Chip,
  Stack,
} from '@mui/material';
import {
  GitHub as GitHubIcon,
  Google as GoogleIcon,
  Visibility,
  VisibilityOff,
  ArrowBack as ArrowBackIcon,
  ArrowForward as ArrowForwardIcon,
} from '@mui/icons-material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

const steps = ['Account', 'Profile', 'Skills'];

const techSkills = [
  'React', 'Node.js', 'Python', 'JavaScript', 'TypeScript',
  'Java', 'C++', 'AWS', 'Docker', 'Kubernetes',
  'MongoDB', 'PostgreSQL', 'GraphQL', 'Vue.js', 'Angular',
];

const Signup = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    title: '',
    bio: '',
    github: '',
    linkedin: '',
    skills: [],
    acceptTerms: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'acceptTerms' ? checked : value,
    }));
    setError('');
  };

  const handleSkillToggle = (skill) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter(s => s !== skill)
        : [...prev.skills, skill],
    }));
  };

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      handleSubmit();
    } else {
      setActiveStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    setActiveStep(prev => prev - 1);
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError('');

    try {
      // Add your registration logic here
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      navigate('/');
    } catch (err) {
      setError('Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const validateStep = () => {
    switch (activeStep) {
      case 0:
        return (
          formData.email &&
          formData.password &&
          formData.confirmPassword &&
          formData.password === formData.confirmPassword &&
          formData.acceptTerms
        );
      case 1:
        return formData.name && formData.title;
      case 2:
        return formData.skills.length > 0;
      default:
        return false;
    }
  };

  const renderStepContent = () => {
    switch (activeStep) {
      case 0:
        return (
          <>
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              value={formData.password}
              onChange={handleChange}
              margin="normal"
              required
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              fullWidth
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              margin="normal"
              required
              error={formData.password !== formData.confirmPassword}
              helperText={
                formData.password !== formData.confirmPassword &&
                "Passwords don't match"
              }
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="acceptTerms"
                  checked={formData.acceptTerms}
                  onChange={handleChange}
                />
              }
              label={
                <Typography variant="body2">
                  I agree to the{' '}
                  <Link href="#" target="_blank">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link href="#" target="_blank">
                    Privacy Policy
                  </Link>
                </Typography>
              }
            />
          </>
        );
      case 1:
        return (
          <>
            <TextField
              fullWidth
              label="Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              margin="normal"
              required
              placeholder="e.g., Full Stack Developer"
            />
            <TextField
              fullWidth
              label="Bio"
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              margin="normal"
              multiline
              rows={3}
              placeholder="Tell us about yourself..."
            />
            <TextField
              fullWidth
              label="GitHub Username"
              name="github"
              value={formData.github}
              onChange={handleChange}
              margin="normal"
              placeholder="github.com/username"
            />
            <TextField
              fullWidth
              label="LinkedIn Profile"
              name="linkedin"
              value={formData.linkedin}
              onChange={handleChange}
              margin="normal"
              placeholder="linkedin.com/in/username"
            />
          </>
        );
      case 2:
        return (
          <>
            <Typography variant="subtitle1" gutterBottom>
              Select your skills (at least one)
            </Typography>
            <Box sx={{ mt: 2 }}>
              {techSkills.map((skill) => (
                <Chip
                  key={skill}
                  label={skill}
                  onClick={() => handleSkillToggle(skill)}
                  color={formData.skills.includes(skill) ? 'primary' : 'default'}
                  sx={{ m: 0.5 }}
                />
              ))}
            </Box>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          py: 8,
        }}
      >
        <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
          <Typography variant="h4" align="center" gutterBottom fontWeight="bold">
            Create Account
          </Typography>
          <Typography variant="body1" align="center" color="text.secondary" paragraph>
            Join the TechTie developer community
          </Typography>

          <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {error && (
            <Alert severity="error" sx={{ mb: 3 }}>
              {error}
            </Alert>
          )}

          <form onSubmit={(e) => e.preventDefault()}>
            {renderStepContent()}

            <Stack
              direction="row"
              spacing={2}
              sx={{ mt: 4 }}
            >
              {activeStep > 0 && (
                <Button
                  variant="outlined"
                  onClick={handleBack}
                  startIcon={<ArrowBackIcon />}
                >
                  Back
                </Button>
              )}
              <Button
                variant="contained"
                onClick={handleNext}
                disabled={!validateStep() || loading}
                endIcon={activeStep < steps.length - 1 ? <ArrowForwardIcon /> : null}
                sx={{ ml: 'auto' }}
              >
                {loading
                  ? 'Creating Account...'
                  : activeStep === steps.length - 1
                  ? 'Create Account'
                  : 'Next'}
              </Button>
            </Stack>
          </form>

          {activeStep === 0 && (
            <>
              <Box sx={{ my: 3 }}>
                <Divider>
                  <Typography variant="body2" color="text.secondary">
                    OR
                  </Typography>
                </Divider>
              </Box>

              <Box sx={{ display: 'flex', gap: 2 }}>
                <Button
                  fullWidth
                  variant="outlined"
                  startIcon={<GitHubIcon />}
                >
                  GitHub
                </Button>
                <Button
                  fullWidth
                  variant="outlined"
                  startIcon={<GoogleIcon />}
                >
                  Google
                </Button>
              </Box>
            </>
          )}

          <Box sx={{ mt: 3, textAlign: 'center' }}>
            <Typography variant="body2" color="text.secondary">
              Already have an account?{' '}
              <Link component={RouterLink} to="/login">
                Sign in
              </Link>
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default Signup; 