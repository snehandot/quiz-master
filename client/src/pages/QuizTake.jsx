import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Container,
  Box,
  Card,
  CardContent,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  LinearProgress,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import { sampleQuizzes } from '../data/sampleQuizzes';

const QuizTake = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quiz, setQuiz] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const foundQuiz = sampleQuizzes.find(q => q.id === parseInt(id));
    if (foundQuiz) {
      setQuiz(foundQuiz);
      setAnswers(new Array(foundQuiz.questions.length).fill(-1));
    }
  }, [id]);

  if (!quiz) {
    return null;
  }

  const handleAnswer = (value) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = parseInt(value);
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    let correct = 0;
    answers.forEach((answer, index) => {
      if (answer === quiz.questions[index].correctAnswer) {
        correct++;
      }
    });
    setScore((correct / quiz.questions.length) * 100);
    setShowResults(true);
  };

  const progress = ((currentQuestion + 1) / quiz.questions.length) * 100;

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            background: 'linear-gradient(45deg, #2563eb 30%, #1d4ed8 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          {quiz.title}
        </Typography>
        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{
            height: 8,
            borderRadius: 4,
            bgcolor: 'rgba(37,99,235,0.1)',
            '& .MuiLinearProgress-bar': {
              background: 'linear-gradient(45deg, #2563eb 30%, #1d4ed8 90%)',
            },
          }}
        />
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          Question {currentQuestion + 1} of {quiz.questions.length}
        </Typography>
      </Box>

      <Card>
        <CardContent sx={{ p: 4 }}>
          <Typography variant="h6" gutterBottom>
            {quiz.questions[currentQuestion].question}
          </Typography>

          <RadioGroup
            value={answers[currentQuestion].toString()}
            onChange={(e) => handleAnswer(e.target.value)}
          >
            {quiz.questions[currentQuestion].options.map((option, index) => (
              <FormControlLabel
                key={index}
                value={index.toString()}
                control={<Radio />}
                label={option}
                sx={{
                  py: 1,
                  px: 2,
                  borderRadius: 1,
                  width: '100%',
                  '&:hover': {
                    bgcolor: 'rgba(37,99,235,0.05)',
                  },
                }}
              />
            ))}
          </RadioGroup>
        </CardContent>
      </Card>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
        <Button
          variant="outlined"
          onClick={handlePrevious}
          disabled={currentQuestion === 0}
        >
          Previous
        </Button>
        {currentQuestion === quiz.questions.length - 1 ? (
          <Button
            variant="contained"
            onClick={handleSubmit}
            disabled={answers.includes(-1)}
            sx={{
              background: 'linear-gradient(45deg, #2563eb 30%, #1d4ed8 90%)',
              '&:hover': {
                background: 'linear-gradient(45deg, #1d4ed8 30%, #1e40af 90%)',
              },
            }}
          >
            Submit Quiz
          </Button>
        ) : (
          <Button
            variant="contained"
            onClick={handleNext}
            sx={{
              background: 'linear-gradient(45deg, #2563eb 30%, #1d4ed8 90%)',
              '&:hover': {
                background: 'linear-gradient(45deg, #1d4ed8 30%, #1e40af 90%)',
              },
            }}
          >
            Next
          </Button>
        )}
      </Box>

      <Dialog open={showResults} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ textAlign: 'center' }}>Quiz Results</DialogTitle>
        <DialogContent sx={{ textAlign: 'center', py: 3 }}>
          <Typography variant="h4" gutterBottom>
            {score.toFixed(0)}%
          </Typography>
          <Typography variant="body1" color="text.secondary">
            You got {Math.round((score / 100) * quiz.questions.length)} out of{' '}
            {quiz.questions.length} questions correct
          </Typography>
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'center', pb: 3 }}>
          <Button
            variant="contained"
            onClick={() => navigate('/quizzes')}
            sx={{
              background: 'linear-gradient(45deg, #2563eb 30%, #1d4ed8 90%)',
              '&:hover': {
                background: 'linear-gradient(45deg, #1d4ed8 30%, #1e40af 90%)',
              },
            }}
          >
            Back to Quizzes
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default QuizTake;