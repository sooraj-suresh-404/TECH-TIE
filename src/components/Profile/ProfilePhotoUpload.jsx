import { useState, useRef } from 'react';
import {
  Box,
  Avatar,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from '@mui/material';
import {
  CameraAlt as CameraIcon,
  Edit as EditIcon,
} from '@mui/icons-material';

const ProfilePhotoUpload = ({ currentPhoto, onPhotoChange }) => {
  const [open, setOpen] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(currentPhoto);
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
      setOpen(true);
    }
  };

  const handleSave = () => {
    if (selectedFile) {
      onPhotoChange(previewUrl, selectedFile);
    }
    setOpen(false);
  };

  const handleCancel = () => {
    setPreviewUrl(currentPhoto);
    setSelectedFile(null);
    setOpen(false);
  };

  return (
    <>
      <Box sx={{ position: 'relative' }}>
        <Avatar
          sx={{
            width: 120,
            height: 120,
            border: '4px solid white',
            boxShadow: (theme) => `0 0 0 4px ${theme.palette.primary.main}`,
            transition: 'transform 0.2s',
            '&:hover': {
              transform: 'scale(1.05)',
            },
          }}
          src={currentPhoto || '/default-avatar.png'}
          alt="Profile"
        />
        <IconButton
          sx={{
            position: 'absolute',
            right: -8,
            bottom: -8,
            backgroundColor: 'primary.main',
            '&:hover': {
              backgroundColor: 'primary.dark',
            },
            color: 'white',
            boxShadow: 2,
          }}
          onClick={() => fileInputRef.current?.click()}
        >
          <CameraIcon />
        </IconButton>
        <input
          type="file"
          hidden
          ref={fileInputRef}
          accept="image/*"
          onChange={handleFileSelect}
        />
      </Box>

      <Dialog open={open} onClose={handleCancel} maxWidth="sm" fullWidth>
        <DialogTitle>Update Profile Photo</DialogTitle>
        <DialogContent>
          <Box sx={{ textAlign: 'center', py: 2 }}>
            <Avatar
              sx={{
                width: 200,
                height: 200,
                mx: 'auto',
                mb: 2,
              }}
              src={previewUrl}
            />
            <Typography variant="body2" color="text.secondary">
              Preview of your new profile photo
            </Typography>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel}>Cancel</Button>
          <Button onClick={handleSave} variant="contained">
            Save Photo
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ProfilePhotoUpload;