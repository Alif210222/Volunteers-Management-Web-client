import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';
import loginAnm from "../../assets/login.json"
import Lottie from 'lottie-react';
import { AuthContext } from '../../Authentication/AuthContext';
import Swal from 'sweetalert2'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from '../../Authentication/firebase.init';
import { ToastContainer, toast } from 'react-toastify';


const Login = () => {
  const {loginUser}= use(AuthContext)
  const navigate = useNavigate()

// google login

   const provider = new GoogleAuthProvider();

   const handleGoogleLogin =()=>{
           signInWithPopup(auth, provider)
         .then(res=>{
          // console.log(res)
         
              toast("Login with google Successful!")
              navigate("/")
         })
         .catch(error =>{
          console.log(error)
         })
   }
        





// firebase login
const handleLogin = (e) =>{
      e.preventDefault()

      const form = e.target
      const email = form.email.value 
      const password = form.password.value
      console.log(email,password)

       loginUser(email,password)
       .then(res=> {
        
             toast("Login Successful!")
              navigate("/")
       })
       .catch(error =>{
        console.log(error)
       })


    }




    return (
         <div>
          {/* <Helmet>
            <title>Log In</title>
          </Helmet> */}
            <div>
            
             <div className="hero bg-[#362101] min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">

        <Lottie loop={true}  animationData={loginAnm} 
                   style={{ height: "500px", width: "500px" }}
                  ></Lottie>
 
    <div className="card bg-[#f4e7d1]  shrink-0 shadow-2xl border p-10">
    <h1 className="text-4xl font-bold text-[#663e02]">Login now!</h1>
      <div className="card-body ">
        <form  onSubmit={handleLogin} className="fieldset">
          <label className="label font-semibold text-black text-[15px]">Email</label>

                                  {/* user log in korle user er email reset password field e dite hobe    ref={emailRef} */}
          <input type="email" className="input" name='email'  placeholder="Enter your email"  required/>
          <label className="label font-semibold text-black text-[15px]">Password</label>
          <input type="password" className="input" name='password' placeholder="Password" required />
          <p className='text-md text-red-600 text-[14px] mb-4'>error </p>
         
           

          <button   className="btn btn-neutral mt-4 hover:bg-gray-700">Login</button>
   
        </form>

               {/* login with google */}

       <button onClick={handleGoogleLogin}   type='submit' className="btn bg-amber-500 text-black border-[#e5e5e5]">
             <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                  Login with Google
      </button>
     
   



        <p className='text-md font-bold'>If,you have no account , <Link to="/register" className='text-blue-600 text-md font-bold underline'>Register</Link></p>
      </div>
    </div>
  </div>
</div>
        </div>
        </div>
    );
};

export default Login;