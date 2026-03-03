
import MovieCard from "./MovieCard";

const MovieList = ({title, movie}) => {
    return (<div className="py-2 pb-6">
        {/* <img src={BASE_PATH + backdrop_path}  alt="movie card image"/> */}
        <h2 className="text-white text-[24px] text-left font-semibold pb-2">{title}</h2>
        <div className="flex overflow-x-auto gap-4">
            { movie.map(nowPlaying => (
                <MovieCard key = {nowPlaying.id} posterPath = {nowPlaying.poster_path}/>
            ))}
        </div>
    </div>)
}

export default MovieList;