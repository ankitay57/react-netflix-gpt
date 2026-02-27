import { useEffect } from "react";
import { options } from "../../utils/constants.js";
import { useDispatch} from "react-redux";
import { addMovie } from "../../utils/movieSlice.js";

 const useFetchMovie = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
        .then(res => res.json())
        .then(res => dispatch(addMovie(res.results)))
        .catch(err => console.error(err));
        }, []);
}

export default useFetchMovie;