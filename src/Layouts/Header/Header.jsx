import { UserCircleIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FireAuthContext } from '../../Providers/FireAuthProvider';

const Header = () => {
    const { user, load } = useContext(FireAuthContext);
    return (
        <div>

            <div className="navbar bg-gray-800 text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li className='text-black hover:rounded-md p-4'><NavLink className={({ isActive }) => isActive ? "border-b-2 border-rose-500 rounded-none text-rose-600 pb-1" : ""} to="/">Home</NavLink></li>
                            <li className='text-black hover:rounded-md p-4 '><NavLink className={({ isActive }) => isActive ? "border-b-2 border-rose-500  rounded-none text-rose-600 pb-1" : ""} to="/blog">Blog</NavLink></li>
                        </ul>
                    </div>
                    <Link to="/" className='text-2xl font-bold'>Chef Hunter</Link>
                </div>
                <div className=" navbar-center hidden lg:flex">
                    <ul className="md:space-x-5  menu-horizontal px-1 font-semibold text-xl">
                        <li className='hover:bg-gray-700 hover:border border-white hover:px-[15px] hover:py-[11px] hover:text-white hover:rounded-md px-4 py-3'><NavLink className={({ isActive }) => isActive ? "border-b-2 border-rose-500  rounded-none text-white pb-1 hover:text-white" : ""} to="/">Home</NavLink></li>
                        <li className='hover:bg-gray-700 hover:border border-white hover:text-white hover:rounded-md hover:px-[15px] hover:py-[11px] px-4 py-3 '><NavLink className={({ isActive }) => isActive ? "border-b-2 border-rose-500  rounded-none text-white pb-1 hover:text-white" : ""} to="/blog">Blog</NavLink></li>
                    </ul>
                </div>
                
            </div>
        </div>
    );
};

export default Header;