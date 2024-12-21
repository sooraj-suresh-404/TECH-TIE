import {
  Box,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Stepper,
  Step,
  StepLabel,
  Alert,
} from '@mui/material';
import { useState } from 'react';
import QRCode from 'qrcode.react';

const TwoFactorAuth = () => {
  const [open, setOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [verificationCode, setVerificationCode] = useState('');
  const [error, setError] = useState('');

  const steps = ['Generate Secret', 'Scan QR Code', 'Verify Code'];

  const handleSetup = () => {
    setOpen(true);
    setActiveStep(0);
    setError('');
  };

  const handleNext = () => {
    if (activeStep === 2) {
      // Verify the code
      if (verificationCode === '123456') { // Replace with actual verification
        setOpen(false);
        // Update user's 2FA status
      } else {
        setError('Invalid verification code');
      }
    } else {
      setActiveStep((prev) => prev + 1);
    }
  };

  return (
    <Box>
      <Typography variant="subtitle1" gutterBottom>
        Two-Factor Authentication
      </Typography>
      <Typography variant="body2" color="text.secondary" paragraph>
        Add an extra layer of security to your account by enabling 2FA.
      </Typography>
      <Button variant="outlined" onClick={handleSetup}>
        Setup 2FA
      </Button>

      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Setup Two-Factor Authentication</DialogTitle>
        <DialogContent>
          <Stepper activeStep={activeStep} sx={{ my: 3 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {activeStep === 0 && (
            <Typography>
              We'll generate a secret key for your authenticator app.
            </Typography>
          )}

          {activeStep === 1 && (
            <Box sx={{ textAlign: 'center', my: 2 }}>
              <QRCode value="otpauth://totp/TechTie:user@example.com?secret=JBSWY3DPEHPK3PXP" />
              <Typography variant="caption" display="block" sx={{ mt: 2 }}>
                Scan this QR code with your authenticator app
              </Typography>
            </Box>
          )}

          {activeStep === 2 && (
            <Box sx={{ my: 2 }}>
              <TextField
                fullWidth
                label="Verification Code"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                error={Boolean(error)}
                helperText={error}
              />
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={handleNext}>
            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default TwoFactorAuth; 