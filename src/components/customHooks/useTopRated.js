import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addTopRatedMovie } from "../../utils/movieSlice";
import {options} from "../../utils/constants"

const useTopRated = () => {
    const dispatch = useDispatch();
    useEffect(() => {
            const fetchTopRated = async () => {
            const topUrl = await fetch('https://api.themoviedb.org/3/movie/top_rated', options);
            const topRatedData = await topUrl.json();
            dispatch(addTopRatedMovie(topRatedData.results));
        }
        fetchTopRated();
    },[])
}

export default useTopRated;