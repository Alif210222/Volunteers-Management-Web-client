import React, { use, useContext } from 'react';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import { AuthContext } from '../Authentication/AuthContext';

const useNeedPostApi = () => {
      const {user} = useContext(AuthContext)
      const axiosSecure = useAxiosSecure()

      const myNeedPostPromise = () =>{
            return axiosSecure.get(`/myPost/${user.email}`)
            .then(res => res.data)
      }


    return {
        myNeedPostPromise
    }
};

export default useNeedPostApi;