import React from 'react';
import { Link } from 'react-router';

const NeedPostTable = ({needPost,index,needPosts,setNeedPosts}) => {


    console.log(needPost)

const  handleDeleteNeedPost = () =>{

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
              <div className="font-bold text-orange-400 -ml-8 md:-ml-4   lg:ml-6 w-15">{needPost?.category}</div>
             
            </div>
          </div>
        </td>
        <td>
            
         <p className='text-blue-500 font-bold md:ml-14 lg:ml-20 w-10'>{needPost?.location}</p> 
          
        </td>
        <Link to={`/update/${needPost?._id}`}>
            <button  className='btn bg-blue-200 border-2 hover:shadow-xl md:ml-8 lg:ml-15'>Update</button> 
        </Link>
       
        
          <td>
              <button onClick={()=>handleDeleteNeedPost(needPost._id)}  className="btn bg-red-300 border-2 hover:shadow-xl md:ml-12  md:mr-8 lg:ml-14"> Delete</button>
          </td>
      </tr>
    </tbody>
        </div>
        </div>
    );
};

export default NeedPostTable;