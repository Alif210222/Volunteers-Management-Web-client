import React, { use, useEffect, useState } from 'react';
import SingleCard from './singleCard';
import { AuthContext } from '../../Authentication/AuthContext';
import Loader from '../Loader/Loader';
import { Link } from 'react-router';


const RecentPost = () => {
    const {loader ,setLoader } =  use(AuthContext)
    const[posts,setPosts] = useState([])


    //   console.log(posts)

      useEffect(()=>{
        fetch("https://volunteer-web-server.vercel.app/recentPost")
        .then(res => res.json())
        .then(data =>{
            // console.log(data)
          
              setPosts(data)
             
            
        })
        
    
      },[])

     if(loader) return <Loader></Loader>


    return (
        <div className='mb-20'>
            <h1 className='text-center text-4xl font-bold underline  mb-6'>Volunteers Need Now</h1> 
                  <p className='text-center mb-6 p-4 '>All the post is given here. If you want to be a volunteer , please see the post and the title, category , working <br /> location  is given .  If  you want know details please click the post details . </p>

               <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 bg-base-100  p-4 '>
                   {
                       posts.map( post => <SingleCard post={post}></SingleCard>)
                  }

                 
               </div>
                <div className='flex items-center justify-center my-10'>  

                     <Link to="/volunteerNeed"><button className='btn bg-orange-200 text-gray-600 font-bold text-lg border-2 rounded-2xl shadow-2xl hover:bg-white hover:border-2 hover:border-orange-500'>See All Post</button></Link>

                 </div>

              
            


        </div>
    );
};

export default RecentPost;