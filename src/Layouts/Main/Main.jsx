import { Outlet } from "react-router-dom";



const Main = () => {
    return (
        <div className="md:m-10 sm:m-5">
            <Outlet></Outlet>
        </div>
    );
};

export default Main;