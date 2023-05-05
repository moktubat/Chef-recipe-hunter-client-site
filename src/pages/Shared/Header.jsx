import React, { useContext } from "react";
import { Carousel, Container, Nav, NavLink, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Style from "./Header.css";
import Login from "../../layouts/Login";
import { AuthContext } from "../../providers/AuthProvider";
import slid1 from "../../assets/slide1.jpg";
import slid2 from "../../assets/slide2.jpg";
import slid3 from "../../assets/slide3.jpg";

const Header = () => {
  return (
    <div className="header-bg mb-5 pb-5">
      <div className="container pt-5">
        <div className="row">
          <div className="col-12 col-md-6 my-sm-5">
            <h1 className="display-4 fw-bold text-black">
              Test your best food with a new style!
            </h1>
            <p className="text-body-secondary">
              Manufacturer of Pasta & Soups, Pasta & Fryums offered by The Tasty
              Tortellini from Rome, Italy.
            </p>
            <button className="btn btn-danger">Explore Now →</button>
          </div>
          <div className="col-12 col-md-6 my-sm-5">
            <Carousel>
              <Carousel.Item interval={1000}>
                <img
                  className="d-block w-100 img-fluid rounded opacity-75"
                  src={slid1}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>Pizza alla Bufala</h3>
                  <p>
                    Never sit around and wait for someone unless they’re
                    delivering a pizza.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={500}>
                <img
                  className="d-block w-100 img-fluid rounded opacity-75"
                  src={slid2}
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h3>Giardiniera</h3>
                  <p>
                    Giardiniera is a traditional Italian mixture of vegetables,
                    carrots, onions, cauliflower, and cucumbers.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 img-fluid rounded opacity-75"
                  src={slid3}
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3>Tagliata di manzo</h3>
                  <p>
                    Tagliata is a traditional Italian meat dish that's most
                    commonly made with beef.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
