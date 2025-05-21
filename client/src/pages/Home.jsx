import { Container, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Home = () => {
  const navigate = useNavigate();
  const { token } = useAuth();

  return (
    <Container>
      <Box
        sx={{
          mt: 8,
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 3,
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontWeight: 'bold',
            background: 'linear-gradient(45deg, #2563eb 30%, #1d4ed8 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Welcome to Quiz App
        </Typography>
        
        <Typography variant="h5" color="text.secondary" sx={{ maxWidth: 600 }}>
          Test your knowledge with our collection of quizzes or create your own to challenge others.
        </Typography>

        <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate('/quizzes')}
            sx={{
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
            }}
          >
            Browse Quizzes
          </Button>
          
          {token ? (
            <Button
              variant="outlined"
              size="large"
              onClick={() => navigate('/create-quiz')}
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
              }}
            >
              Create Quiz
            </Button>
          ) : (
            <Button
              variant="outlined"
              size="large"
              onClick={() => navigate('/login')}
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
              }}
            >
              Get Started
            </Button>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default Home; 