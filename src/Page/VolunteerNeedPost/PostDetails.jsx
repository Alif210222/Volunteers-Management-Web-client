import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router';






const PostDetails = () => {
      const postDetails = useLoaderData()
        const {_id, title,description,photo,category,location,member,date,name,email} = postDetails
        const [needMember,setNeedMember] = useState(member)
              console.log(postDetails)






    return (
//         

<div className="hero border-0 rounded-sm bg-base-300 md:p-10">
  <div className="hero-content gap-8 flex-col lg:flex-row-reverse mt-8">
    <img
      src={photo}
      className="w-full md:w-[490px] h-[400px] md:h-[530px] rounded-lg shadow-2xl"
    />
    <div className='bg-white p-6  border-0 rounded-2xl w-full  lg:w-[600px]  md:h-[530px] mb-14 md:mb-0'>
        <h1 className='text-xl text-center font-medium underline mb-4'>Post Details</h1>
         			<h1 className="text-2xl font-extrabold dark:text-gray-900">Post Title : {title}</h1>
			<p className="my-8 "><span className='font-bold text-black'> Post description : </span> 
 				{description}
            </p>
            <div className='space-y-3 mb-4'>
             <p ><span className='font-bold text-black'> Category : </span> {category}</p>
             <p><span className='font-bold text-black'>  Work location : </span>  {location}</p>
             <p><span className='font-bold text-black'> Need member : </span>  {needMember}</p>
             <p><span className='font-bold text-black'> Join Deadline : </span>  {date}</p>
             <p><span className='font-bold text-black'> Organizer name : </span>  {name}</p>
             <p><span className='font-bold text-black'> Organizer email : </span>  {email}</p>
           </div>
			
			
 				<Link to={`/beVolunteer/${_id}`}><button  type="button" className="w-full font-semibold  py-2 mt-1  rounded dark:bg-violet-600 dark:text-gray-50">Be a volunteer</button></Link>
    </div>
  </div>
</div>





    );
};

export default PostDetails;