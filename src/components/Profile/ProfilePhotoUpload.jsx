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
  styled,
} from '@mui/material';
import {
  CameraAlt as CameraIcon,
} from '@mui/icons-material';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const ProfileImageContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  '&:hover .profile-image-overlay': {
    opacity: 1,
  },
}));

const ImageOverlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  opacity: 0,
  transition: 'opacity 0.3s ease',
  cursor: 'pointer',
}));

const ProfilePhotoUpload = ({ currentPhoto, onPhotoChange }) => {
  const [open, setOpen] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
        setOpen(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    if (selectedFile) {
      onPhotoChange(previewUrl, selectedFile);
    }
    handleClose();
  };

  const handleClose = () => {
    setOpen(false);
    setPreviewUrl(null);
    setSelectedFile(null);
  };

  return (
    <>
      <ProfileImageContainer>
        <Avatar
          sx={{
            width: 120,
            height: 120,
            border: '4px solid white',
            boxShadow: (theme) => theme.shadows[3],
          }}
          src={currentPhoto || '/default-avatar.png'}
        />
        <ImageOverlay className="profile-image-overlay">
          <IconButton
            sx={{ color: 'white' }}
            onClick={() => fileInputRef.current?.click()}
          >
            <CameraIcon />
          </IconButton>
          <VisuallyHiddenInput
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileSelect}
          />
        </ImageOverlay>
      </ProfileImageContainer>

      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>Update Profile Photo</DialogTitle>
        <DialogContent>
          <Box sx={{ textAlign: 'center', py: 2 }}>
            {previewUrl && (
              <Avatar
                src={previewUrl}
                sx={{
                  width: 200,
                  height: 200,
                  mx: 'auto',
                  border: '4px solid white',
                  boxShadow: (theme) => theme.shadows[3],
                }}
              />
            )}
            <Typography variant="caption" color="text.secondary" sx={{ mt: 2, display: 'block' }}>
              Click save to update your profile photo
            </Typography>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            onClick={handleSave}
            variant="contained"
            color="primary"
          >
            Save Photo
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ProfilePhotoUpload;