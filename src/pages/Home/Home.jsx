import React from 'react';
import Banner from './Banner';
import Features from './Features';
import Gellary from './Gellary';
import Newsletter from './Newsletter';
import CommunityImpact from '../CommunityImpact/CommunityImpact';

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <Features></Features>
          <Gellary></Gellary>
         <CommunityImpact></CommunityImpact>
          <Newsletter></Newsletter>
        </div>
    );
};

export default Home;