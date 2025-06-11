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
        fetch("http://localhost:3000/recentPost")
        .then(res => res.json())
        .then(data =>{
            // console.log(data)
          
              setPosts(data)
             
            
        })
        
    
      },[])

     if(loader) return <Loader></Loader>


    return (
        <div className='mb-20'>
            <h1 className='text-center text-3xl font-bold underline   mb-16'>Recent Post</h1>

               <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-base-300 p-4 '>
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