import React from 'react';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from '../Components/Root/Root';
import Homepage from '../Page/Home/Homepage';
import VolunteerNeedPost from '../Page/VolunteerNeedPost/VolunteerNeedPost';
import AddPostPage from '../Page/AddPost/AddPostPage';

import Login from '../Page/Login/Login';
import Register from '../Page/Register/Register';
import PostDetails from '../Page/VolunteerNeedPost/PostDetails';

import BeVolunteer from '../Page/BeVolunteer/BeVolunteer';
import ManageMyPost from '../Page/ManageMyPost/ManageMyPost';
import UpdateNeedPost from '../Page/ManageMyPost/UpdateNeedPost';
import PrivetRoute from '../Authentication/PrivetRoute';
import ErrorPage from '../Components/ErrorPage/ErrorPage';


export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
         {
            index:true,
            Component:Homepage
        },
        {
            path:"/volunteerNeed",
            Component:VolunteerNeedPost,
            loader:()=> fetch("http://localhost:3000/posts")
        },
        {
            path:"/addPost",
            element:<PrivetRoute> <AddPostPage></AddPostPage> </PrivetRoute> ,
           
        },
        {
            path:"/details/:id",
            element:<PrivetRoute> <PostDetails></PostDetails> </PrivetRoute>   ,
            loader:({params})=>fetch(`http://localhost:3000/postDetails/${params.id}`)
        },
        {
           path:"/beVolunteer/:id",
           Component:BeVolunteer,
           loader:({params})=>fetch(`http://localhost:3000/postDetails/${params.id}`)
        },
     
        {
          path:"/managePost",
          element:<PrivetRoute> <ManageMyPost></ManageMyPost> </PrivetRoute> ,
          
        },
        {
         path:"/update/:id",
         element:<PrivetRoute> <UpdateNeedPost></UpdateNeedPost> </PrivetRoute>,
         loader:({params})=>fetch(`http://localhost:3000/postDetails/${params.id}`)
        },
        {
            path:"/login",
            Component:Login
        },
        {
            path:"/register",
            Component:Register
        }
    ]
       
    
  },
]);

