import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";
import About from "../Pages/About";





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
        },
        {
            path: '/about',
            Component: About,
        }
    ]
    }
])








export default router;