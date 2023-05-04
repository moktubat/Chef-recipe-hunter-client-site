import React from 'react';
import Header from '../Shared/Header';
import Chefs from '../Chefs';
import Foods from '../foods';
import Review from '../Review';
import Footer from '../Shared/Footer';

const Home = () => {
    return (
        <div>
            <Header />
            <Chefs></Chefs>

            <Foods></Foods>
            <Review></Review>
        
            
        </div>
    );
};

export default Home;