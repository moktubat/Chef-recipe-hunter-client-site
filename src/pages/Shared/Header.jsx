import React from 'react';
import { NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Style from './Header.css';
import logo from '../../assets/logo.png';

const Header = () => {
    return (
        <div className='header-bg'>
            <nav class="navbar navbar-expand-lg pt-3 pb-5">
          <div class="container">
            <Link href="#" class="navbar-brand"><img src={logo} alt="" /></Link>

            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navmenu"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
        
            <div class="collapse navbar-collapse" id="navmenu">
              <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                  <NavLink href="#" class="nav-link fs-5">Home</NavLink>
                </li>
                <li class="nav-item">
                  <NavLink href="#" class="nav-link fs-5">Food</NavLink>
                </li>
                <li class="nav-item">
                  <NavLink href="#" class="nav-link fs-5">Blog</NavLink>
                </li>
                <li class="nav-item">
                    <NavLink href="#" class="nav-link fs-5">Order</NavLink>
                </li>
                <li class="nav-item">
                    <NavLink href="#" class="nav-link fs-5">Login</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <section class="container mt-5">
        <div class="d-flex align-content-center">
            <div class="col-md-6 mt-5 pt-5 ms-e">
                <h1 class="display-4 fw-bold text-black">Teste your best food with a new Style!</h1>
                <p class="text-body-secondary">Manufacturer of Pasta & Soups, Pasta & Fryums offered by The Tasty Tortellini from Rome, Italy.</p>
                <button class="btn btn-danger">Explore Now →</button>
            </div>
            <div class="col-md-6">
              
                <img className='img-fluid rounded' src="https://media1.agfg.com.au/images/content/2721/7896.jpg" alt="" />
            </div>
        </div>
      </section>
        </div>
    );
};

export default Header;