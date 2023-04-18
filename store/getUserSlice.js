import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    value: 0,
}



export const getUserSlice = createSlice({
    name: "get_user",
    initialState,
    reducers: {
        getUSer: (state) => {
            state.value += 1
        }
    }
})


export const {getUSer} = getUserSlice.actions

export default getUserSlice.reducer