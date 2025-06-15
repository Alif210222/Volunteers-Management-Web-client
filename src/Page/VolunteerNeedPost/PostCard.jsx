import React from 'react';
import { Link } from 'react-router';

const PostCard = ({post}) => {
       const {_id, title,description,photo,category,location} = post


    return (
        <div className="card bg-base-100  dark:bg-black shadow-sm p-">
  {/* <figure>
    <img
    className='w-full md:h-[300px]'
      src={photo}
      alt="Shoes" />
  </figure> */}
  <div className="card-body">
    <h2 className="card-title text-xl font-bold">{title}</h2>
    <div className='flex gap-6'>
          <p className='border-2 border-orange-400 rounded-2xl   p-2  text-orange-500 font-bold text-center'>{category}</p>
          <p className='border-2 border-orange-400 rounded-2xl   p-2   text-orange-500 font-bold text-center'>{location}</p>
    </div>
    
        <p className='font-medium text-gray-400 mt-4'>{description}</p>
    <div className="card-actions justify-end">
      <Link to={`/details/${_id}`}><button className="btn border-2 hover:border-orange-500 bg-orange-500 hover:bg-white  font-bold">View Details</button></Link>
    </div>
  </div>
</div>
    );
};

export default PostCard;