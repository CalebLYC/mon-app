import React from 'react';
import Countries from '../componants/Countries';
import Logo from '../componants/Logo';
import Navigation from '../componants/Navigation';

const Home = () => {
    return (
        <div>
            <Logo />
            <Navigation />
            <Countries />
        </div>
    );
};

export default Home;