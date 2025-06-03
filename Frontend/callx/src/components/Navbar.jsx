import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import MicIcon from '@mui/icons-material/Mic';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: 'rgba(10, 10, 10, 0.8)',
  backdropFilter: 'blur(10px)',
  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
}));

const Logo = styled(Typography)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  color: theme.palette.primary.main,
  fontWeight: 700,
  fontSize: '1.5rem',
}));

const NavButton = styled(Button)(({ theme }) => ({
  marginLeft: theme.spacing(2),
  '&:hover': {
    background: 'rgba(255, 255, 255, 0.1)',
  },
}));

function Navbar() {
  return (
    <StyledAppBar position="fixed">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Logo>
            <MicIcon />
            CallX
          </Logo>
          <Box sx={{ flexGrow: 1 }} />
          <NavButton color="inherit">Login</NavButton>
          <NavButton 
            variant="contained" 
            color="primary"
            sx={{ 
              background: 'linear-gradient(45deg, #00ff9d 30%, #00b26d 90%)',
              '&:hover': {
                background: 'linear-gradient(45deg, #00ff9d 40%, #00b26d 100%)',
              },
            }}
          >
            Sign Up
          </NavButton>
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
}

export default Navbar; 