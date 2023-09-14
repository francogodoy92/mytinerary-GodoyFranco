import { Navigate, Outlet, RouterProvider, createBrowserRouter, } from "react-router-dom";
import Home from "./pages/Home";
import Cities from "./pages/Cities";
import Main from "./layouts/Main";
import Componente404 from "./pages/Componente404";
import Details from "./pages/Details";
import { useDispatch } from "react-redux";
import { logInWithToken } from "./Redux/actions/authActions.js";
import { GoogleOAuthProvider } from '@react-oauth/google';
import {  useSelector } from 'react-redux';
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from "react";




const ProtectedRoute = () => {
  const isOnline  = useSelector(store => store.authReducer.isOnline)
  
  const [isLogged, setIsLogged] = useState(false)
  useEffect(()=> {
    setIsLogged(isOnline)
  }, [])
  console.log(isLogged)
  if (isLogged) {
    return <Navigate to='/' />
  }
  return <Outlet />
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/Home", element: <Home /> },
      { path: "/Cities", element: <Cities /> },
      { path: "/Details/:id", element: <Details /> },
    ],
  },
  { path: "*", element: <Componente404 /> },
  {path: '/register',
        element: <ProtectedRoute />,
        children: [
          {
            path: '/register/signin',
            element: <SignIn />
          },
          {
            path: '/register/signup',
            element: <SignUp />
          },
        ]
  }
]);

export default function App() {

  const dispatch = useDispatch()
  dispatch(logInWithToken())

  return (
   
      <GoogleOAuthProvider clientId="947391405366-ne3o2q5boo3qt9c4q46ve0snrr5qtftv.apps.googleusercontent.com">
        <RouterProvider router={router} />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </GoogleOAuthProvider>

  );
}
