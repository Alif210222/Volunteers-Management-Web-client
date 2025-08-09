import React from 'react';

const HomeCard = () => {
    return (
        <div >

           <h1 className='text-center text-3xl font-bold underline mt-6  mb-10'>Our Activities</h1>
           <div className=' w-full flex items-center justify-center '>

           


        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 mb-10 gap-10 max-w-7xl w-full justify-items-center '>

           

          {/* card-1 */}
        <div className='bg-[#f98110] dark:bg-black   w-fit  flex items-center border-0 rounded-2xl p-4'>
           
            <div className='space-y-4'>
                 <h1 className='text-3xl font-bold text-white'>DONATION <span className='dark:hidden '><img src="https://i.ibb.co/q3qrCjX1/donation.png" className='h-20 ml-4 mt-2'  alt="" /></span></h1>
                 <p className='w-[360px] text-white font-medium'>Your donation can bring hope, healing, and a better future to those in need.
                    Give a little, change a lot — every contribution counts.</p>
                    <button className='btn border-2 font-bold hover:bg-orange-400 hover:text-white'>Donate Now</button>
            </div>
        </div>
        {/* card-2 */}
        <div className='bg-[#f58f2f] dark:bg-black  w-fit flex items-center p-4 border-0 rounded-2xl'>
           
            <div className='space-y-4 '>
                 <h1 className='text-3xl font-bold text-white'>VOLUNTEER <span className='dark:hidden '><img src="https://i.ibb.co/SXhBWQ1d/VOLUNTEER.png" className='h-20 ml-4 mt-2'  alt="" /></span></h1>
                 <p className='w-[360px] text-white font-medium'>Your donation can bring hope, healing, and a better future to those in need.
                    Give a little, change a lot — every contribution counts.</p>
                    <button className='btn border-2 font-bold hover:bg-orange-400 hover:text-white'>Join Now</button>
            </div>
        </div>
        {/* card-3 */}
        <div className='bg-[#f98110] dark:bg-black  w-fit  flex items-center p-4 border-0 rounded-2xl'>
            
            <div className='space-y-4 '>
                 <h1 className='text-3xl font-bold text-white'>FUNDRAISE <span className='dark:hidden '><img src="https://i.ibb.co/3yhVmqLf/FUND.png" className='h-20 ml-4 mt-2'  alt="" /></span></h1>
                 <p className='w-[360px] text-white font-medium'>Your donation can bring hope, healing, and a better future to those in need.
                    Give a little, change a lot — every contribution counts.</p>
                    <button className='btn border-2 font-bold hover:bg-orange-400 hover:text-white'>Read More</button>
            </div>
           </div>
        </div>
     </div>
</div>
    );
};

export default HomeCard;