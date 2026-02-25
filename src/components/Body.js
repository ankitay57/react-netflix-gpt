import Login from "./Login.js"
import Browse from "./Browse.js"
import MarketingPage from "./MarketingPage.js"
import { createBrowserRouter, RouterProvider } from "react-router"
import { useEffect } from "react"
import {auth} from "../utils/firebase.js";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUsers, removeUsers } from "../utils/userSlice.js";

const Body = () => {
    const dispatch = useDispatch();
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <MarketingPage/>,
        },
        {
            path: "/login",
            element: <Login/>,
        },
        { // for loggedin people
            path: "/browse",
            element: <Browse/>,
        },

    ])

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                // const uid = user.uid;
                const {uid, email, displayName} = user;
                dispatch(addUsers({uid: uid, email:email, displayName: displayName}));
                
            } else {
                dispatch(removeUsers());
            }
            });
    }, [])
    return (
        <div>
            <RouterProvider router = {appRouter} />
        </div>
    )
}

export default Body;