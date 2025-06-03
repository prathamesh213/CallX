import { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  Card, 
  CardContent,
  TextField,
  CircularProgress,
  Grid,
  Divider
} from '@mui/material';
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import MicIcon from '@mui/icons-material/Mic';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
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

const FeatureCard = styled(Card)(({ theme }) => ({
  height: '100%',
  background: 'rgba(26, 26, 26, 0.8)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
}));

const FeatureIcon = styled(Box)(({ theme }) => ({
  width: 60,
  height: 60,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto 16px',
  background: 'linear-gradient(45deg, #00ff9d 30%, #00b26d 90%)',
  color: theme.palette.background.paper,
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

  const features = [
    {
      icon: <MicIcon sx={{ fontSize: 30 }} />,
      title: 'Speak Your Question',
      description: 'Simply click the mic and ask your question naturally'
    },
    {
      icon: <AutoStoriesIcon sx={{ fontSize: 30 }} />,
      title: 'AI Processing',
      description: 'Our AI analyzes your question and finds the best answer from your FAQs'
    },
    {
      icon: <SmartToyIcon sx={{ fontSize: 30 }} />,
      title: 'Smart Matching',
      description: 'Advanced RAG system ensures accurate and relevant responses'
    },
    {
      icon: <VolumeUpIcon sx={{ fontSize: 30 }} />,
      title: 'Voice Response',
      description: 'Get human-like voice responses to your questions'
    }
  ];

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

      <Card sx={{ maxWidth: 600, mx: 'auto', mb: 8 }}>
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

      {/* How it Works Section */}
      <Box sx={{ mb: 8 }}>
        <GradientText variant="h3" align="center" gutterBottom>
          How It Works
        </GradientText>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <FeatureCard>
                <CardContent sx={{ textAlign: 'center' }}>
                  <FeatureIcon>
                    {feature.icon}
                  </FeatureIcon>
                  <Typography variant="h6" gutterBottom>
                    {feature.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </FeatureCard>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Demo FAQ Section */}
      <Card sx={{ maxWidth: 600, mx: 'auto' }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Try Our Demo FAQ
          </Typography>
          <Typography color="text.secondary" sx={{ mb: 3 }}>
            Experience CallX with our pre-loaded FAQ database
          </Typography>
          <Button
            variant="outlined"
            fullWidth
            startIcon={<MicIcon />}
            sx={{
              borderColor: 'primary.main',
              color: 'primary.main',
              '&:hover': {
                borderColor: 'primary.light',
                background: 'rgba(0, 255, 157, 0.1)',
              },
            }}
          >
            Start Demo
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
}

export default LandingPage; 