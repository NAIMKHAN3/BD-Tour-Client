import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import SignUp from "../Pages/SignUp";
import Signin from "../Pages/SignIn";
import Home from "../Pages/Home";
import MyBooking from "../Pages/MyBooking";
import DestinationDetails from "../Pages/DestinationDetails";

export const router = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>, children: [
            {
                path: '/', element: <Home/>
            },
            {
                path: '/home', element: <Home/>
            },
            {
                path: '/signup', element: <SignUp/>
            },
            {
                path: '/signin', element: <Signin/>
            },
            {
                path: '/my-booking', element: <MyBooking/>
            },
            {
                path: '/destination-details/:id', element: <DestinationDetails/>
            },
        ]
    },
    
])