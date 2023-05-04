import React from 'react';
import { Button, Card } from 'react-bootstrap';

const ChefData = ({chef}) => {
    const {id, name, image, experience, recipes, like} = chef;
    return (
        <Card className="mb-4 g-4 shadow-lg p-3 mb-5 bg-body-tertiary rounded">
      <Card.Header>
        <img className='img-fluid w-50' src={image} alt="" />
      </Card.Header>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Years of experience: {experience} years</Card.Text>
        <Card.Text>Numbers of recipes: {recipes}</Card.Text>
        <Card.Text>Likes: {like}</Card.Text>
        
      </Card.Body>
      <Card.Footer>
        <Button variant="btn btn-outline-danger">View Recipes</Button>
      </Card.Footer>
    </Card>
    );
};

export default ChefData;