import React from 'react';
import Banner from './Banner';
import Delivery from './Delivery';
import Foods from './Foods';
import Landing from './Landing';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div>
            <Landing />
            <Banner />
            <Foods />
            <Delivery />
            <Testimonials />
        </div>
    );
};

export default Home;