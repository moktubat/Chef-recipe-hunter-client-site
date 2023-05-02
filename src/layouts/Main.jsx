import React from 'react';
import Header from '../pages/Shared/Header';
import Footer from '../pages/Shared/Footer';
import Chefs from '../pages/Chefs';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Chefs></Chefs>
            <Footer></Footer>
        </div>
    );
};

export default Main;