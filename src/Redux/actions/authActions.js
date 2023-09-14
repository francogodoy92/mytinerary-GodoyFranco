import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import api_url from "../../data/api";
import axios from "axios";
import localStor from "../../data/localStorage";
import { toast } from 'react-toastify'


export const userSignUp = createAsyncThunk('userSignUp', async (userData)=>{
    try {
        const res = await axios.post(api_url+'auth/signup',{
            ...userData
        })
        return res.data
    } catch (error) {
        console.log(error);
        return {}
    }
})

export const userSignIn = createAsyncThunk('userSignIn', async (userData) => {
    try {
        const response = await axios.post(api_url + 'auth/signin', { ...userData });


        if (response.data.success) {
            return response.data;
        } else {
            return { error: response.data.message };
            toast.error('Login failed. Please check your credentials.');
        }
    } catch (error) {
        console.error(error);

        return { error: 'An error occurred while logging in.' };
    }
});



export const logInWithToken = createAsyncThunk('logInWithToken', async ()=>{
    try {
        const token = localStor.getText("token")
        const res = await axios.get(api_url+'auth/token',{
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
        return res.data
    } catch (error) {
        console.log(error);
        return {}
    }
})



