import React from 'react';
import Swal from 'sweetalert2';

const RequestPostTable = ({requestPost,index,requestPosts,setRequestPosts}) => {

// console.log(requestPosts.length)



const handleDeleteRequestPost =(id)=>{
        //  console.log(id)
        Swal.fire({
                   title: "Are you sure?",
                   text: "You want to delete this post!",
                   icon: "warning",
                   showCancelButton: true,
                   confirmButtonColor: "#3085d6",
                   cancelButtonColor: "#d33",
                   confirmButtonText: "Yes, delete it!"
                 })
                 .then((result) =>{
                    if(result.isConfirmed){
                         

                        fetch(`http://localhost:3000/deleteRequest/${requestPost?._id}` , {
                          method: "DELETE"

                        })
                        .then(res => res.json())
                        .then(data => {
                           if(data.deletedCount){
                            Swal.fire({
                            title: "Deleted!",
                            text: "Your post has been deleted.",
                            icon: "success"
                            });

                            // remove the group from the state
                             const  remainPost =  requestPosts.filter(post => post._id !== id )
                                    setRequestPosts(remainPost)

                           }
                        })

                    }
                 })

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
        <td className=''>
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
        <td className='' >
            
         <p className='text-blue-500 font-bold md:ml-14 lg:ml-20 w-10'>{requestPost?.location}</p> 
          
        </td>
        <td className='  mr-6'>
            
         <p className='text-green-600 font-bold p-2    md:ml-8 lg:ml-15'>{requestPost?.status}</p> 
          
        </td>
        
        
          <td className=' mr-4'>
              <button onClick={()=>handleDeleteRequestPost(requestPost?._id)}  className="btn bg-red-600 text-white border-2 hover:shadow-xl md:ml-12  md:mr-8 lg:ml-14">Cancel </button>
          </td>
      </tr>
    </tbody>
        </div>



        </div>
    );
};

export default RequestPostTable;