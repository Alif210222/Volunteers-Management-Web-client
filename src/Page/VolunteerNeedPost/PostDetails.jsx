import React, { createContext, useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import { MemberContext } from '../../Components/Context/MemberProvider';
import Swal from 'sweetalert2';
import HelmetExport, { Helmet } from 'react-helmet';





const PostDetails = () => {
      const postDetails = useLoaderData()
        const {_id, title,description,photo,category,location,member,date,name,email} = postDetails
        // const [needMember,setNeedMember] = useState(member)
            //   console.log(postDetails)

    // use context value 

    const {needMember,setNeedMember} = useContext(MemberContext)

    useEffect(() =>{
        setNeedMember(member)
    },[member,setNeedMember])



    useEffect(()=>{
          if(member == 0){
        Swal.fire({
              title: " All vollunteers seat was boocked now. No More need. ",
              icon:"error",
            //   draggable: true,
              showConfirmButton:false,
              timer:3500
            });
       }

    },[member])
      



    return (
         

<div className="hero border-0 rounded-sm bg-base-300 md:p-10">
          <Helmet>
            <title>Post Details</title>
          </Helmet>
        
  <div className="hero-content gap-8 flex-col lg:flex-row-reverse mt-8">
    <img
      src={photo}
      className="w-full md:w-[490px] h-[400px] md:h-[530px] rounded-lg shadow-2xl"
    />
    <div className='bg-gray-400 p-6  border-0 rounded-2xl w-full  lg:w-[600px]  md:h-[530px] mb-14 md:mb-0'>
        <h1 className='text-xl text-center font-medium underline mb-4'>Post Details</h1>
         			<h1 className="text-2xl font-extrabold dark:text-gray-900">Post Title : {title}</h1>
			<p className="my-8 text-gray-100 "><span className='font-bold text-black'> Post description : </span> 
 				{description}
            </p>
            <div className='space-y-3 mb-4'>
             <p  className='text-gray-100'><span className='font-bold text-black'> Category : </span> {category}</p>
             <p  className='text-gray-100'><span className='font-bold text-black'>  Work location : </span>  {location}</p>
             <p  className='text-gray-100'><span className='font-bold text-black'> Need member : </span>  {needMember}</p>
             <p  className='text-gray-100'><span className='font-bold text-black'> Join Deadline : </span>  {date}</p>
             <p  className='text-gray-100'><span className='font-bold text-black'> Organizer name : </span>  {name}</p>
             <p  className='text-gray-100'><span className='font-bold text-black'> Organizer email : </span>  {email}</p>
           </div>
			
			

            {
                member > 0 ?  <div>
                   <Link to={`/beVolunteer/${_id}`}><button  type="button"   
                className="w-full font-semibold  py-2 mt-1  rounded dark:bg-violet-600 dark:text-gray-50">Be a volunteer</button></Link>
                </div>  
                :
                <button  className="w-full font-semibold  py-2 mt-1  rounded dark:bg-red-600 dark:text-white">No volunteer need now !</button>

            }
 				
    </div>
  </div>
</div>





    );
};

export default PostDetails;
