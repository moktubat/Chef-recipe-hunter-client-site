import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

const Recipes = ({rec}) => {
    const {id, recipe_name, recipe_image, cooking_method, ingredients} = rec;
    return (
        <div>
            <Card className='d-flex' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={recipe_image} />
      <Card.Body>
        <Card.Title>{recipe_name}</Card.Title>
        <Card.Text>
          <strong>Cooking Method : </strong>
          {cooking_method}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
      {
        ingredients.map(ingredient => <ListGroup.Item>{ingredients}</ListGroup.Item>)
      }
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
        </div>
    );
};

export default Recipes;