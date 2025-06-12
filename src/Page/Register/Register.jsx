import Lottie from 'lottie-react';
import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import regAnimation from "../../assets/regLotti.json"
import { AuthContext } from '../../Authentication/AuthContext';
import Swal from 'sweetalert2'
 import { ToastContainer, toast } from 'react-toastify';
import { Helmet } from 'react-helmet';


const Register = () => {
       const  {createUser,updateUser,setUser} = use(AuthContext)
       const [error,setError] = useState()
       const navigate = useNavigate()
       const location = useLocation()



  const handleRegister = (e) =>{
        e.preventDefault()
        
        const password = e.target.password.value;
        const form = e.target;
        const formData = new FormData(form)
        const  {name,photo,email, ...rest} = Object.fromEntries(formData.entries())
        

        // if (!/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password)) {
        //       // console.log("!Password must be longer than 5 characters and include at least one lowercase and one uppercase letter.");
        //  setError("! Password must be longer than 5 characters and include at least one lowercase and one uppercase letter.")
        //  return;
        //   }


// create user with firebase 
        createUser(email,password)
        .then(res => {
         const user = res.user 
           // update user
              updateUser({displayName:name,photoURL : photo})
              .then(()=> {
                setUser({...user , displayName:name,photoURL : photo })

                  toast("Registation Successful!")                
                 navigate(location?.state ||  "/" )

              })             
        })
        .catch(error =>{
          console.log(error)
          setError("you need to fullfil all the input field properly!")
        })


  }

  




    return (
         <div>
            <Helmet>
              <title>Register</title>
            </Helmet>
            
            <div className="hero bg-[#362101] min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
 
           <Lottie loop={true}  animationData={regAnimation} 
            style={{ height: "500px", width: "500px" }}
           ></Lottie>
   
    <div className="card bg-[#f4e7d1]  w-full max-w-sm h-[600px] shrink-0 shadow-2xl border p-14 ">
    <h1 className="text-4xl font-bold text-[#684004]">Register now!</h1>
      <div className="card-body ">
        <form  onSubmit={handleRegister} className="fieldset">

          <label className="label font-semibold text-black text-[15px]">Name</label>
          <input type="text" className="input" name="name" placeholder="Type your name" required />
          {/* <p className='text-md text-red-600 '></p> */}

          <label className="label font-semibold text-black text-[15px]">Photo Url</label>
          <input type="text" className="input" name="photo" placeholder="Photo Url" required/>

          <label className="label font-semibold text-black text-[15px]">Email</label>
          <input type="email" className="input" name="email" placeholder="Enter your email" required/>


          <label className="label font-semibold text-black text-[15px]">Password</label>
          <input type="password" className="input" name="password" placeholder="Password" required />
          <p className='text-red-500'>{error}</p>
          
          <button type='submit' className="btn btn-neutral mt-4 hover:bg-gray-600">Register</button>
        </form>


               {/* login with google */}

           

                {/* <p className='text-md text-red-600 '>{error}</p>    */}



        <p className='text-md font-bold mt-4'>If,you have no account , <Link to="/login" className='text-blue-600 text-md font-bold underline'>Login</Link></p>
      </div>
    </div>
  </div>
</div>
    
        </div>
    );
};

export default Register;