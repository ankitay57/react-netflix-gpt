import Header from "./Header";
import SecondaryContainer from "./SecondaryContainer.js";
import useNowPlayingMovie from "./customHooks/useNowPlayingMovie.js";
import MainContainer from "./MainContainer.js";
import usePopular from "./customHooks/usePopular.js";
import useTopRated from "./customHooks/useTopRated.js";
import useUpcoming from "./customHooks/useUpcoming.js";
import { useSelector } from "react-redux";
import SearchGpt from "./SearchGpt.js";
import useGenre from "./customHooks/useGenre.js";

const Browse = () => {
   const showSearch = useSelector((store) => store.gptPage.gptEnable);
   useNowPlayingMovie(); // fetching movies
   usePopular(); // fetching movies
   useTopRated(); // fetching top rated
   useUpcoming(); // upcoming movies
   useGenre(); // store all genres
    return (
        <div><Header />
            <div className="bg-black">
                {showSearch ? <SearchGpt /> : <><MainContainer/>
                <SecondaryContainer/></>} 
            </div>
        </div>
    )
}

export default Browse;