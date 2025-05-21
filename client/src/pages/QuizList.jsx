import { Container, Grid, Card, CardContent, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { sampleQuizzes } from '../data/sampleQuizzes';

const QuizList = () => {
  const navigate = useNavigate();

  return (
    <Container sx={{ py: 4 }}>
      <Typography
        variant="h4"
        component="h1"
        sx={{
          mb: 4,
          fontWeight: 'bold',
          background: 'linear-gradient(45deg, #2563eb 30%, #1d4ed8 90%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Available Quizzes
      </Typography>

      <Grid container spacing={3}>
        {sampleQuizzes.map((quiz) => (
          <Grid item xs={12} md={4} key={quiz.id}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 6px 12px rgba(0,0,0,0.1)',
                },
              }}
            >
              <CardContent sx={{ flexGrow: 1, p: 3 }}>
                <Typography variant="h5" component="h2" gutterBottom>
                  {quiz.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2, minHeight: 40 }}
                >
                  {quiz.description}
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Typography variant="body2" color="text.secondary">
                    {quiz.questions.length} Questions
                  </Typography>
                  <Button
                    variant="contained"
                    onClick={() => navigate(`/quiz/${quiz.id}`)}
                    sx={{
                      background: 'linear-gradient(45deg, #2563eb 30%, #1d4ed8 90%)',
                      boxShadow: '0 2px 4px rgba(37,99,235,0.2)',
                      '&:hover': {
                        background: 'linear-gradient(45deg, #1d4ed8 30%, #1e40af 90%)',
                      },
                    }}
                  >
                    Take Quiz
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default QuizList; 