import React, { use } from 'react';
import { AuthContext } from './AuthContext';
import Loader from '../Components/Loader/Loader';
import { Navigate, useLocation } from 'react-router';


const PrivetRoute = ({children}) => {
           const {user,loader} = use(AuthContext)
           const location = useLocation()


        if(loader){
            return <Loader></Loader>
        }


        if(user && user.email){
            return children;
        }




    return (
        <Navigate state={location.pathname} to="/login"> </Navigate>
    );
};

export default PrivetRoute;