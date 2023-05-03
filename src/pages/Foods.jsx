import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";

const Foods = () => {
  return (
    <div className="container text-center my-5 ">
      <h2 className="fw-bold text-black d-inline  px-4 border-bottom border-5 border-danger">
        Popular Categories
      </h2>

      {
        <CardGroup className="g-4 my-5" >
          <Card>
            <Card.Img variant="top" src={image1} />
            <Card.Body>
              <Card.Title>Fettuccine Pomodoro</Card.Title>
              <Card.Text>
              A light, quick and easy pasta recipe, Fettuccine Pomodoro is a delicious dish for breakfast, brunch or kid's tiffin!
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={image2} />
            <Card.Body>
              <Card.Title>Bruschetta</Card.Title>
              <Card.Text>
              An antipasto dish, bruschetta has grilled bread topped with veggies, rubbed garlic and tomato mix. A country bread sliced and topped with different toppings - the evergreen tomato-basil and an inventive mushroom-garlic.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={image3} />
            <Card.Body>
              <Card.Title>Caprese Salad with Pesto Sauce</Card.Title>
              <Card.Text>
              Nothing like a fresh tomato salad in summers! A great antipasto bite to start your meal with. This combination of juicy tomatoes and mozzarella cheese salad topped with freshly made pesto sauce is a distinct yet simple one.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={image4} />
            <Card.Body>
              <Card.Title>Pasta Con Pomodoro E Basilico</Card.Title>
              <Card.Text>
              This is the most basic and simplest cooked pasta sauce, hence it is the benchmark of a good Italian home cook. This one boats of being among the original Italian recipes of pasta.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardGroup>
      }
    </div>
  );
};

export default Foods;