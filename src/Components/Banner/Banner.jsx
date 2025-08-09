import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { motion } from "framer-motion";
import { Link } from 'react-router';
import { Cursor,useTypewriter } from 'react-simple-typewriter'




const Banner = () => {

  
        const [text] = useTypewriter({
          words : ["empathy","earth"],
        loop:true,
               typeSpeed:120,
               deleteSpeed:80
      })
        const [text2] = useTypewriter({
          words : ["heart","action"],
        loop:true,
               typeSpeed:120,
               deleteSpeed:80
      })
        const [text3] = useTypewriter({
          words : ["service","unity"],
        loop:true,
               typeSpeed:120,
               deleteSpeed:80
      })






    return (
        <Swiper
      modules={[Navigation,Autoplay]} 
      autoplay={{ delay: 6000 }}
      loop={true}
      navigation
    >
      <SwiperSlide className='relative'>

        <div className='mb-6 mt-18  mx-auto '>
                   <section className="bg-amber-50  dark:bg-black    border-0 rounded-2xl">
       
             
       
        <div className="container flex flex-col gap-6 justify-center p- mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
       
                    
                   <motion.img src="https://i.ibb.co/93f77rVx/banner1.png"
            
            animate={{ rotate: -360 }}
                    transition={{
                   repeat: Infinity,
                   repeatType: "loop",
                    duration: 6,
                   ease: "linear",
             }}
            className='h-26 w-26 ml-36 md:ml-0  -mt-6' alt="" />
       
            <h1 className="text-5xl font-bold leading-none sm:text-6xl">Together We Can Make a  <br />
       
       
              <span className="text-orange-500">{text}</span> 
              <span style={{color: 'orange'}}>
                           <Cursor cursorStyle="|"></Cursor>
       
                       </span>
       
       
       
       
       
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">Join hands with passionate individuals to create meaningful impact in your community.
              <br  className="hidden md:inline lg:hidden" />Whether it's a few hours or a lifelong mission — your contribution matters. Start making a difference today.
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <Link to="/volunteerNeed"><button rel="noopener noreferrer" href="#" className="px-8 py-3 cursor-pointer text-lg font-semibold rounded bg-orange-500 dark:text-gray-50">Join With Us</button></Link>
              <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border-2 border-orange-400 text-orange-500 rounded ">Stay Connected</a>
            </div>
          </div>
              
                  
       
          <div className="grid grid-cols-2 gap-4 items-center justify-center p-6 mt-8 ">
            <motion.img src="https://i.ibb.co/cSvGbTbq/volsliderone.jpg" alt=""
              animate={{y:[-50,0,-50]}}
                     transition={{duration:10,repeat:Infinity}}
            className="object-contain  border-0 rounded-xl " />
       
       
       
            <motion.img src="https://i.ibb.co/FZ08nbH/volun3.jpg" alt="" 
            animate={{x:[50,0,50]}}
                   transition={{duration:10,repeat:Infinity}}
            className="object-contain  border-0 rounded-xl " />
       
            <motion.img src="https://i.ibb.co/7xs7Bx36/volthree.jpg" alt=""
              animate={{x:[-50,0,-50]}}
                   transition={{duration:10,repeat:Infinity}}
            className="object-contain   border-0 rounded-xl " />
       
       
       
       
            <motion.img src="https://i.ibb.co/k2gkNVLy/vol3.jpg" alt="" 
             animate={{y:[50,0,50]}}
                    transition={{duration:10,repeat:Infinity}}
            className="object-contain  border-0 rounded-xl " />
          </div>
        </div>
       </section>
               </div>
       
      </SwiperSlide>



      <SwiperSlide className='relative'>
         <div className='mb-6   mx-auto '>
                   <section className="bg-amber-50  dark:bg-black     border-0 rounded-2xl">
       
             
       
        <div className="container flex flex-col gap-6 justify-center p- mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
       
                    
                   <motion.img src="https://i.ibb.co/ZpkGQKQb/banner3.png"
            
            animate={{ rotate: -360 }}
                    transition={{
                   repeat: Infinity,
                   repeatType: "loop",
                    duration: 6,
                   ease: "linear",
             }}
            className='h-26 w-26 ml-36 md:ml-0  -mt-6' alt="" />
       
            <h1 className="text-5xl font-bold leading-none sm:text-6xl">Transform lives  communities through <br />
       
       
              <span className="text-orange-500">{text3}</span> 
              <span style={{color: 'orange'}}>
                           <Cursor cursorStyle="|"></Cursor>
       
                       </span>
       
       
       
       
       
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">Join hands with passionate individuals to create meaningful impact in your community.
              <br  className="hidden md:inline lg:hidden" />Whether it's a few hours or a lifelong mission — your contribution matters. Start making a difference today.
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <Link to="/volunteerNeed"><button rel="noopener noreferrer" href="#" className="px-8 py-3 cursor-pointer text-lg font-semibold rounded bg-orange-500 dark:text-gray-50">Join With Us</button></Link>
              <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border-2 border-orange-400 text-orange-500 rounded ">Stay Connected</a>
            </div>
          </div>
              
                  
       
          <div className="grid grid-cols-2 gap-4 items-center justify-center p-6 mt-8 ">
            <motion.img src="https://i.ibb.co/1fk45kYk/volalide1.jpg" alt=""
              animate={{y:[-50,0,-50]}}
                     transition={{duration:10,repeat:Infinity}}
            className="object-contain  border-0 rounded-xl " />
       
       
       
            <motion.img src="https://i.ibb.co/KcNdb4tF/volslide3.jpg" alt="" 
            animate={{x:[50,0,50]}}
                   transition={{duration:10,repeat:Infinity}}
            className="object-contain  border-0 rounded-xl " />
       
            <motion.img src="https://i.ibb.co/Z66DnWht/volslide2.jpg" alt=""
              animate={{x:[-50,0,-50]}}
                   transition={{duration:10,repeat:Infinity}}
            className="object-contain   border-0 rounded-xl " />
       
       
       
       
            <motion.img src="https://i.ibb.co/KcNdb4tF/volslide3.jpg" alt="" 
             animate={{y:[50,0,50]}}
                    transition={{duration:10,repeat:Infinity}}
            className="object-contain  border-0 rounded-xl " />
          </div>
        </div>
       </section>
               </div>
       
      </SwiperSlide>
      <SwiperSlide className='relative'>
         <div className='mb-6   mx-auto '>
                   <section className="bg-amber-50  dark:bg-black    border-0 rounded-2xl">
       
             
       
        <div className="container flex flex-col gap-6 justify-center p- mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
       
                    
                   <motion.img src="https://i.ibb.co/F4HDcD9d/banner6.png"
            
            animate={{ rotate: 360 }}
                    transition={{
                   repeat: Infinity,
                   repeatType: "loop",
                    duration: 6,
                   ease: "linear",
             }}
            className='h-26 w-26 ml-36 md:ml-0  -mt-6' alt="" />
       
            <h1 className="text-5xl font-bold leading-none sm:text-6xl">Together, we can create a better world through <br />
       
       
              <span className="text-orange-500">{text2}</span> 
              <span style={{color: 'orange'}}>
                           <Cursor cursorStyle="|"></Cursor>
       
                       </span>
       
       
       
       
       
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">Join hands with passionate individuals to create meaningful impact in your community.
              <br  className="hidden md:inline lg:hidden" />Whether it's a few hours or a lifelong mission — your contribution matters. Start making a difference today.
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <Link to="/volunteerNeed"><button rel="noopener noreferrer" href="#" className="px-8 py-3 cursor-pointer text-lg font-semibold rounded bg-orange-500 dark:text-gray-50">Join With Us</button></Link>
              <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border-2 border-orange-400 text-orange-500 rounded ">Stay Connected</a>
            </div>
          </div>
              
                  
       
          <div className="grid grid-cols-2 gap-4 items-center justify-center p-6 mt-8 ">
            <motion.img src="https://i.ibb.co/YBnxkFxc/vol1.jpg" alt=""
              animate={{y:[-50,0,-50]}}
                     transition={{duration:10,repeat:Infinity}}
            className="object-contain  border-0 rounded-xl " />
       
       
       
            <motion.img src="https://i.ibb.co/d4wGnkKY/volslide4.jpg" alt="" 
            animate={{x:[50,0,50]}}
                   transition={{duration:10,repeat:Infinity}}
            className="object-contain  border-0 rounded-xl " />
       
            <motion.img src="https://i.ibb.co/jZ1TRWLT/de6.jpg" alt=""
              animate={{x:[-50,0,-50]}}
                   transition={{duration:10,repeat:Infinity}}
            className="object-contain   border-0 rounded-xl " />
       
       
       
       
            <motion.img src="https://i.ibb.co/KcNdb4tF/volslide3.jpg" alt="" 
             animate={{y:[50,0,50]}}
                    transition={{duration:10,repeat:Infinity}}
            className="object-contain  border-0 rounded-xl " />
          </div>
        </div>
       </section>
               </div>
       
      </SwiperSlide>


      
    </Swiper>
    );
};

export default Banner;