import axios from 'axios';
import React, { use, useContext, useEffect } from 'react';
import { AuthContext } from '../Authentication/AuthContext';


const axiosInstance = axios.create({
      baseURL: "http://localhost:3000"
})


const useAxiosSecure = () => {
    // const {logoutUser} = use(AuthContext)

      const {user,logoutUser} = useContext(AuthContext)

      axiosInstance.interceptors.request.use(config =>{
        config.headers.authorization = `Bearer ${user?.accessToken}`
        return config;
       })
      
    // intercept response 

    // axiosInstance.interceptors.response.use(
    //     res => res,
    //     err =>{
    //         if(err.status === 401  || err.status === 403){
    //           logoutUser()
    //           .then (()=>{
    //             console.log(`you are logout because of  an error with ${err.status} code`)
    //           })
    //           .catch(err => console.log(err))
    //         }
    //     }
    // )




    return  axiosInstance;
};

export default useAxiosSecure;