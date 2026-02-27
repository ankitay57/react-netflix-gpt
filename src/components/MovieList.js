import { BASE_PATH } from "../utils/constants.js";

const MovieList = ({movie}) => {
    const {backdrop_path} = movie;
    return (
            <img className="w-64" src = {BASE_PATH + backdrop_path} />
        )
}

export default MovieList;