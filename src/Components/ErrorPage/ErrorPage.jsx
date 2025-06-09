import React from 'react';
import errorImg from "../../assets/errorImg.jpg"


const ErrorPage = () => {
    return (
        <div>
            <div>
                  <div className='flex flex-col items-center mt-6'>
                   

                    <div className='flex  justify-center   '>
                          <img src={errorImg} alt="" className='rounded-2xl' />
                    </div>

                    <h1 className='text-xl font-bold text-red-600 mt-6 '>This page is not available at this moment.</h1>
                   

                    
                  </div>
             </div>
        </div>
    );
};

export default ErrorPage;