import React from 'react';
import { motion } from "framer-motion";

const TextCom = () => {
    return (
     <div className='mt-10'> 
         <h1 className='text-center text-3xl font-bold underline mt-16  mb-10'>Our Goal</h1>
        <div className='text-center bg-amber-50 dark:bg-black my-16 py-10 px-6'>
             <div className='grid grid-cols-2 md:grid-cols-4 ml-20 md:ml-30 lg:ml-46   items-center justify-center  '>
                <motion.img src="https://i.ibb.co/q3qrCjX1/donation.png" 
                animate={{y:[-50,0,-50]}}
                transition={{duration:6,repeat:Infinity}}
                className='h-20  mt-2 shadow-2xl bg-white'  alt="" />

                <motion.img src="https://i.ibb.co/SXhBWQ1d/VOLUNTEER.png" 
                animate={{y:[-50,0,-50]}}
                transition={{duration:12,repeat:Infinity}}
                className='h-20  mt-2  shadow-2xl bg-white'  alt="" />

                <motion.img src="https://i.ibb.co/3yhVmqLf/FUND.png" 
                animate={{y:[-50,0,-50]}}
                transition={{duration:8,repeat:Infinity}}
                className='h-20  mt-2  shadow-2xl bg-white'  alt="" />

                <motion.img src="https://i.ibb.co/XZhbJcrC/team.png" 
                animate={{y:[-50,0,-50]}}
                transition={{duration:12,repeat:Infinity}}
                className='h-20  mt-2  shadow-2xl bg-white'  alt="" />
            </div>
            <h1 className='text-3xl font-bold mt-12 '>Save Earth From Destroy</h1>
           
            <h1 className='text-4xl font-semibold text-orange-500 mt-6'>Became a part of the world,with your small contribution.</h1>

            <p className=' flex justify-center items-center mt-10 font-bold text-gray-500 p-3'>Volunteering is a powerful act of kindness that asks for nothing but gives so much. It’s about showing up,  offering your  time and <br></br> heart to lift others and make a difference, no matter how small.  Each moment you <br /> give creates ripples of hope, compassion, and change in someone’s life. </p>
        </div>
        </div>
    );
};

export default TextCom;