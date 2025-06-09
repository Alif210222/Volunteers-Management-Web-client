import React, { Children, useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { auth } from './firebase.init';
import { toast } from 'react-toastify';

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const[loader,setLoader] = useState(true)

    // for create use 
      const createUser = (email,password )=>{
            setLoader(true)
            return createUserWithEmailAndPassword(auth,email,password)

      }

     // for login user
     const loginUser = ( email,password)=>{
           setLoader(true)
           return signInWithEmailAndPassword(auth, email, password)
     }

     // logout user 

       const logoutUser =()=>{
            signOut(auth)
            .then(res => {
                console.log(res)
                toast("Logout Successful")
            } )
            .catch(error =>{
                console.log(error)
            })
       }

       // update user 

          const updateUser = (updateData) =>{
               setLoader(true)
                return updateProfile(auth.currentUser , updateData)
          }


       // state observer 
      useEffect(()=>{
        const unSubscriber = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoader(false)
        })
        return () =>{
            unSubscriber()
        }
      },[])



const userInfo = {
    user,
    loader,
    setUser,
    createUser,
    loginUser,
    logoutUser,
    updateUser
}
 



    return (
         <AuthContext value={userInfo}>
         {children}
        </AuthContext>
    );
};

export default AuthProvider;