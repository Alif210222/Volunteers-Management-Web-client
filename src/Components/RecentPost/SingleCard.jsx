import React from 'react';
import { Link } from 'react-router';

const SingleCard = ({post}) => {
        const {_id,date, title,description,photo,category,location} = post

    return (
         <div className="card bg-base-100  shadow-sm p-">
  <figure>
    <img
    className='w-full md:h-[300px]'
      src={photo}
      alt="Shoes" />
  </figure>
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