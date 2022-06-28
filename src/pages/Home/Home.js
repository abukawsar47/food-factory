import React from 'react';
import Banner from './Banner';
import Delivery from './Delivery';
import Foods from './Foods';
import Landing from './Landing';

const Home = () => {
    return (
        <div>
            <Landing />
            <Banner />
            <Foods />
            <Delivery />
        </div>
    );
};

export default Home;