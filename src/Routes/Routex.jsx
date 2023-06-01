import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Login from "../Layouts/User/Login/Login";
import SignUp from "../Layouts/User/SignUp/SignUp";
import Home from "../Layouts/Home/Home";
import Blog from "../Layouts/Blog/Blog";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path:"/",
                element: <Home></Home>
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
            }
        ]
    }
])

export default routes;