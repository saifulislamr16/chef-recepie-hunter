
import { useContext } from 'react';
import ChefRecipe from '../Layouts/ChefRecipe/ChefRecipe';
import { FireAuthContext } from '../Providers/FireAuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = () => {
    const { user } = useContext(FireAuthContext)
    const path = useLocation()
    if (user) {
        return <ChefRecipe></ChefRecipe>
    }

    return <Navigate state={{ history: path.pathname }} to="/login" replace></Navigate>;
};

export default PrivateRoute;