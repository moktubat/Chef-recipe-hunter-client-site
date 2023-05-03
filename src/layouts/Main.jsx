import React from 'react';
import Header from '../pages/Shared/Header';
import Footer from '../pages/Shared/Footer';
import Chefs from '../pages/Chefs';
import Foods from '../pages/foods';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Chefs></Chefs>
            <Foods></Foods>
            <Footer></Footer>
        </div>
    );
};

export default Main;