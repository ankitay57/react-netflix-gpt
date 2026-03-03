import { useSelector } from "react-redux";
import MovieList from "./MovieList.js";

const SecondaryContainer = () => {
    const nowPlaying = useSelector((store) => store.movies);
    return (
        <div className="relative container m-auto relative top-[-150px]">
         <MovieList title={"Now Playing"} movie = {nowPlaying.nowPlayingMovie} />
        <MovieList title={"Trending"} movie = {nowPlaying.popularMovies} /> 
        <MovieList title={"Top Rated"} movie = {nowPlaying.topRatedMovies} />
        <MovieList title={"Upcoming"} movie = {nowPlaying.upcomingMovies} /> 
       </div>
    )
}

export default SecondaryContainer;