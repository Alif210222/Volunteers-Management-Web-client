import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import PostCard from './PostCard';
import { Helmet } from 'react-helmet';

const VolunteerNeedPost = () => {
    const postsData = useLoaderData()
    const [posts,setPosts] = useState(postsData)
    console.log(posts)
    return (
        <div className=' border-0 rounded-2xl bg-gray-200 mt-18 p-6 '>

            <Helmet>
                <title>All volunteer need post</title>
            </Helmet>

         <h1 className='text-center mt-4 mb-16  font-bold text-4xl  bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent'>All volunteer Need post</h1>
            
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  '>

            {
                posts.map((post ,index) => <PostCard key={index} post={post}></PostCard>)
            }
         </div>
        </div>
    );
};

export default VolunteerNeedPost;