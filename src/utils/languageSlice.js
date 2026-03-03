import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
    name: "lang",
    initialState : {
        language: "english"
    },
    reducers: {
        addLang: (state, action) => {
            state.language = action.payload;
        }
    }
})

export const {addLang} = languageSlice.actions;
export default languageSlice.reducer;