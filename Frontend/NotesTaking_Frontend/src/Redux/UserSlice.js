import { createSlice } from "@reduxjs/toolkit";



const UserSlice = createSlice({

    name: "userdata", 
    initialState:{
        userdata:null,

    },
    reducers:{
        addUserdata:(state,action)=>{
            state.userdata=action.payload
        }
    }
})

export const {addUserdata} = UserSlice.actions
export default UserSlice.reducer