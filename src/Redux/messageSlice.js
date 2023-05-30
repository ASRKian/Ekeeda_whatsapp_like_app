import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
    name : "input",
    initialState: "",
    reducers: {
        sendMssgs(state, action) {
            state.concat(action.payload)
        },
    }
})

export const { sendMssgs } = messageSlice.actions 
export default messageSlice.reducer