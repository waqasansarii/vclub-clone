 import {createSlice} from '@reduxjs/toolkit'


 const user = createSlice({
     name:'user',
     initialState:{
         user:false
     },
     reducers:{
         login:(state,action)=>{

               state.user = action.payload
         }
     }

 })


 export const {login} = user.actions

 export const userReducer = user.reducer
