import React from 'react';

const Loader = () => {
    return (
        <div>
        <div className='min-h-screen flex justify-center items-center'>
            <span className=" loading loading-dots loading-xl"></span>
        </div>
    </div>
    );
};

export default Loader;