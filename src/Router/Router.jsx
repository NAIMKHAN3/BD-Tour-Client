import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import SignUp from "../Pages/SignUp";
import Signin from "../Pages/SignIn";
import Home from "../Pages/Home";

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
        ]
    },
    
])