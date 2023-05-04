import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Login from "../layouts/Login";
import ErrorPage from "../pages/ErrorPage";
import ChefRecipes from "../pages/ChefRecipes";
import Blog from "../pages/Blog";

const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        errorElement : <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/chefrecipes',
                element: <ChefRecipes></ChefRecipes>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    }
])


export default router;