import React, { use, useEffect } from 'react';
import { AuthContext } from '../../Authentication/AuthContext';

const ManageMyPost = () => {
    const {user} = use(AuthContext)

    // my volunteer need post section
useEffect(() =>{
    fetch(`http://localhost:3000/myPost/${user?.email}`)
    .then(res => res.json())
    .then(data =>{
        console.log("need post data",data.length)
    })
   
},[user])

// my request need post section 

useEffect(() =>{
    
   
},[])


    return (
        <div>
            this is manage my post.
                  {/* // my volunteer need post section */}
            <div>

            </div>

            {/* //   my request section */}

            <div>

            </div>   
        </div>
    );
};

export default ManageMyPost;