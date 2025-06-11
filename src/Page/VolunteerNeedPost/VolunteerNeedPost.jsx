import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import PostCard from './PostCard';
import { Helmet } from 'react-helmet';
import PostTable from './PostTable';
import table from "../../assets/table.png"
import card   from "../../assets/card.png"

const VolunteerNeedPost = () => {
    const postsData = useLoaderData()
    const [posts,setPosts] = useState(postsData)
    const [isTableView,setIsTableView] = useState(false)
    const [search , setSearch]= useState("")

    console.log(search)

    useEffect(()=>{
        fetch(`http://localhost:3000/posts?searchParams=${search}`)
        .then(res => res.json())
        .then(data =>{
            setPosts(data)
        })
    })
  

    // layot change 
    const handleLayoutToggle = ()=>{
          setIsTableView(!isTableView)
    }


    return (
        <div className=' border-1 rounded-2xl bg-base-300 mt-18 p-6  mb-16 max-w-7xl mx-auto'>

            <Helmet>
                <title>All volunteer need post</title>
            </Helmet>

            <div className='flex flex-col md:flex-row justify-between items-center   mt-10 mb-16'>

                  <h1 className='text-center    font-bold text-4xl  '>All volunteer Need post</h1> 

               <div className='flex justify-between items-center gap-18'>
                         {/* // search input */}
                  <label className="input mt-4 md:mt-0 md:mr-16">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                          >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                          </g>
                        </svg>
                        <input type="search" className="grow" placeholder="Search post"  onChange={(e) => setSearch(e.target.value)}/>
                        <kbd className="kbd kbd-sm">⌘</kbd>
                        <kbd className="kbd kbd-sm">K</kbd>
                  </label>

                            {/* // theme icon */}

                            
                  <div onClick={handleLayoutToggle} className='flex items-center'>
                    <p className='font-bold'>Change Layout:</p>
                    <div className=' '>
                        {
                           !isTableView  ? <img src={table} alt="table" className='h-10 w-10 text-blue-400' /> : <img src={card} className='h-10 w-10'></img>
                        }
                        

                        {
                          !isTableView? <p className='ml-1 font-bold '>Table</p> : <p className='ml-1 font-bold text-blue-400'>Card</p>
                        }
                    </div>
                        
                  </div>
              </div>     
        </div>


        {
          !isTableView && (
               <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  '>

            {
                posts.map((post ,index) => <PostCard key={index} post={post}></PostCard>)
            }
         </div>
          )
        }
         
            
          


          {/* // table layout  */}
   


          {
            isTableView && ( 

               <div>
            
            <div className="overflow-x-auto">
                   <table className="table">
                     {/* head */}

                     <thead>
                       <tr>
                         <th>
                           <label>
                             <input type="text" className="" />
                           </label>
                         </th>                       
                       </tr>
                     </thead>

                           {
                            posts.map((post,index) => <PostTable key={index} post={post} index={index}  ></PostTable>)
                           }
                     
                   </table>
              </div>
          

         </div>

            )
          }

        



        </div>
    );
};

export default VolunteerNeedPost;