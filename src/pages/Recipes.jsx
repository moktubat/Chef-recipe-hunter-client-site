import React, { useState } from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Recipes = ({rec}) => {
    const {id, recipe_name, recipe_image, cooking_method, ingredients, rating} = rec;
    const [buttonDisabled, setButtonDisabled] = useState(false); // initialize buttonDisabled to false

    const notify = () => toast("Added to Favorite List !!");

    const handleClick = () => {
        notify(); // show toast notification
        setButtonDisabled(true); // disable the button
    }

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
                    <h3 className='ps-3'>Ingredients</h3>
                    {
                        ingredients.map(ingredient => <ListGroup.Item>{ingredient}</ListGroup.Item>)
                    }
                </ListGroup>
                <Card.Body className='d-flex'>
                    <Card.Text>Rating: {rating}</Card.Text>
                    <div>
                        <Button onClick={handleClick} className='ms-4' disabled={buttonDisabled}>Add to Favorite</Button>
                        <ToastContainer />
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Recipes;
