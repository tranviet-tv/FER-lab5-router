import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { newLists } from '../data/newsData';

const News = () => {
  return (
    <Container>
      <h2 className="mb-4 text-danger">News Category</h2>
      <Row>
        {newLists.map((news) => (
          <Col md={3} className="mb-4" key={news.id}>
            <Card className="h-100">
              <Card.Img 
                variant="top" 
                src={`/${news.images}`} 
                alt={news.title}
              />
              <Card.Body>
                <Card.Title>{news.title}</Card.Title>
                <Card.Text>
                  {news.description}
                </Card.Text>
                <a href="#">{news.title}</a>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default News;
