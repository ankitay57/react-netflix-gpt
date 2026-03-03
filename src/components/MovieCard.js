import {BASE_PATH} from "../utils/constants"
const MovieCard = ({posterPath}) => {
    return(
        <div  className="w-48 flex-shrink-0">
            <img src={BASE_PATH + posterPath}  alt="movie card image"/>
        </div>
    )
}

export default MovieCard;