import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../Authentication/AuthContext';
import usericon from '../../assets/user.png'

const Navbar = () => {
    const {user,logoutUser} = use(AuthContext)

               const links = <>
                     <li className='font-bold text-lg lg:mr-3 hover:text-amber-600'><NavLink className={({isActive})=> isActive ? "text-orange-500 border-1" : "" } to='/'>Home</NavLink></li>
                     <li className='font-bold text-lg lg:mr-3 hover:text-amber-600'><NavLink className={({isActive}) => isActive? "text-orange-500 border-1" : ""} to="/volunteerNeed"> Volunteer Need post</NavLink></li> 
                     <li className='font-bold  text-lg lg:mr-3 hover:text-amber-600'>
        <details>
          <summary>My profile</summary>
          <ul className="w-50 ">
            <li className="text-sm font-medium "><NavLink className={({isActive}) => isActive? "text-orange-500 border-1" : ""}  to="/addPost">Add Volunteer need Post</NavLink></li>
            <li className="text-sm font-medium "><NavLink className={({isActive}) => isActive? "text-orange-500 border-1" : ""}  to="/managePost">Manage My Posts </NavLink></li>
          </ul>
        </details>
      </li>
               </> 




    return (
        <div>
            <div className="navbar bg-gray-300 shadow-sm px-14">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div> 
    <img src="https://i.ibb.co/7xX09t7t/vollogo.jpg" className='h-10 w-10 border rounded-3xl'  alt="" />
    <a className="btn btn-ghost text-2xl text-orange-400 font-bold -ml-2">VOLUNTEER<span className='text-black font-medium'>HOME</span></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
       {
        links
       }
    </ul>
  </div>
  <div className="navbar-end">
      {/* // display user profile and username  */}
      {
                 user && (  
                  <div className='border rounded-full relative inline-block group mr-4'>
                      <img  className='w-10 h-10 rounded-full cursor-pointer  ' src={user ? user.photoURL : usericon } alt="" />
                    <span className='text-center text-white bg-black pt-2 absolute w-35 h-10 top-6 left-1/2 transform -translate-x-1/2 mb-2  px-6 py-1 text-sm  rounded opacity-0 group-hover:opacity-100 transition-opacity'>{user?.displayName} </span>
                     
                  </div>
           
                 )
               }



    {
      !user && <div className=''>
          <Link to="/login" className><button className='btn bg-orange-400 font-bold hover:bg-orange-300'>Login</button></Link>
          <Link to="/Register" className><button className='btn bg-orange-400 font-bold ml-2 hover:bg-orange-300'>Register</button></Link>

         </div>
    }

   
      {
        user &&  <button onClick={logoutUser} className='btn bg-orange-400 font-bold'>Logout</button>
      }
   
  </div>
</div>
        </div>
    );
};

export default Navbar;