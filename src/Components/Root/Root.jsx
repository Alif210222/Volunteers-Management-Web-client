import React, { useState } from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { ToastContainer } from 'react-toastify';

const Root = () => {
    const [theme,setTheme] = useState("light")






    return (
        <div className=' ' data-theme={theme}>
            <Navbar theme={theme} setTheme={setTheme}></Navbar>


            <div className='mt-1  mx-auto '>
                 <Outlet></Outlet>
            </div>
             

             <ToastContainer></ToastContainer>

            <Footer></Footer>


        </div>
    );
};

export default Root;