import {createSlice} from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlayingMovie : [],
        popularMovies: [],
        topRatedMovies: [],
        upcomingMovies: [],
        genres: [],
    },
    reducers : {
        addMovie: (state, action) => {
            state.nowPlayingMovie = action.payload;
        },
        removeMovie: (state, action) => {
            state.nowPlayingMovie.pop();
        },
        clearMovie: (state, action) => {
            state.nowPlayingMovie= [];
        },
        addTrailer : (state, action) => {
            if(!state.nowPlayingMovie) return;
             const {id, key} = action.payload;
            const trailerData = state.nowPlayingMovie.find(trailerMovie => trailerMovie.id === id);
            trailerData.trailer = key;
        },
        addPopularMovie: (state, action) => {
            state.popularMovies = action.payload;
        },
        removePopularMovie: (state, action) => {
            state.popularMovies.pop();
        },
         addTopRatedMovie: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addUpcomingMovie: (state, action) => {
            state.upcomingMovies = action.payload;
        },
        addGenres: (state, action) => {
            state.genres = action.payload
        }
    }
})

export const {addMovie, removeMovie, clearMovie, addTrailer, addPopularMovie, removePopularMovie, addTopRatedMovie, addUpcomingMovie, addGenres} = movieSlice.actions;
export default movieSlice.reducer;