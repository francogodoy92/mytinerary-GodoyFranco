import { createReducer } from "@reduxjs/toolkit";
import { userSignIn, userSignUp, logInWithToken, userLogOut } from "../actions/authActions";
import localStor from "../../data/localStorage";
import {toast} from "react-toastify"

const initialState = {
    user: {},
    token: "",
    isOnline: false
}

export const authReducer = createReducer(initialState, (builder)=> {
    builder
        .addCase(userSignUp.fulfilled, (store,action)=>{
            localStor.set("token", action.payload.token)
            toast.success('User created!');
            return {
                ...store,
                user: action.payload.userData,
                token: action.payload.token,
                isOnline: true
            }
        })
        .addCase(userSignIn.fulfilled, (store,action)=>{
            localStor.set("token", action.payload.token)
            toast.success("Welcome again "+ action.payload.userData.name)
            console.log(action.payload)
            return {
                ...store,
                user: action.payload.userData,
                token: action.payload.token,
                isOnline: true
            }
        })
        .addCase(userLogOut, (store)=>{
            localStor.clear()
            return {
                ...store,
                user: {},
                token: "",
                isOnline: false
            }
        })
        .addCase(logInWithToken.fulfilled, (store,action)=>{
            return {
                ...store,
                user: action.payload.response,
                token: action.payload.token,
                isOnline: true
            }
        })
        
})