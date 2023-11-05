import {configureStore} from "@reduxjs/toolkit"
import  loginslice  from "./Loginslice"
import blogslice  from "./Blogslice"
import  signupslice  from "./Signupslice"



export const Store = configureStore({
    reducer:{
        loginsliceee:loginslice ,
        blogsliceee:blogslice,
        signupsliceee:signupslice
    }
})