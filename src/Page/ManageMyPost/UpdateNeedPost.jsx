import React, { use, useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { AuthContext } from '../../Authentication/AuthContext';
import DatePicker from 'react-datepicker';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const UpdateNeedPost = () => {
    const {user} = use(AuthContext)
//     const UpdateData = useLoaderData()
    const [UpdateData , setUpdateData] = useState([])
//     console.log(UpdateData)

      const [selectedDate, setSelectedDate] = useState(UpdateData.date);
      const [category, setCategory] = useState(UpdateData.category)
      const axiosSecure = useAxiosSecure()
      const params = useParams()
    //   console.log(postData)
      

        useEffect(() =>{
               axiosSecure(`postDetails/${params?.id}`) 
               .then(res =>{
                  setUpdateData(res.data)
                  setCategory(res.data.category)
                  setSelectedDate(res.data.date)
               })
               .catch(error=>{
                  console.log(error)
               })
        },[params?.id,axiosSecure])





    // data update from database 

        const handleUpdatePost =(e)=>{
              e.preventDefault()
              const form = e.target;
              const formData = new FormData(form);
              const UpdatePost = Object.fromEntries(formData.entries())
            //   console.log(UpdatePost)

            axiosSecure.put(`/updatePost/${UpdateData?._id}`,UpdatePost ,{
            //     method:"PUT",
                headers:{
                    "content-type" : "application/json"
                },
            //     body: JSON.stringify(UpdatePost)
            })
            // .then(res => res.json())
            .then(data => {
                console.log(data.data)
                if(data.data.modifiedCount){
                    Swal.fire({
                  title: "Update successful",
                  icon: "success",
                  draggable: true
                });
                }
            })


      }



    return (
         <div >
                      <Helmet>
                        <title>Update post </title>
                    </Helmet>
        
        
                     <div className='bg-[#4f1f01] dark:bg-black'>
                       
                        <div className='md:p-10 p-2'>
                             <h1 className='text-center text-4xl font-bold  bg-gradient-to-r from-orange-600 to-yellow-500 bg-clip-text text-transparent my-10'>
                           Update your request Post  
                        </h1>
        
                          <div className='md:p-6 md:mx-20 border-3 border-[#ce580f] rounded bg-orange-200 dark:bg-black mb-10'>
                        
                           <h1 className=' text-gray-500 text-center text-2xl font-bold  underline mb-6'>Update this form</h1>
                      
                        <form  onSubmit={handleUpdatePost} className=''>
                            <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'> 
                                <fieldset className="fieldset bg-base-200   rounded-box w-full  p-4">
                                     
                                      <label className="label text-[15px] text-[#a54102] font-bold">Post Title</label>
                                      <input type="text" name='title' className="input w-full" defaultValue={UpdateData?.title} placeholder="Enter group name"  required/>
                                             
                                </fieldset>
                                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                                     
                                      <label className="label font-bold text-[15px] text-[#a54102] ">Volunteer Category</label>
                                      <input
                                      defaultValue={category}
                                      required
                                       id="hobby"
                                       name="category"
                                       class="block w-full p-2.5 border border-gray-300 bg-blue-50 dark:bg-gray-800 rounded-lg input  text-black dark:text-white  focus:ring-blue-500 focus:border-blue-500">
                                       
                                     </input>
        
                                     
                                             
                                </fieldset>
                                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                                     
                                      <label className="label font-bold text-[15px] text-[#a54102]">Description</label>
                                      <textarea type="text" name='description' defaultValue={UpdateData?.description} className="border border-gray-300 p-2 rounded w-full" placeholder="Enter description" required/>
                                             
                                </fieldset>
                                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                                     
                                      <label className="label font-bold text-[15px] text-[#a54102]">Location</label>
                                      <input type="text" name='location' className="input w-full" defaultValue={UpdateData?.location}  placeholder="Meeting Location" required/>
                                             
                                </fieldset>
                                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                                     
                                      <label className="label font-bold text-[15px] text-[#a54102]">Number of volunteers needed </label>
                                      <input type="text" name='member' className="input w-full" defaultValue={UpdateData?.member} placeholder=" Number of Member" required/>
                                             
                                </fieldset>
                                {/* // adding datepicker  */}
                                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                                     
                                      <label htmlFor="date" className="label font-bold text-[15px] text-[#a54102]">Deadline</label>
                                      {/* <input  /> */}

                                       <DatePicker
                                     
                                       required
                                       name="date"
                                       className="input w-full"
                                               id="date"
                                               selected={selectedDate}
                                               onChange={(date) => setSelectedDate(date)}
                                               dateFormat="yyyy-MM-dd"
                                               placeholderText="Select a date"
                                             />
                                             
                               </fieldset>
        
        
                                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                                     
                                      <label className="label font-bold text-[15px] text-[#a54102]">Organizer Name</label>
                                      <input type="text" readOnly name='name' defaultValue={user?.displayName} className="input w-full text-red-500" placeholder="Enter Name" required/>
                                             
                                </fieldset>
                                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                                     
                                      <label className="label font-bold text-[15px] text-[#a54102]">Organizer Email</label>
                                      <input type="email" readOnly name='email' defaultValue={user?.email} className="input w-full text-red-500" placeholder="Enter user email" required/>
                                             
                                </fieldset>
                            </div>
        
                            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4 my-6">
                                     
                                      <label className="label font-bold text-[15px] text-[#a54102]">Thumbnail </label>
                                      <input type="text" name='photo' className="input w-full" defaultValue={UpdateData?.photo} placeholder="photo URL" required/>
                                             
                                </fieldset>
        
                                <input type='submit' className='btn w-full  mt-6 mb-6 bg-orange-800 text-white text-lg font-bold hover:bg-base-100 hover:text-gray-300 hover:border-2 hover:border-amber-600' value="Update post"></input>
                        </form>
                    </div>
                  </div>
        
                     </div>
                </div>
    );
};

export default UpdateNeedPost;