import { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  Card, 
  CardContent,
  TextField,
  CircularProgress
} from '@mui/material';
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import api from '../api/config';

const UploadBox = styled(Box)(({ theme }) => ({
  border: `2px dashed ${theme.palette.primary.main}`,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(4),
  textAlign: 'center',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: 'rgba(0, 255, 157, 0.1)',
    borderColor: theme.palette.primary.light,
  },
}));

const GradientText = styled(Typography)(({ theme }) => ({
  background: 'linear-gradient(45deg, #00ff9d 30%, #00b26d 90%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontWeight: 700,
}));

function LandingPage() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile && selectedFile.type === 'application/pdf') {
      setFile(selectedFile);
      setError('');
    } else {
      setError('Please select a valid PDF file');
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setError('Please select a file first');
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await api.post('/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Upload successful:', response.data);
      // Handle successful upload
    } catch (err) {
      setError('Failed to upload file. Please try again.');
      console.error('Upload error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 12, mb: 4 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <GradientText variant="h2" gutterBottom>
          Welcome to CallX
        </GradientText>
        <Typography variant="h5" color="text.secondary" sx={{ mb: 4 }}>
          Your AI Voice Assistant for FAQ Handling
        </Typography>
      </Box>

      <Card sx={{ maxWidth: 600, mx: 'auto' }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Upload Your FAQ PDF
          </Typography>
          <Typography color="text.secondary" sx={{ mb: 3 }}>
            Upload your FAQ document to get started with AI-powered voice responses
          </Typography>

          <UploadBox
            component="label"
            htmlFor="pdf-upload"
            sx={{ mb: 3 }}
          >
            <input
              id="pdf-upload"
              type="file"
              accept=".pdf"
              hidden
              onChange={handleFileChange}
            />
            <CloudUploadIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
            <Typography>
              {file ? file.name : 'Click to upload PDF'}
            </Typography>
          </UploadBox>

          {error && (
            <Typography color="error" sx={{ mb: 2 }}>
              {error}
            </Typography>
          )}

          <Button
            variant="contained"
            fullWidth
            onClick={handleUpload}
            disabled={loading || !file}
            sx={{
              background: 'linear-gradient(45deg, #00ff9d 30%, #00b26d 90%)',
              '&:hover': {
                background: 'linear-gradient(45deg, #00ff9d 40%, #00b26d 100%)',
              },
            }}
          >
            {loading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              'Upload and Process'
            )}
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
}

export default LandingPage; 