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
                <div className="navbar-end">
                    {
                        load ?
                            <div role="status">
                                <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                </svg>
                                <span className="sr-only">Loading...</span>
                            </div> :
                            user ?
                                user?.photoURL ?
                                    <img className='w-10 h-10 rounded-full outline outline-white' title={user?.displayName} src={user?.photoURL} /> :
                                    <UserCircleIcon title={user?.displayName} className='w-10 h-10 text-white' /> :
                                <Link to="/login" className="btn border-1 hover:border-white">Log In</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;