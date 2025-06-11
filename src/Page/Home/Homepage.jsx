import React from 'react';
import Banner from '../../Components/Banner/Banner';
import {Helmet} from "react-helmet";
import Hero from '../../Components/Hero/Hero';
import HomeCard from '../../Components/HomeCard/HomeCard';
import RecentPost from '../../Components/RecentPost/RecentPost';

const Homepage = () => {
    return (
        <div className='mt-20  '>
            <Helmet>
                <title>Volunteer Home</title>
            </Helmet>
              {/* <Banner></Banner> */}
              <Hero></Hero>


              <HomeCard></HomeCard>


                <div className='max-w-7xl mx-auto'>

                      <RecentPost></RecentPost>
                      
                </div>
            
        </div>
    );
};

export default Homepage;