import { useSelector } from "react-redux";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { MdPlayArrow } from "react-icons/md";
import useVideo from "./customHooks/useVideo";

const MainContainer = () => {
    const getMovies = useSelector((store) => store?.movies?.movieData);
   
    const trending = getMovies[0];
    useVideo(trending);

    if (!getMovies || getMovies.length === 0) {
        return <div>Loading...</div>;
   }
    return(
        <div className="relative">
            <div className="video h-lvh w-full">
                <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${trending.trailer}?autoplay=1&mute=1&rel=0&controls=1`}
                    allowFullScreen
                ></iframe>
            </div>
            <div className="content absolute bottom-40 left-20 w-96 text-white text-left">
                <div className="text-[40px] font-semibold">{trending.title}</div>
                <div>{trending.overview}</div>
                <div className="flex gap-4 py-4"> 
                <button className="py-2 px-4 rounded-md bg-white hover:bg-[#cccccc] transition text-black w-40 flex items-center justify-center text-[20px] gap-1">
                    <MdPlayArrow />
                    <span className="font-semibold">Play</span>
                </button>
                <button className="py-2 px-4 rounded-md bg-[#6d6d6eb3] hover:bg-[#524f4fb3] transition text-white w-40 flex items-center justify-center text-[20px] gap-1">
                    <IoIosInformationCircleOutline />
                    <span className="font-semibold">More Info</span>
                </button>
                </div>
            </div>
        </div>
    )
    // get id from root
    // fetch data using id from useeffect
    // show data
}

export default MainContainer;