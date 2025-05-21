import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Navbar() {
  const navigate = useNavigate();
  const { token, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <AppBar position="static" elevation={0} sx={{ backgroundColor: 'white', borderBottom: 1, borderColor: 'divider' }}>
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            color: 'primary.main',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
          onClick={() => navigate('/')}
        >
          Quiz App
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button color="primary" onClick={() => navigate('/quizzes')}>
            Quizzes
          </Button>
          {token ? (
            <Button color="primary" onClick={handleLogout}>
              Logout
            </Button>
          ) : (
            <>
              <Button color="primary" onClick={() => navigate('/login')}>
                Login
              </Button>
              <Button
                variant="contained"
                onClick={() => navigate('/register')}
              >
                Sign Up
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar; 