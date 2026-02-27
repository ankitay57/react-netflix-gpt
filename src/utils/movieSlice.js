import {createSlice} from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        movieData : []
    },
    reducers : {
        addMovie: (state, action) => {
            state.movieData = action.payload;
        },
        removeMovie: (state, action) => {
            state.movieData.pop();
        },
        clearMovie: (state, action) => {
            state.movieData= [];
        },
        addTrailer : (state, action) => {
            if(!state.movieData) return;
             const {id, key} = action.payload;
            const trailerData = state.movieData.find(trailerMovie => trailerMovie.id === id);
            trailerData.trailer = key;
        }
    }
})

export const {addMovie, removeMovie, clearMovie, addTrailer} = movieSlice.actions;
export default movieSlice.reducer;