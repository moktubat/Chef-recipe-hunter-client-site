import React from "react";
import { Button, Card, CardGroup } from "react-bootstrap";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import { FaDollarSign, FaStar, FaStarHalfAlt } from 'react-icons/fa';


const Foods = () => {
  return (
    <div className="container text-center my-5 bg-danger-subtle rounded" id="food">
      <h2 className="fw-bold text-black d-inline  px-4 border-bottom border-5 border-danger pb-1">
        Popular Items
      </h2>

      {
        <CardGroup className="gap-5 my-5" >
          <Card className="shadow p-3 mb-5 bg-body rounded">
            <Card.Img variant="top" src={image1} />
            <Card.Body>
              <Card.Title>Fettuccine Pomodoro</Card.Title>
              <Card.Text>
              A light, quick and easy pasta recipe, Fettuccine Pomodoro is a delicious dish for breakfast, brunch or kid's tiffin!
              </Card.Text>
              <div>
                <p className="text-bold"><FaDollarSign/>50</p>
                <p>
                  <FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStarHalfAlt></FaStarHalfAlt>
                </p>
              </div>
            </Card.Body>
            <Card.Footer>
              <Button variant="danger"><small>Order Now</small></Button>
            </Card.Footer>
          </Card>
          <Card className="shadow p-3 mb-5 bg-body rounded">
            <Card.Img variant="top" src={image2} />
            <Card.Body>
              <Card.Title>Bruschetta</Card.Title>
              <Card.Text>
              An antipasto dish, bruschetta has grilled bread topped with veggies, rubbed garlic and tomato mix.
              </Card.Text>
              <div>
                <p className="text-bold"><FaDollarSign/>50</p>
                <p>
                  <FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStarHalfAlt></FaStarHalfAlt>
                </p>
              </div>
            </Card.Body>
            <Card.Footer>
            <Button variant="danger"><small>Order Now</small></Button>
            </Card.Footer>
          </Card>
          <Card className="shadow p-3 mb-5 bg-body rounded">
            <Card.Img variant="top" src={image3} />
            <Card.Body>
              <Card.Title>Caprese Salad with Pesto Sauce</Card.Title>
              <Card.Text>
              Nothing like a fresh tomato salad in summers! A great antipasto bite to start your meal with.
              </Card.Text>
              <div>
                <p className="text-bold"><FaDollarSign/>50</p>
                <p>
                  <FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStarHalfAlt></FaStarHalfAlt>
                </p>
              </div>
            </Card.Body>
            <Card.Footer>
            <Button variant="danger"><small>Order Now</small></Button>
            </Card.Footer>
          </Card>
          <Card className="shadow p-3 mb-5 bg-body rounded">
            <Card.Img variant="top" src={image4} />
            <Card.Body>
              <Card.Title>Pasta Con Pomodoro E Basilico</Card.Title>
              <Card.Text>
              This is the most basic and simplest cooked pasta sauce, hence it is the benchmark of a good Italian home cook.
              </Card.Text>
              <div>
                <p className="text-bold"><FaDollarSign/>50</p>
                <p>
                  <FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStarHalfAlt></FaStarHalfAlt>
                </p>
              </div>
            </Card.Body>
            <Card.Footer>
            <Button variant="danger"><small>Order Now</small></Button>
            </Card.Footer>
          </Card>
        </CardGroup>
      }
    </div>
  );
};

export default Foods;
