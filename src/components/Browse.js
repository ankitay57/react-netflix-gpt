import Header from "./Header";
import MovieList from "./MovieList.js";
import { useSelector } from "react-redux";
import useFetchMovie from "./customHooks/useFetchMovie.js";
import MainContainer from "./MainContainer.js";

const Browse = () => {
   const moviesData = useSelector((store) => store.movies.movieData);
   console.log(moviesData);
   useFetchMovie(); // fetching movies
    return (
        <div><Header />
            <div >
                <MainContainer/>
                {moviesData.map((data) => {
                    return (
                        <div>
                        <MovieList key = {data.id}  movie = {data} />
                        </div>
                    )}
                )}
            </div>
        </div>
    )
}

export default Browse;