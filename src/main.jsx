import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {RouterProvider} from "react-router";
import { router } from './Router/Router.jsx';
import AuthProvider from './Authentication/AuthProvider.jsx';
import { MemberProvider } from './Components/Context/MemberProvider.jsx';




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MemberProvider>
       <AuthProvider>
               <RouterProvider router={router} />
       </AuthProvider>
    </MemberProvider>
     
  </StrictMode>,
)
