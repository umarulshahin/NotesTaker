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
            state.Notes=null
        },
        addUserNotes:(state,action)=>{
            state.Notes=action.payload
        },
        RemoveNote:(state,action)=>{
            const id = action.payload
            console.log(id,'id ')
            state.Notes = state.Notes.filter((note)=>note.id!==id)
        }
    }
})

export const {addUserdata,UserLogout,addUserNotes,RemoveNote} = UserSlice.actions
export default UserSlice.reducer