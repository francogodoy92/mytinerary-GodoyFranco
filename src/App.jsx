import { Navigate, Outlet, RouterProvider, createBrowserRouter, } from "react-router-dom";
import Home from "./pages/Home";
import Cities from "./pages/Cities";
import Main from "./layouts/Main";
import Componente404 from "./pages/Componente404";
import Details from "./pages/Details";

import { GoogleOAuthProvider } from '@react-oauth/google';
import { Provider, useSelector } from 'react-redux';
import store from './Redux/store.js';
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const ProtectedRoute = () => {
  const { is_online } = useSelector(store => store.authReducer)
  if (is_online) {
    return <Outlet />
  }
  return <Navigate to='/signin' />
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
  {
    path: '/signin',
    element: <SignIn />
  },
  {
    path: '/signup',
    element: <SignUp />
  },
  {path: '/',
        element: <ProtectedRoute />,
        children: [
          {
            path: '/Cities',
            element: <Cities />
          },
          {
            path: '/Details/:id',
            element: <Details />
          },
        ]
  }
]);

export default function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}
// export default function App() {
//   return (
//   <Provider store={store}>
//     <RouterProvider router={router} />
//     <ToastContainer
//         position="top-right"
//         autoClose={5000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="light"

//       />
//   </Provider >
//   )
// }
