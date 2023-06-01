import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Login from "../Layouts/User/Login/Login";
import SignUp from "../Layouts/User/SignUp/SignUp";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            
        ]
    },
    {
        path:"/login",
        element:<Login></Login>
    },
    {
        path:"/signup",
        element:<SignUp></SignUp>
    }
])

export default routes;