import React from 'react';
import { Card, Form } from 'react-bootstrap';

const QuizItem = ({ questionData, selectedOption, onOptionChange }) => {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>Question {questionData.id}</Card.Title>
        <Card.Text>{questionData.question}</Card.Text>
        <Form>
          {questionData.options.map((option, index) => (
            <Form.Check
              type="radio"
              id={`question-${questionData.id}-option-${index}`}
              name={`question-${questionData.id}`}
              label={option}
              value={option}
              checked={selectedOption === option}
              onChange={() => onOptionChange(questionData.id, option)}
              key={index}
            />
          ))}
        </Form>
      </Card.Body>
    </Card>
  );
};

export default QuizItem;
