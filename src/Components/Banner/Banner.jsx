import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';


const Banner = () => {
    return (
        <Swiper
      modules={[Navigation,Autoplay]} 
      autoplay={{ delay: 3000 }}
      loop={true}
      navigation
    >
      <SwiperSlide className='relative'>
        <div className='absolute  md:top-30 lg:ml-96 md:ml-54 flex flex-col items-center justify-center text-center '>
           <Fade direction='down'
             delay={300} duration={3000} triggerOnce     
           > 
            <h1 className='text-2xl text-white md:text-5xl font-bold mt-14 ml-8 md:ml-0'>Photography </h1>
           </Fade> 
           <Fade duration='up'>  
            <p className='text-[12px] lg:text-xl text-white font-bold ml-10 md:ml-20'>"Capturing stories through every frame, where light meets emotion."</p>
            </Fade>
        </div>
        
        <img className='lg:h-[620px] w-full lg:w-[1600px]' src="https://i.ibb.co/cSvGbTbq/volsliderone.jpg" alt="Banner 1" />
       
      </SwiperSlide>



      <SwiperSlide className='relative'>
        <div className='absolute  md:top-30 lg:ml-98 md:ml-60 flex flex-col items-center justify-center text-center '>
            <Fade 
             direction="down"
             delay={200} duration={3000} triggerOnce
             
             >  
            <h1 className=' text-2xl text-white md:text-5xl font-bold mt-14 ml-8 md:ml-0'>Medical Assistant </h1>
            </Fade>  
            <Fade duration='down'>  
            <p className='text-[12px] lg:text-xl text-white font-bold ml-6  md:ml-0'>"Providing compassionate support to patients while ensuring efficient clinical operations..
Turn simple <br /> lines into powerful expressions.
Draw your world the way you see it.."</p>
        </Fade>
            
        </div>
        
        <img className='lg:h-[620px] w-full lg:w-[1600px]' src="https://i.ibb.co/vCr1SfXm/vol-2.jpg" alt="Banner 2" />
       
      </SwiperSlide>
      <SwiperSlide className='relative'>
        <div className='absolute  md:top-30 lg:ml-90 flex flex-col items-center justify-center text-center '>
            <Fade direction="down"
             delay={200} duration={3000} triggerOnce
            > 
            <h1 className='text-2xl  md:text-5xl font-bold mt-20'>Drawing </h1>
            <p className='text-[12px] md:text-xl  font-bold  md:ml-20'>""In every sketch, a world unfolds,
Where silence speaks through shapes and shades."."</p>
             </Fade>
        </div>
        
        <img className='lg:h-[620px] w-full lg:w-[1600px]' src="https://i.ibb.co/KzD1py91/vol3.webp" alt="Banner 3" />
       
      </SwiperSlide>


      
    </Swiper>
    );
};

export default Banner;