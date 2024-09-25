import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
    name: 'user',
    initialState : {
        user: null,
        userTask: null
    },

    reducers: {
        addUser: (state, action) => {
            state.user = action.payload
        }
    }
})


export default userSlice.reducer