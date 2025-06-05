import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { ToastContainer } from 'react-toastify';

const Root = () => {
    return (
        <div className='bg-gray-200'>
            <Navbar></Navbar>
            <div className='mt-1  mx-auto '>
                 <Outlet></Outlet>
            </div>
             

             <ToastContainer></ToastContainer>

            <Footer></Footer>


        </div>
    );
};

export default Root;