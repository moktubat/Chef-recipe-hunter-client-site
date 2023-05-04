import React from 'react';
import Header from '../pages/Shared/Header';
import Footer from '../pages/Shared/Footer';
import Chefs from '../pages/Chefs';
import Foods from '../pages/foods';
import Review from '../pages/Review';
import ChefRecipes from '../pages/ChefRecipes';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Chefs></Chefs>

            <Foods></Foods>
            <Review></Review>
            <Footer></Footer>

        </div>
    );
};

export default Main;