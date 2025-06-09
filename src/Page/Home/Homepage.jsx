import React from 'react';
import Banner from '../../Components/Banner/Banner';
import {Helmet} from "react-helmet";

const Homepage = () => {
    return (
        <div className='mt-20  bg-amber-50'>
            <Helmet>
                <title>Volunteer Home</title>
            </Helmet>
              <Banner></Banner>
        </div>
    );
};

export default Homepage;