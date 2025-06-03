import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import theme from './theme';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';

const BackgroundBox = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  width: '100vw',
  margin: 0,
  padding: 0,
  overflow: 'hidden',
  background: theme.palette.background.default,
  backgroundImage: 'url("/background.png")',
  backgroundSize: '100% 100%', // Changed to ensure full coverage
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(10, 10, 10, 0.85)',
    backdropFilter: 'blur(5px)',
    WebkitBackdropFilter: 'blur(5px)',
  },
}));

const ContentBox = styled(Box)({
  position: 'relative',
  zIndex: 1,
  minHeight: '100vh',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  margin: 0,
  padding: 0,
});

// Add global styles to ensure no margins
const GlobalStyles = styled('div')({
  margin: 0,
  padding: 0,
  boxSizing: 'border-box',
  '& *': {
    boxSizing: 'border-box',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles>
        <BackgroundBox>
          <ContentBox>
            <Navbar />
            <LandingPage />
          </ContentBox>
        </BackgroundBox>
      </GlobalStyles>
    </ThemeProvider>
  );
}

export default App;
