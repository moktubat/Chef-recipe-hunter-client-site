import React from 'react';
import { Container, Nav, NavLink, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Style from './Header.css';
import logo from '../../assets/logo.png';
import Login from '../../layouts/Login';

const Header = () => {
    return (
        <div className='header-bg'>
            <Navbar class="navbar navbar-expand-lg pt-3 pb-5" collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand to="/"><img src={logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link to="#features">Home</Nav.Link>
            <Nav.Link to="#pricing">Food</Nav.Link>
            <Nav.Link to="#deets">Blog</Nav.Link>
            <Nav.Link to="#about">About</Nav.Link>
            <Nav.Link to="/login">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
        <div className="container mt-5">
        <div className="d-flex align-content-center">
            <div className="col-md-12 col-lg-6 mt-5 pt-5 ms-e ">
                <h1 className="display-4 fw-bold text-black">Teste your best food with a new Style!</h1>
                <p className="text-body-secondary">Manufacturer of Pasta & Soups, Pasta & Fryums offered by The Tasty Tortellini from Rome, Italy.</p>
                <button className="btn btn-danger">Explore Now →</button>
            </div>
            <div className="col-md-12 col-lg-6">
              
                <img className='img-fluid rounded' src="https://media1.agfg.com.au/images/content/2721/7896.jpg" alt="" />
            </div>
        </div>
      </div>
        </div>
    );
};

export default Header;