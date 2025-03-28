import { createSlice } from "@reduxjs/toolkit";



const UserSlice = createSlice({

    name: "userdata", 
    initialState:{
        userdata:null,
        Notes:null,

    },
    reducers:{
        addUserdata:(state,action)=>{
            state.userdata=action.payload
        }, 
        UserLogout:(state)=>{
            state.userdata=null
        },
        addUserNotes:(state,action)=>{
            state.Notes=action.payload
        }
    }
})

export const {addUserdata,UserLogout,addUserNotes} = UserSlice.actions
export default UserSlice.reducer