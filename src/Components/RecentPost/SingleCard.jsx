import React from 'react';
import { Link } from 'react-router';

import { motion } from "framer-motion";

const SingleCard = ({post}) => {
        const {_id,date, title,description,photo,category,location} = post

    return (
         <div className="card bg-base-100  dark:bg-black shadow-xl ">


   


  <motion.div
   key={photo}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1, delay: photo * 0.1 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-2xl shadow-lg hover:scale-105 transform transition duration-300"
  >
    <img
    className='w-full md:h-[300px]'
      src={photo}
      alt="Shoes" />
  </motion.div>


  <div className="card-body">
    <h2 className="card-title text-xl font-bold">Post title : {title}</h2>
    <div className=''>
          <p className='font-bold '>Post category : {category}</p>
          <p className='font-bold '>Location :  {location}</p>
    
    
        <p className=' text-gray-500 mt-4 font-bold'> Deadline : {date}</p>
        </div>
    <div className="card-actions justify-end">
      <Link to={`/details/${_id}`}><button className="btn border-2 hover:border-orange-500 bg-orange-500 hover:bg-white  font-bold">View Details</button></Link>
    </div>
  </div>
</div>
    );
};

export default SingleCard;