import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";
import About from "../Pages/About";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AuthLayout from "../Layout/AuthLayout";
import NewsDetails from "../Pages/NewsDetails";
import PrivetRoutes from "../Provider/PrivetRoutes";
import Loading from "../Pages/Loading";





const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/category/:id',
                Component: CategoryNews,
                loader: () => fetch('/Data/news.json'),
                hydrateFallbackElement: <Loading/>
            },
            {
                path: '/about',
                Component: About,
            },
        ]
    },
    {
        path: '/auth',
        // element:<AuthLayout></AuthLayout>,
        Component: AuthLayout,
        children: [
            {
                path: '/auth/login',
                element: <Login></Login>
            },
            {
                path: '/auth/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path:'/newsdetails/:id',
        element:<PrivetRoutes><NewsDetails></NewsDetails></PrivetRoutes>,
        loader: () => fetch('/Data/news.json'),
        hydrateFallbackElement: <Loading/> 
    },
    {
        path: '/*',
        element: <h1>Error 404</h1>
    }
])








export default router;