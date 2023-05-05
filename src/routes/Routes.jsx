import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Login from "../layouts/Login";
import ErrorPage from "../pages/ErrorPage";
import ChefRecipes from "../pages/ChefRecipes";
import Blog from "../pages/Blog";
import Register from "../layouts/Register";

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
                path: '/chefrecipes/:id',
                element: <ChefRecipes></ChefRecipes>,
                loader: ({params})=>fetch(`https://chef-recipe-hunter-server-side-eight.vercel.app/chefInfo/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])


export default router;