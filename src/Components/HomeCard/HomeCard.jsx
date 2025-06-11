import React from 'react';

const HomeCard = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mb-20 gap-2 max-w-7xl mx-auto ml-4 md:ml-12 lg:ml-30 '>

        
        <div className='bg-[#f98110]  w-fit  flex items-center border-0 rounded-2xl p-4'>
           
            <div className='space-y-4'>
                 <h1 className='text-3xl font-bold text-white'>DONATION <span><img src="https://i.ibb.co/q3qrCjX1/donation.png" className='h-20 ml-4 mt-2'  alt="" /></span></h1>
                 <p className='w-[360px] text-white font-medium'>Your donation can bring hope, healing, and a better future to those in need.
                    Give a little, change a lot — every contribution counts.</p>
                    <button className='btn font-bold hover:bg-orange-400 hover:text-white'>Donate Now</button>
            </div>
        </div>
        <div className='bg-[#f58f2f]  w-fit flex items-center p-4 border-0 rounded-2xl'>
           
            <div className='space-y-4 '>
                 <h1 className='text-3xl font-bold text-white'>VOLUNTEER <span><img src="https://i.ibb.co/SXhBWQ1d/VOLUNTEER.png" className='h-20 ml-4 mt-2'  alt="" /></span></h1>
                 <p className='w-[360px] text-white font-medium'>Your donation can bring hope, healing, and a better future to those in need.
                    Give a little, change a lot — every contribution counts.</p>
                    <button className='btn font-bold hover:bg-orange-400 hover:text-white'>Join Now</button>
            </div>
        </div>
        <div className='bg-[#f98110]  w-fit  flex items-center p-4 border-0 rounded-2xl'>
            
            <div className='space-y-4 '>
                 <h1 className='text-3xl font-bold text-white'>FUNDRAISE <span><img src="https://i.ibb.co/3yhVmqLf/FUND.png" className='h-20 ml-4 mt-2'  alt="" /></span></h1>
                 <p className='w-[360px] text-white font-medium'>Your donation can bring hope, healing, and a better future to those in need.
                    Give a little, change a lot — every contribution counts.</p>
                    <button className='btn font-bold hover:bg-orange-400 hover:text-white'>Read More</button>
            </div>
        </div>
        </div>
    );
};

export default HomeCard;