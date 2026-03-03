import { useDispatch } from "react-redux";
import {options} from "../../utils/constants";
import { useEffect } from "react";
import { addGenres } from "../../utils/movieSlice";

const useGenre = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        async function getAllGenre() {
            const genreCall = await fetch('https://api.themoviedb.org/3/genre/movie/list', options);
            const genreData = await genreCall.json();
            dispatch(addGenres(genreData.genres));
        }
        getAllGenre()
    }, [])
}

export default useGenre;