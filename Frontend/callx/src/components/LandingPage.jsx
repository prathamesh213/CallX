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
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import PsychologyIcon from '@mui/icons-material/Psychology';
import LanguageIcon from '@mui/icons-material/Language';
import ApiIcon from '@mui/icons-material/Api';
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

const StyledDivider = styled(Divider)(({ theme }) => ({
  margin: theme.spacing(4, 0),
  borderColor: 'rgba(255, 255, 255, 0.1)',
}));

const TechCard = styled(Card)(({ theme }) => ({
  background: 'rgba(26, 26, 26, 0.8)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    borderColor: theme.palette.primary.main,
  },
}));

const TechIcon = styled(Box)(({ theme }) => ({
  width: 50,
  height: 50,
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

  const techStack = [
    {
      icon: <PsychologyIcon sx={{ fontSize: 24 }} />,
      title: 'AI Reasoning',
      tech: 'Ollama + Mistral 7B'
    },
    {
      icon: <StorageIcon sx={{ fontSize: 24 }} />,
      title: 'Vector Search',
      tech: 'FAISS + SentenceTransformers'
    },
    {
      icon: <CodeIcon sx={{ fontSize: 24 }} />,
      title: 'PDF Parsing',
      tech: 'PyMuPDF / pdfplumber'
    },
    {
      icon: <MicIcon sx={{ fontSize: 24 }} />,
      title: 'Speech-to-Text',
      tech: 'Faster-Whisper'
    },
    {
      icon: <VolumeUpIcon sx={{ fontSize: 24 }} />,
      title: 'Text-to-Speech',
      tech: 'Coqui TTS or Piper'
    },
    {
      icon: <LanguageIcon sx={{ fontSize: 24 }} />,
      title: 'Frontend',
      tech: 'React.js'
    },
    {
      icon: <ApiIcon sx={{ fontSize: 24 }} />,
      title: 'Backend API',
      tech: 'Java + Spring Boot'
    },
    {
      icon: <StorageIcon sx={{ fontSize: 24 }} />,
      title: 'Database',
      tech: 'PostgreSQL'
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

          <StyledDivider>
            <Typography color="text.secondary" sx={{ px: 2 }}>
              OR
            </Typography>
          </StyledDivider>

          <Typography variant="h6" gutterBottom align="center">
            Try Our Demo FAQ
          </Typography>
          <Typography color="text.secondary" sx={{ mb: 3 }} align="center">
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

      {/* How it Works Section */}
      <Box sx={{ 
        mb: 8, 
        width: '100%',
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <GradientText variant="h3" align="center" gutterBottom sx={{ mb: 4 }}>
          How It Works
        </GradientText>
        <Container maxWidth="lg">
          <Grid 
            container 
            spacing={4} 
            sx={{ 
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'stretch'
            }}
          >
            {features.map((feature, index) => (
              <Grid 
                item 
                xs={12} 
                sm={6} 
                md={3} 
                key={index}
                sx={{
                  display: 'flex',
                  justifyContent: 'center'
                }}
              >
                <FeatureCard sx={{ width: '100%', maxWidth: 280 }}>
                  <CardContent sx={{ 
                    textAlign: 'center', 
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    justifyContent: 'center',
                    p: 3
                  }}>
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
        </Container>
      </Box>

      {/* Tech Stack Section */}
      <Box sx={{ 
        mb: 8, 
        width: '100%',
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <GradientText variant="h3" align="center" gutterBottom sx={{ mb: 4 }}>
          Tech Stack
        </GradientText>
        <Container maxWidth="lg">
          <Grid 
            container 
            spacing={3} 
            sx={{ 
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'stretch'
            }}
          >
            {techStack.map((tech, index) => (
              <Grid 
                item 
                xs={12} 
                sm={6} 
                md={3} 
                key={index}
                sx={{
                  display: 'flex',
                  justifyContent: 'center'
                }}
              >
                <TechCard sx={{ width: '100%', maxWidth: 280 }}>
                  <CardContent sx={{ 
                    textAlign: 'center', 
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    justifyContent: 'center',
                    p: 3
                  }}>
                    <TechIcon>
                      {tech.icon}
                    </TechIcon>
                    <Typography variant="h6" gutterBottom>
                      {tech.title}
                    </Typography>
                    <Typography color="text.secondary">
                      {tech.tech}
                    </Typography>
                  </CardContent>
                </TechCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Architecture Section */}
      <Box sx={{ 
        mb: 8, 
        width: '100%',
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <GradientText variant="h3" align="center" gutterBottom sx={{ mb: 4 }}>
          Architecture
        </GradientText>
        <Card sx={{ maxWidth: 800, mx: 'auto', width: '100%' }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Monorepo Structure
            </Typography>
            <Box component="pre" sx={{ 
              p: 2, 
              bgcolor: 'rgba(0,0,0,0.2)', 
              borderRadius: 1,
              overflowX: 'auto',
              fontFamily: 'monospace',
              fontSize: '0.9rem',
              color: 'text.secondary'
            }}>
{`callx/
├── frontend/               # React.js
│   └── mic, audio player
├── backend/                # Spring Boot (API gateway)
│   └── endpoints for upload, query
├── llm-service/            # Python: Ollama + FAISS
│   └── pdf loader, embedder, retriever
├── stt-service/            # Python: Faster-Whisper
├── tts-service/            # Python: Coqui TTS
├── docker-compose.yml      # Orchestrate all
└── README.md`}
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}

export default LandingPage; 