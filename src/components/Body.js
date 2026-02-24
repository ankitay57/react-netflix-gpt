import Login from "./Login.js"
import Browse from "./Browse.js"
import MarketingPage from "./MarketingPage.js"
import { createBrowserRouter, RouterProvider } from "react-router"
const Body = () => {
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
    return (
        <div>
            <RouterProvider router = {appRouter} />
        </div>
    )
}

export default Body;