import React, { useState } from 'react';
import { Container, Button, Alert } from 'react-bootstrap';
import { quizQuestions } from '../data/quizData';
import QuizItem from '../components/QuizItem';

const Quiz = () => {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleOptionChange = (questionId, option) => {
    setAnswers({
      ...answers,
      [questionId]: option
    });
  };

  const handleSubmit = () => {
    let calculatedScore = 0;
    quizQuestions.forEach(q => {
      if (answers[q.id] === q.answer) {
        calculatedScore += 1;
      }
    });
    setScore(calculatedScore);
    setSubmitted(true);
  };

  return (
    <Container>
      <h2 className="mb-4">Quiz Page</h2>
      {quizQuestions.map(q => (
        <QuizItem 
          key={q.id} 
          questionData={q} 
          selectedOption={answers[q.id]} 
          onOptionChange={handleOptionChange} 
        />
      ))}
      <Button variant="primary" onClick={handleSubmit} disabled={submitted}>
        Submit Answers
      </Button>
      
      {submitted && (
        <Alert variant="success" className="mt-4">
          You scored {score} out of {quizQuestions.length}!
        </Alert>
      )}
    </Container>
  );
};

export default Quiz;
