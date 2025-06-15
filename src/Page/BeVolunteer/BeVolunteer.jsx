import React, { use, useContext, useEffect, useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router';
import { AuthContext } from '../../Authentication/AuthContext';
import axios from 'axios';
import Swal from 'sweetalert2';
import { MemberContext } from '../../Components/Context/MemberProvider';
import { Helmet } from 'react-helmet';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const BeVolunteer = () => {
    const {user} = use(AuthContext)
//     const postData = useLoaderData()
        const [postData , setPostData] = useState([])

      const {_id, title,description,photo,category,location,member,date,name,email} = postData
      const {needMember,setNeedMember} = useContext(MemberContext)
      const navigate =  useNavigate()
      const axiosSecure  = useAxiosSecure()
      const params = useParams()
    // console.log(postData)

       useEffect(()=>{
                 axiosSecure(`/postDetails/${params?.id}`)
                 .then(res =>{
                  console.log(res.data)
                   setPostData(res.data)
                 })    
                 .catch(error =>{
                  console.log(error)
                 })
         },[params?.id,axiosSecure])




 const handleFormData = (e) => {
       e.preventDefault()

       const form = e.target;
       const formData = new FormData(form)
       const requestData =  Object.fromEntries(formData.entries())
       requestData.requestId =postData._id
      

       // data send to database 

       axios.post(`https://volunteer-web-server.vercel.app/addRequest/${_id}` , requestData)
       .then(res =>{
        // console.log(res.data)
        setNeedMember(needMember - 1)
        Swal.fire({
                          title: " Request send Successfully  !",
                          icon: "success",
                          // draggable: true,
                          showConfirmButton:false,
                          timer:1500
                        });

          navigate(-1)

       })
       .catch(error => {
        console.log(error)
       })

 }
 



    return (
         <div >
                      <Helmet>
                        <title>Be Volunteer Request post page</title>
                    </Helmet>
        
        
                     <div className='bg-[#602a08] dark:bg-black'>
                       
                        <div className='md:p-10 p-2'>
                             <h1 className='text-center text-4xl font-bold  bg-gradient-to-r from-orange-600 to-yellow-500 bg-clip-text text-transparent my-10'>
                            Add your Request  
                        </h1>

                        <h1 className='text-gray-300  font-semibold text-center mb-10'>In this page , a volunteer can be apply for to be a volunteer for specific role . All this field data for your work is fixed.
                             <br /> <span className='text-red-500'>So, only last 3 field is for you  </span>. please fill those <span className='text-red-500'>specific field</span>  and request for be a volunteer.   </h1>
                          <div className='md:p-6 md:mx-20 border-3 border-[#ce580f] rounded bg-orange-200 dark:bg-black mb-10'>
                         
                            <h1 className='text-center text-2xl font-bold  underline mb-8 text-red-500'>Don't edit this Section</h1>

                        <form  onSubmit={handleFormData} className=''>
                               


                            <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'> 
                                <fieldset className="fieldset bg-base-200   rounded-box w-full  p-4">
                                     
                                      <label className="label text-[15px] text-[#a54102] font-bold">Post Title</label>
                                      <input  type="text" name='title' readOnly defaultValue={title}  className="text-red-500 input w-full" placeholder="Enter group name" />
                                             
                                </fieldset>
                                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                                     
                                      <label className="label font-bold text-[15px] text-[#a54102]">Volunteer Category</label>
                                      <input type="text" name='category' readOnly defaultValue={category}  className="text-red-500 input w-full" placeholder="Volunteer Category" />
        
                                     
                                             
                                </fieldset>
                                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                                     
                                      <label className="label font-bold text-[15px] text-[#a54102]">Description</label>
                                      <textarea  type="text" name='description' readOnly defaultValue={description}  className="text-red-500 border p-3 rounded border-gray-300  w-full " placeholder="Enter description" />
                                             
                                </fieldset>
                                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                                     
                                      <label className="label font-bold text-[15px] text-[#a54102]">Location</label>
                                      <input type="text" name='location' readOnly defaultValue={location}  className="text-red-500 input w-full"  placeholder="Meeting Location" />
                                             
                                </fieldset>
                                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                                     
                                      <label className="label font-bold text-[15px] text-[#a54102]">Number of volunteers needed </label>
                                      <input type="text" name='member' readOnly defaultValue={member}  className="text-red-500 input w-full"  placeholder=" Number of Member" />
                                             
                                </fieldset>
                                {/* // adding datepicker  */}
                                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                                     
                                      <label htmlFor="date" className="label font-bold text-[15px] text-[#a54102]">Deadline</label>
                                      <input type="text" name='date' readOnly defaultValue={date}  className="text-red-500 input w-full" placeholder="Enter start date" />
                                      
                                             
                               </fieldset>
        
        
                                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                                     
                                      <label className="label font-bold text-[15px] text-[#a54102]">Organizer Name</label>
                                      <input type="text" readOnly  name='name'  defaultValue={name} className="input w-full text-red-500" placeholder="Enter Name" />
                                             
                                </fieldset>
                                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                                     
                                      <label className="label font-bold text-[15px] text-[#a54102]">Organizer Email</label>
                                      <input type="email" readOnly name='email' defaultValue={email} className="input w-full text-red-500" placeholder="Enter user email" />
                                             
                                </fieldset>
                               
                            </div>
                             <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4 my-4">
                                     
                                      <label className="label font-bold text-[15px] text-[#a54102]">Thumbnail </label>
                                      <input type="text" name='photo' readOnly defaultValue={photo}  className="text-red-500 input w-full"  placeholder="photo URL" />
                                             
                             </fieldset>

                             
                                                {/* // your section  */}


                              <h1 className='text-center text-2xl font-bold  underline my-6'>Your Section</h1>
                             <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
                                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                                     
                                      <label className="label font-bold text-[15px] text-[#a54102]">Volunteer name</label>
                                      <input type="text" readOnly name='volunteerName' defaultValue={user?.displayName} className="input w-full" placeholder="Enter your name" required />
                                             
                                </fieldset>
                                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                                     
                                      <label className="label font-bold text-[15px] text-[#a54102]">Volunteer email</label>
                                      <input type="email" readOnly name='volunteerEmail' defaultValue={user?.email} className="input w-full" placeholder="Enter your email" required />
                                             
                                </fieldset>
                                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                                     
                                      <label className="label font-bold text-[15px] text-[#a54102]">Status</label>
                                      <input type="text" name='status' defaultValue="Requested" className="input w-full" placeholder="your status" required />
                                             
                                </fieldset>
                           
                            
                             <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4 ">
                                     
                                      <label className="label font-bold text-[15px] text-[#a54102]">Volunteer Suggestion</label>
                                      <textarea type="text" name='suggestion' className="border border-gray-300 p-2 rounded w-full text-sm" placeholder="your suggestion" required />
                                             
                                </fieldset>
                             </div >
                            
                           
        
                                <input type='submit' className='btn w-full mt-10 mb-6 bg-orange-800 text-white  text-lg font-bold hover:bg-base-100 hover:text-gray-400 hover:border-2 hover:border-amber-600' value="Send request"></input>
                        </form>
                    </div>
                </div>
        
                     </div>
                </div>
    );
};

export default BeVolunteer;