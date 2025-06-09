import React, { use, useState } from 'react';
import { AuthContext } from '../../Authentication/AuthContext';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';



const AddPostPage = () => {
      const {user} = use(AuthContext)
       const [selectedDate, setSelectedDate] = useState(null);


      const handleAddGroup=(e)=>{
             e.preventDefault() 
              
             const form = e.target;
             const formData = new FormData(form)
             const postData = Object.fromEntries(formData.entries())
            //  console.log(postData)

            
        // save data to the database 
            axios.post("http://localhost:3000/addPost", postData)
            .then(res => {
                console.log(res.data)
                Swal.fire({
                  title: "Successfully Create !",
                  icon: "success",
                  // draggable: true,
                  showConfirmButton:false,
                  timer:1500
                });
            })
            .catch(error =>{
                console.log(error)
            })
            
            }

//className='bg-[#4f1f01]'

    return (
         <div >
              <Helmet>
                <title>Add Volunteer Post</title>
            </Helmet>


             <div className='bg-[#4f1f01] '>
               
                <div className='md:p-10 p-2'>
                     <h1 className='text-center text-4xl font-bold  bg-gradient-to-r from-orange-600 to-yellow-500 bg-clip-text text-transparent my-10'>
                    Add your Post  
                </h1>

                    <h1 className='text-gray-300 font-semibold text-center mb-10'>This page is for those user, who need some volunteer and create a post for need volunteer.
                             <br /> <span className='text-red-500'>So, please fill up this form, for create a post .   </span>. And  click create post button .    </h1>

                  <div className='md:p-6 md:mx-20 border-3 border-[#ce580f] rounded bg-orange-200 mb-10'>
                
                   <h1 className='text-center text-gray-600 text-2xl font-bold  underline mb-6'>Fill up this form</h1>
              
                <form  onSubmit={handleAddGroup} className=''>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'> 
                        <fieldset className="fieldset bg-base-200   rounded-box w-full  p-4">
                             
                              <label className="label text-[15px] text-[#a54102] font-bold">Post Title</label>
                              <input type="text" name='title' className="input w-full" placeholder="Enter group name"  required/>
                                     
                        </fieldset>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                             
                              <label className="label font-bold text-[15px] text-[#a54102]">Volunteer Category</label>
                              <select
                              required
                               id="hobby"
                               name="category"
                               class="block w-full p-2.5 border border-gray-300 bg-blue-50 rounded-lg input  text-gray-900  focus:ring-blue-500 focus:border-blue-500">
                               <option value="">-- Choose an option --</option>
                               <option value="Healthcare">Healthcare </option>
                               <option value="Education">Education</option>
                               <option value="Social-service">Social service</option>
                               <option value="Animal-welfare">Animal welfare</option>
                               <option value="Resque-team">Resque Team</option>
                              
                             </select>

                             
                                     
                        </fieldset>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                             
                              <label className="label font-bold text-[15px] text-[#a54102]">Description</label>
                              <textarea type="text" name='description' className="border border-gray-300 p-2 rounded w-full" placeholder="Enter description" required/>
                                     
                        </fieldset>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                             
                              <label className="label font-bold text-[15px] text-[#a54102]">Location</label>
                              <input type="text" name='location' className="input w-full" placeholder="Meeting Location" required/>
                                     
                        </fieldset>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                             
                              <label className="label font-bold text-[15px] text-[#a54102]">Number of volunteers needed </label>
                              <input type="text" name='member' className="input w-full" placeholder=" Number of Member" required/>
                                     
                        </fieldset>
                        {/* // adding datepicker  */}
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                             
                              <label htmlFor="date" className="label font-bold text-[15px] text-[#a54102]">Deadline</label>
                              {/* <input type="text" name='date' className="input w-full" placeholder="Enter start date" /> */}
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
                              <input type="text" name='photo' className="input w-full" placeholder="photo URL" required/>
                                     
                        </fieldset>

                        <input type='submit' className='btn w-full  mt-6 mb-6 bg-orange-800 text-white text-lg font-bold hover:bg-base-100 hover:text-black hover:border-2 hover:border-amber-600' value="Create post"></input>
                </form>
            </div>
        </div>

             </div>
        </div>
    );
};

export default AddPostPage;