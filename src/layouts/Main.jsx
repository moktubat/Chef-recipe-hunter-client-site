import React from 'react';
import Header from '../pages/Shared/Header';
import Footer from '../pages/Shared/Footer';
import { Outlet } from 'react-router-dom';
import NavBar from '../pages/NavBar';

const Main = () => {
    return (
        <div>
            <NavBar />
            <Outlet />
            <Footer />

        </div>
    );
};

export default Main;