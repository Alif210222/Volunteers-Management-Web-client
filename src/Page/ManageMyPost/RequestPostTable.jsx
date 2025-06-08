import React from 'react';

const RequestPostTable = ({requestPost,index,requestPosts,setRequestPosts}) => {

console.log(requestPosts.length)



const handleDeleteRequestPost=() =>{

}


    return (
        <div>
            
    <div className='mt-2'>
          
   <tbody >
      {/* row 1 */}
      <tr  className='flex justify-around items-center gap-6 md:gap-20   md:ml-30 lg:ml-30'>
        <th className='md:-ml-2' >
          <label>
          <p >{index+1}</p>
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                
              </div>
            </div>
            <div>
              <div className="font-bold text-orange-400 -ml-8 md:-ml-4   lg:ml-6 w-15">{requestPost?.category}</div>
             
            </div>
          </div>
        </td>
        <td>
            
         <p className='text-blue-500 font-bold md:ml-14 lg:ml-20 w-10'>{requestPost?.location}</p> 
          
        </td>
        <td>
            
         <p className='text-red-500 font-bold md:ml-14 lg:ml-20 w-10'>{requestPost?.status}</p> 
          
        </td>
        
           
       
       
        
          <td>
              <button onClick={()=>handleDeleteRequestPost(requestPost._id)}  className="btn bg-red-300 border-2 hover:shadow-xl md:ml-12  md:mr-8 lg:ml-14"> Delete</button>
          </td>
      </tr>
    </tbody>
        </div>



        </div>
    );
};

export default RequestPostTable;