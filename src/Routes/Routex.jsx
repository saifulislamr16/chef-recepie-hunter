import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Login from "../Layouts/User/Login/Login";
import SignUp from "../Layouts/User/SignUp/SignUp";
import Home from "../Layouts/Home/Home/Home";
import Blog from "../Layouts/Blog/Blog";
import Error from "../Error/Error";
import ChefRecipe from "../Layouts/ChefRecipe/ChefRecipe";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path:"/",
                element: <Home></Home>,
                loader: () => fetch(`http://localhost:3000/chefs`)
            },
            {
                path:"/blog",
                element: <Blog></Blog>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/signup",
                element:<SignUp></SignUp>
            },
            {
                path:'/recipe/:chefId',
                element:<ChefRecipe></ChefRecipe>,
                loader: ({params}) => fetch(`http://localhost:3000/receipe/${params.chefId}`)
            }
        ]
    }
])

export default routes;