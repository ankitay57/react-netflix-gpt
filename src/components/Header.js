 import { signOut } from "firebase/auth";
 import {auth} from "../utils/firebase.js";
 import { useNavigate } from "react-router"
import { useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUsers, removeUsers } from "../utils/userSlice.js";
import { LOGO_URL, USER_URL } from "../utils/constants.js";

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userSelect = useSelector((store) => store.user);
    const handleSignout = () =>{
        signOut(auth).then(() => {
        }).catch((error) => {
           navigate("/error");
        });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                // const uid = user.uid;
                const {uid, email, displayName} = user;
                dispatch(addUsers({uid: uid, email:email, displayName: displayName}));
                navigate("/browse");
            } else {
                dispatch(removeUsers());
                navigate("/login");
            }
            });
            // this will be called when component unmounts
            return () => unsubscribe();
    }, [])
    return (
        <div className="p-10 border-b border-[#563d3d] fixed top-0 w-full z-10">
            <div className="w-full max-w-[1200px] mx-auto flex justify-between">
                <img className = "w-32" src = {LOGO_URL} alt="logo"/>
                {userSelect && <div className="cursor-pointer">
                    <img className="w-[32px]" src= {USER_URL} alt="user" />
                    <span>{userSelect.displayName}</span>
                     <button onClick = {handleSignout}>Sign Out</button>
                </div>}
            </div>
        </div>
    )
}

export default Header;