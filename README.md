# Quiz Master Application

A full-stack MERN (MongoDB, Express, React, Node.js) quiz application with user authentication and interactive quiz features.

## Prerequisites

- Node.js (v16 or higher)
- MongoDB (v4.4 or higher)
- npm (v7 or higher)

## Project Structure

```
quiz-master/
├── client/          # React frontend
├── server/          # Express backend
└── README.md        # This file
```

## Setup Instructions

### 1. Backend Setup

```bash
cd server
npm install
cp .env.example .env  # Copy example env file
# Edit .env with your MongoDB URI and JWT secret
npm run dev
```

### 2. Frontend Setup

```bash
cd client
npm install
npm run dev
```

### 3. Environment Variables

Create `.env` files in both server and client directories:

Server `.env`:
```
PORT=3000
MONGODB_URI=mongodb://localhost:27017/quiz-app
JWT_SECRET=your-secret-key
```

## Available Scripts

### Backend

- `npm run dev`: Start development server with hot reload
- `npm start`: Start production server

### Frontend

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build

## Features

- User Authentication (Register/Login)
- Take quizzes
- View quiz results
- Responsive design
- Modern UI with Material-UI

## API Endpoints

### Auth Routes
- POST /api/auth/register - Register new user
- POST /api/auth/login - Login user

### Quiz Routes
- GET /api/quizzes - Get all quizzes
- GET /api/quizzes/:id - Get specific quiz
- POST /api/quizzes/:id/submit - Submit quiz answers 