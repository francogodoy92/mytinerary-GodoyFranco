import { createReducer } from "@reduxjs/toolkit";
import { userSignIn, userLogOut, userSignUp, logInWithToken } from "../actions/authActions";
import localStor from "../../data/localStorage";

const initialState = {
    user: {},
    token: "",
    isOnline: false
}

export const userSignUpReducer = createReducer(initialState, (builder)=> {
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
        .addCase(userLogOut, (store)=>{
            localStor.remove("token")
            return {
                ...store,
                user: {},
                token: "",
                isOnline: false
            }
        })
})