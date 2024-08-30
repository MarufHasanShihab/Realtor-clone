import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../../pages/Home/Home";
import Signin from "../../pages/Signin/Signin";
import Signup from "../../pages/Signup/Signup";
import Profile from "../../pages/Profile/Profile"
import Offers from "../../pages/Offers/Offers";
import Forgetpassword from "../../pages/Forgetpassword/Forgetpassword";

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
                path: "/offers",
                element: <Offers/>
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
                path: "forget-password",
                element: <Forgetpassword/>
            },
            {
                path: "profile",
                element: <Profile/>
            }
        ]
    }
])

export default router