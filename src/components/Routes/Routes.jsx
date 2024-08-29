import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../../pages/Home/Home";
import Offer from "../../pages/Offer/Offer";
import Signin from "../../pages/Signin/Signin";
import Signup from "../../pages/Signup/Signup";
import Profile from "../../pages/Profile/Profile"

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayouts/>,
        children:[
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/offer",
                element: <Offer/>
            },
            {
                path: "sign-in",
                element: <Signin/>
            },
            {
                path: "sign-up",
                element: <Signup/>
            },
            {
                path: "profile",
                element: <Profile/>
            }
        ]
    }
])

export default router