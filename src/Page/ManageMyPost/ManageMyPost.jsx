import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../Authentication/AuthContext';
import NeedPostTable from './needPostTable';
import RequestPostTable from './RequestPostTable';
import noNeedData from "../../assets/nodata.json"
import noReqAnim from "../../assets/noReqDtata.json"
import Lottie from 'lottie-react';
import { Helmet } from 'react-helmet';

const ManageMyPost = () => {
    const {user} = use(AuthContext)
    const [needPosts , setNeedPosts] = useState([])
    const [requestPosts , setRequestPosts] = useState([])


    console.log(needPosts)
    // my volunteer need post section
useEffect(() =>{
    fetch(`http://localhost:3000/myPost/${user?.email}`)
    .then(res => res.json())
    .then(needData =>{
        // console.log("need post data",needData.length)
        setNeedPosts(needData)
    })
   
},[user])





// my request need post section 

useEffect(() =>{
   fetch(`http://localhost:3000/requestPost/${user?.email}`)
   .then(res => res.json())
    .then(requestData =>{
        // console.log("request post data",data.length)
        setRequestPosts(requestData)
    })
},[user])
   



    return (
        <div>
            <Helmet>
                <title>Manage my post</title>
            </Helmet>
            
                                                   {/* // my volunteer need post section */}


            <div>

               <div className='max-w-7xl mx-auto p-6 mb-14'>
    
                   <h1 className='text-center text-4xl font-bold my-10 bg-gradient-to-r 
                    from-pink-500 to-yellow-500 bg-clip-text text-transparent underline'> My volunteers need post  </h1>


                   <div className="overflow-x-auto  p-10 border-2 rounded not-[]:">
                                 {/* if there  is no volunteer need post then this text will show inn my need volunteer section */}

                      
                       <div>
                          {
                            needPosts.length == 0 && <div>
                                 
                                 <h1 className='text-center font-bold text-2xl'>There is no post you have added <br /> for volunteers needed. </h1>
                                 
                           <div className='flex items-center justify-center'>
                                <Lottie loop={true} animationData={noNeedData}
                                
                                 style={{ height: "500px", width: "500px" }}>

                                </Lottie>
                             </div>

                            </div>
                          }    

                       </div>
                                 
           
                            
                              {/* if you have added any  volunteer post then this text will show       */}

                               {/* condition  */}

                          {
                              needPosts.length > 0 && <div>
                                 
                              <table className="table">
                                 {/* head */}
                                     <thead>
                                       <tr className='flex justify-around md:ml-10'>
                                         <th>
                                           <label>
                                             <p>No.</p>
                                           </label>
                                         </th>
                                         <th className='ml-3 md:ml-0'>Post Category</th>
                                         <th className= 'mr-8   md:mr-0 lg:mr-0'>Location</th>
                                         <th className='md:mr-9 mr-12 lg:mr-0'>Edit</th>
                                         <th className='-mr-0 md:-mr-4 '>Remove post</th>
                                       </tr>
                                     </thead>
                                     
                                     {
                                       needPosts.map((needPost,index) => <NeedPostTable   key={index} needPost={needPost} index={index} needPosts={needPosts}  setNeedPosts={setNeedPosts}   > </NeedPostTable>  )
                                     }
                    
                     
                                   </table>    

                           </div>
                     }    
   
                 </div>
             </div>

            </div>





                                                    {/* //   my request section */}



            <div>
  <div className='max-w-7xl mx-auto p-6 mb-44'>
    
                   <h1 className='text-center text-4xl font-bold my-10 bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent'> My request post  </h1>
                   <div className="overflow-x-auto  p-10 border-2 rounded not-[]:">

                        {/* if there  is no volunteer request post then this text will show in my request to bea  volunteer section */}

                   <div>
                          {
                            requestPosts.length == 0 && <div>
                                 
                                 <h1 className='text-center font-bold text-2xl'>There is no request you have requested <br /> for to be a volunteer . </h1>
                                 
                           <div className='flex items-center justify-center'>
                                <Lottie loop={true} animationData={noReqAnim}
                                
                                 style={{ height: "500px", width: "500px" }}>

                                </Lottie>
                             </div>

                            </div>
                          }    

                       </div>



                {/* if have any volunteer request post data is here then this text wi show  */}

                 {/* condition  */}

               <div>
                    {
                            requestPosts.length > 0 && <div>
                                 
                  <table className="table">
                     {/* head */}
                     <thead>
                       <tr className='flex justify-around md:ml-10'>
                         <th>
                           <label>
                             <p>No.</p>
                           </label>
                         </th>
                         <th className='ml-3 md:ml-0'>Post Category</th>
                         <th className= 'mr-8   md:mr-0 lg:mr-0'>Location</th>
                         <th className='md:mr-9 mr-12 lg:mr-0'>Status</th>
                         <th className='-mr-0 md:-mr-4 '>Remove request</th>
                       </tr>
                     </thead>
                     
                    {
                        requestPosts.map((requestPost,index) => <RequestPostTable requestPost={requestPost} index={index}  requestPosts={requestPosts} setRequestPosts={setRequestPosts}></RequestPostTable>  )
                    }
    
     
                     </table>

                   </div>
                }    

              </div>

                    
               </div>
        </div>

                  

            </div>   
        </div>
    );
};

export default ManageMyPost;