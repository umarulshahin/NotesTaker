import { createSlice } from "@reduxjs/toolkit";



const UserSlice = createSlice({

    name: "userdata", 
    initialState:{
        userdata:null,

    },
    reducers:{
        addUserdata:(state,action)=>{
            state.userdata=action.payload
        }, 
        UserLogout:(state)=>{
            state.userdata=null
        }
    }
})

export const {addUserdata,UserLogout} = UserSlice.actions
export default UserSlice.reducer