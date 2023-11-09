import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import SignUp from "../Pages/SignUp";
import Signin from "../Pages/SignIn";

export const router = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>, children: [
            {
                path: '/signup', element: <SignUp/>
            },
            {
                path: '/signin', element: <Signin/>
            },
        ]
    },
    
])