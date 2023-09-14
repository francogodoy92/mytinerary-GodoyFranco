import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { userSignUp } from '../Redux/actions/authActions'
import { toast } from 'react-toastify';
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import api_url from '../data/api';
import jwtDecode from 'jwt-decode';

const SignUp = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
      email: "",
      password: "",
      name: "",

    }); 
  
    const handleChange = (e) => {
      setUserData({ ...userData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post(api_url+'auth/signup', {
            email: userData.email,
            password: userData.password,
            name: userData.name,
            verified: true
          });
         
          console.log(response.data);
          if (response.data.success) {
       
            toast.success('Your user has been created')
            navigate('/');
          } else {
            
            toast.error("Registration failed. Please check your information.");
          }
        } catch (error) {
          console.error(error);

          toast.error("An error occurred while registering.");
        }
      }
      
      const loginWithGoogle = useGoogleLogin ({
        onSuccess: async tokenResponse => {
            console.log(tokenResponse)
            const infoUser = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
                headers: {
                    Authorization: 'Bearer '+ tokenResponse.access_token
                }
            })
            console.log(infoUser)
            const userData = {
                email: infoUser.data.email,
                name: infoUser.data.name,
                password: infoUser.data.family_name + "1#A",
                photo: infoUser.data.picture
            }
            dispatch(userSignUp(userData))
            
            navigate('/')
        }
    });

    return (
      <div className="w-full flex justify-center items-center h-screen bg-blue-800"> 
  <div className="card">
    <div className="card2">
      <form className="form flex flex-col gap-3 bg-blue-500 rounded-md shadow-md p-3" onSubmit={handleSubmit}>
        <p id="heading" className="text-center text-lg text-blue-900 font-bold my-4">Sign up</p>
        <div className="field flex items-center justify-center gap-2 rounded-lg p-2 bg-gray-200">
          <svg viewBox="0 0 16 16" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg" className="input-icon text-blue-500">
            <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z"></path>
          </svg>
          <input type="text" value={userData.email} onChange={handleChange} name="email" className="field bg-gray-200 text-blue-500" placeholder="Email" autoComplete="off" />
        </div>
        <div className="field flex items-center justify-center gap-2 rounded-lg p-2 bg-gray-200">
          <input type="text" value={userData.name} onChange={handleChange} name="name" className="field bg-gray-200 text-blue-500" placeholder="Name" autoComplete="off" />
        </div>
        <div className="field flex items-center justify-center gap-2 rounded-lg p-2 bg-gray-200">
          <svg viewBox="0 0 16 16" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg" className="input-icon text-blue-500">
            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
          </svg>
          <input type="password" value={userData.password} onChange={handleChange} name="password" className="field bg-gray-200 text-blue-500" placeholder="Password" />
        </div>
        <div className="btn flex justify-center mt-4">
          <button className=" bg-blue-800 text-white py-2 px-4 rounded-md mr-2 transition duration-300 hover:bg-blue-300 hover:text-black" onClick={() => navigate('/signin')}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Login&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </button>
          <button className=" bg-blue-800 text-white py-2 px-4 rounded-md transition duration-300 hover:bg-blue-300 hover:text-black" onClick={handleSubmit}>
            Sign Up
          </button>

          <button className="button1 bg-blue-800 text-white py-2 px-4 rounded-md mr-2 transition duration-300 hover:bg-blue-300 hover:text-black" onClick={() => loginWithGoogle()} type="button">Sign Up with Google</button>
        
        </div>
        <button className=" bg-blue-800 text-white py-2 px-4 rounded-md mt-4 transition duration-300 hover:bg-red-400 hover:text-black">Forgot Password?</button>
      </form>
    </div>
  </div>
</div>
     
    );
  };
  
  export default SignUp;
  

