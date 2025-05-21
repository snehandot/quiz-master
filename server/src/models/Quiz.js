import mongoose from 'mongoose';

const quizSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  questions: [{
    question: {
      type: String,
      required: true,
    },
    options: {
      type: [String],
      required: true,
      validate: [arr => arr.length === 4, 'Quiz must have exactly 4 options']
    },
    correctAnswer: {
      type: Number,
      required: true,
      min: 0,
      max: 3
    }
  }],
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, { timestamps: true });

export const Quiz = mongoose.model('Quiz', quizSchema); 