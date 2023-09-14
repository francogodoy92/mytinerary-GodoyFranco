import { createReducer } from "@reduxjs/toolkit";
import { userSignIn, userSignUp, logInWithToken } from "../actions/authActions";
import localStor from "../../data/localStorage";

const initialState = {
    user: {},
    token: "",
    isOnline: false
}

export const authReducer = createReducer(initialState, (builder)=> {
    builder
        .addCase(userSignUp.fulfilled, (store,action)=>{
            localStor.set("token", action.payload.token)
            return {
                ...store,
                user: action.payload.response,
                token: action.payload.token,
                isOnline: true
            }
        })
        .addCase(userSignIn.fulfilled, (store,action)=>{
            localStor.set("token", action.payload.token)
            return {
                ...store,
                user: action.payload.response,
                token: action.payload.token,
                isOnline: true
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