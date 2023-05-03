import React from 'react';
import { Button, Card } from 'react-bootstrap';

const ChefData = ({chef}) => {
    const {id, name, image, experience, recipes, like} = chef;
    return (
        <Card className="mb-4 gap-3">
      <Card.Header>
        <img className='img-fluid w-50' src={image} alt="" />
      </Card.Header>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Years of experience: {experience} years</Card.Text>
        <Card.Text>Numbers of recipes: {recipes}</Card.Text>
        <Card.Text>Likes: {like}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
    );
};

export default ChefData;