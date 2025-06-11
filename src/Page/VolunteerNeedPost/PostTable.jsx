import React from 'react';
import { Link } from 'react-router';

const PostTable = ({ post , index}) => {





    return (
        <div>
            <tbody >
      {/* row 1 */}
      <tr >
        <th>
          <label>
           {index+1}
          </label>
        </th>

              <div className='flex items-center gap-20 bg-base-300'>

                 <td>
                     <div className="flex items-center gap-20 justify-center">
                       <div className="border-1 p-2  w-60">
                         
                          <p className='font-bold'>Post category : {post?.category}</p>
                         
                       </div>
                       <div className='flex flex-col w-60'>
                         <div className="font-bold">Post title : {post?.title}</div>
                         <div className="text-sm opacity-50"> Need member : {post?.member}</div>
                        </div>
                     </div>
                     </td>
                     <td className='w-60'>
                        <p>Location :  {post.location}</p>
                     </td>
                   
                     <th>
                         <Link to={`/details/${post?._id}`}> <button className="btn btn-ghost text-lg border-2 border-orange-600  ">Details</button></Link>
                    </th>

               </div>
      </tr>
    </tbody>
        </div>
    );
};

export default PostTable;