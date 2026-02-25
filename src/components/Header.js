 import { signOut } from "firebase/auth";
 import {auth} from "../utils/firebase.js";
 import { useNavigate } from "react-router"
import { useSelector } from "react-redux";

const Header = () => {
    const navigate = useNavigate();
    const userSelect = useSelector((store) => store.user);
    const handleSignout = () =>{
        signOut(auth).then(() => {
            navigate("/login");
        }).catch((error) => {
           navigate("/error");
        });
    }
    return (
        <div className="p-10 border-b border-[#563d3d]">
            <div className="w-full max-w-[1200px] mx-auto flex justify-between">
                <img className = "w-32" src = "https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="logo"/>
                {userSelect && <div className="cursor-pointer">
                    <img className="w-[32px]" src= "https://pluspng.com/img-png/user-png-icon-big-image-png-2240.png" alt="user" />
                    <div>{userSelect.displayName}</div>
                     <button onClick = {handleSignout}>Sign Out</button>
                </div>}
            </div>
        </div>
    )
}

export default Header;