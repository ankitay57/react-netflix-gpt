import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addUpcomingMovie } from "../../utils/movieSlice";
import {options} from "../../utils/constants"

const useUpcoming = () => {
    const dispatch = useDispatch();
    useEffect(() => {
            const fetchUpcoming = async () => {
            const upcomingUrl = await fetch('https://api.themoviedb.org/3/movie/upcoming', options);
            const upcomingData = await upcomingUrl.json();
            dispatch(addUpcomingMovie(upcomingData.results));
        }
        fetchUpcoming();
    },[])
}

export default useUpcoming;