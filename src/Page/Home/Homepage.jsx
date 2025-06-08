import React from 'react';
import Banner from '../../Components/Banner/Banner';
import {Helmet} from "react-helmet";

const Homepage = () => {
    return (
        <div className='mt-20 '>
            <Helmet>
                <title>Home</title>
            </Helmet>
              <Banner></Banner>
        </div>
    );
};

export default Homepage;