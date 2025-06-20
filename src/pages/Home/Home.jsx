import React from 'react';
import Banner from './Banner';
import Features from './Features';
import Gellary from './Gellary';
import Newsletter from './Newsletter';

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <Features></Features>
          <Gellary></Gellary>
          <Newsletter></Newsletter>
        </div>
    );
};

export default Home;