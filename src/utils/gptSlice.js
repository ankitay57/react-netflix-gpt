import {createSlice} from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gptPage',
    initialState: {
        gptEnable : false
    },
    reducers : {
        changeGptState: ((state) => {
            state.gptEnable = !state.gptEnable;
        })
    }
})

export const {changeGptState} = gptSlice.actions;
export default gptSlice.reducer;