import React from 'react';
import { Container, Nav, NavLink, Navbar } from 'react-bootstrap';
import logo from '../assets/logo.png';
import './NavBar.css';
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <div className='nav-bg'>
            <Navbar class="navbar navbar-expand-lg pt-3 pb-5" collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand to="/"><img src={logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Link to='/' className='nav-link fw-bold text-danger'>Home</Link>
            <Link to='/blog' className='nav-link fw-bold text-danger'>Blog</Link>
            <Link to='/login' className='nav-link fw-bold text-danger'>
              Login
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default NavBar;