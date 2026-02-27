import { useDispatch} from "react-redux";
import {options} from "../../utils/constants";
import { useEffect } from "react";
import {addTrailer} from "../../utils/movieSlice";
const useVideo = (trending) => {
    const dispatch = useDispatch();
    
    const getMainMovie = async () => {
        const fetchVideo = await fetch(`https://api.themoviedb.org/3/movie/${trending.id}/videos?language=en-US`, options);
        const response = await fetchVideo.json();
        const trailer = response.results.find(movieList => movieList.type === "Trailer");
        dispatch(addTrailer({id: trending.id, key: trailer.key}))
    }
    useEffect(() => {
         if (!trending) return;
        getMainMovie()
    }, [trending])
}

export default useVideo;