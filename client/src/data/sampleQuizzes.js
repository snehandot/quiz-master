export const sampleQuizzes = [
  {
    id: 1,
    title: 'Basic JavaScript Quiz',
    description: 'Test your knowledge of JavaScript fundamentals',
    questions: [
      {
        question: 'What is the output of typeof null?',
        options: ['null', 'undefined', 'object', 'number'],
        correctAnswer: 2
      },
      {
        question: 'Which method removes the last element from an array?',
        options: ['pop()', 'push()', 'shift()', 'unshift()'],
        correctAnswer: 0
      },
      {
        question: 'What is the result of 2 + "2"?',
        options: ['4', '22', 'NaN', 'TypeError'],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 2,
    title: 'HTML Basics',
    description: 'Check your understanding of HTML',
    questions: [
      {
        question: 'Which tag is used to create a hyperlink?',
        options: ['<link>', '<a>', '<href>', '<url>'],
        correctAnswer: 1
      },
      {
        question: 'What does HTML stand for?',
        options: [
          'Hyper Text Markup Language',
          'High Tech Modern Language',
          'Hyper Transfer Markup Language',
          'Home Tool Markup Language'
        ],
        correctAnswer: 0
      },
      {
        question: 'Which element is used for line break?',
        options: ['<break>', '<lb>', '<br>', '<newline>'],
        correctAnswer: 2
      }
    ]
  },
  {
    id: 3,
    title: 'CSS Quiz',
    description: 'Test your CSS knowledge',
    questions: [
      {
        question: 'What property is used to change text color?',
        options: ['text-color', 'font-color', 'color', 'text-style'],
        correctAnswer: 2
      },
      {
        question: 'Which CSS property controls text size?',
        options: ['text-size', 'font-size', 'text-style', 'font-style'],
        correctAnswer: 1
      },
      {
        question: 'What does CSS stand for?',
        options: [
          'Creative Style Sheets',
          'Computer Style Sheets',
          'Cascading Style Sheets',
          'Colorful Style Sheets'
        ],
        correctAnswer: 2
      }
    ]
  }
]; 