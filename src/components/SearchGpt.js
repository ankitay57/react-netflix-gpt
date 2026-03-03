import { useSelector } from "react-redux";
import { BANNER_PATH } from "../utils/constants";
import lang from "../utils/lang.js";
import { useRef } from "react";
import openAi from "../utils/openAi.js";
import { options } from "../utils/constants.js";
import MovieCard from "./MovieCard.js";
import {useState} from "react";


const SearchGpt = () => {
    const selectLang = useSelector((store) => store.lang.language);
    const movieGenre = useSelector((store) => store.movies.genres);
    const nowPlaying = useSelector((store) => store.movies.nowPlayingMovie);
    const popularMovies = useSelector((store) => store.movies.popularMovies);
    const topRated = useSelector((store) => store.movies.topRatedMovies);
    const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);
    const allMovies = [nowPlaying, popularMovies, topRated, upcomingMovies];
    const [hasSearched, setHasSearched] = useState(false);
    const searchVal = useRef(null);
    const [showSearch, setShowSearch] = useState([]);
    const handleGptSearch = () => {
        setHasSearched(true);
       const searchData= searchVal.current.value.toLowerCase();
       const searchGenre = movieGenre.find(value => searchData.includes(value.name.toLowerCase()));
       if(!searchGenre) setShowSearch("");
       else {
        const dataShow = allMovies.flat().filter(genre => genre.genre_ids.includes(searchGenre.id));
        setShowSearch(dataShow);
       }
    }
    return(<div className="h-screen">
        <img 
            src={BANNER_PATH}
            class="absolute inset-0 w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
        <form onSubmit={(e) => e.preventDefault()}>
            <div className="px-4 py-3 w-1/2 flex justify-between bg-black rounded-sm gap-2 m-auto">
                <input className="w-full px-3 py-1 rounded-sm" type="text" placeholder={lang[selectLang].EnterYourTextHere} ref={searchVal}></input>
                <button className="rounded-sm text-white bg-red-800 px-2 py-1" onClick={handleGptSearch}>{lang[selectLang].Search}</button>
            </div>
        </form>
        <div className="bg-black w-1/2 m-auto my-2 p-2">
            {hasSearched && showSearch.length === 0 && (
            <p className="text-white">Data not found</p>
            )}

            <div className="flex flex-wrap">
            {showSearch.length > 0 &&
            showSearch.map(movie => (
                <MovieCard
                key={movie.id}
                posterPath={movie.poster_path}
                />
            ))
            }
            </div>
        </div>
        </div>
    </div>)
}
export default SearchGpt;
