import React from 'react';
import errorImg from "../../assets/errorImg.jpg"
import { Link } from 'react-router';


const ErrorPage = () => {
    return (
        <div>
            <div>
                  <div className='flex flex-col items-center mt-6'>
                   

                    <div className='flex  justify-center   '>
                          <img src={errorImg} alt="error img" className='rounded-2xl h-[600px] w-[600px]' />
                    </div>

                    <h1 className='text-xl font-bold text-red-600 mt-6 '>This page is not available at this moment.</h1>
                    <Link to="/"><button className='btn btn-primary mt-4'> Back to home</button></Link>

                    
                  </div>
             </div>
        </div>
    );
};

export default ErrorPage;