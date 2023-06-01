import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import { useContext } from 'react';
import { FireAuthContext } from '../../Providers/FireAuthProvider';
import Footer from "../Footer/Footer";


const Main = () => {
    const { user, load } = useContext(FireAuthContext);
    console.log(user, load);
    return (
        <div className="">
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;