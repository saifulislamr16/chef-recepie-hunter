import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid'
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FireAuthContext } from '../../../Providers/FireAuthProvider';

const SignUp = () => {
    const [show, setShow] = useState(false);
    const [emailError, setEmailError] = useState(null);
    const [passError, setPassError] = useState(null);
    const [name, setName] = useState('');
    const [url, setUrl] = useState('');
    const { Register, Update, user, LogOut } = useContext(FireAuthContext);

    const handleShow = () => {
        setShow(!show);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const url = form.url.value;
        setEmailError(null);
        setPassError(null);
        console.log(name, email, password, url)
        Register(email, password)
            .then(user => {
                setName(name)
                setUrl(url)
                console.log(user.user)
            })
            .catch((error) => {
                console.log(error.message)
                if (error.message.includes("email-already-in-use")) {
                    setEmailError("Email already in use")
                }
                if (error.message.includes("weak-password")) {
                    setPassError("Password should be at least 6 characters")
                }
            })
        
    }



    useEffect(() => {
        console.log(name)
        Update(name, url)
            .then(() => {
                console.log("Updated");
            })
            .catch((error) => {
                console.log("update error", error.message)
            })
    }, [user])

    return (
        <div className=' bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-[100vh] flex items-center  justify-center'>
            <div className='md:w-3/4 md:grid grid-cols-7'>
                <img className='hidden md:block pl-1 rounded-tl-lg rounded-bl-lg col-span-3 h-full w-full backdrop-blur-sm bg-white/60' src={'https://i.ibb.co/tCVVN9p/Mobile-login.png'} />
                <div className='md:col-span-4 backdrop-blur-sm bg-black/40 md:p-10 p-8 md:rounded-tr-lg md:rounded-br-lg'>
                    <div className=' text-center font-semibold text-3xl border-b-2 pb-2 mb-2 text-white'>Register</div>

                    <form onSubmit={handleSubmit} className='md:m-5 text-white'>

                        <div className='md:flex'>
                            <div className="mb-5">
                                <label className={`block mb-2 text-xl font-medium text-white`}>Name<span className='text-red-500 ml-1'>*</span></label>
                                <input type="text" name='name' className=
                                    "bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2 px-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="your Name" required />
                            </div>
                            <div className="mb-5 md:ml-5">
                                <label className={`block mb-2 text-xl font-medium 'text-white`}>Photo URL</label>
                                <input type="url" name='url' className=
                                    "bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2 px-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="your photo url" />
                            </div>
                        </div>

                        <div className="mb-5">
                            <label className={`block mb-2 text-xl font-medium ${emailError ? 'text-red-500' : 'text-white'}`}>Email<span className='text-red-500 ml-1'>*</span></label>
                            <input type="email" name='email' id="email" className={emailError ? 'bg-red-50 border border-red-500 text-red-500 placeholder-red-500 text-xl rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2 dark:bg-red-100 dark:border-red-400' :
                                "bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2 px-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            } placeholder="your email" required />
                            {
                                emailError && <p className="mt-2 text-red-500 dark:text-red-300 text-md"><span className="font-medium">{emailError}</span></p>
                            }
                        </div>
                        <div className="mb-5">
                            <label className={`block mb-2 text-xl font-medium ${passError ? 'text-red-500' : 'text-white'}`} >Password<span className='text-red-500 ml-1'>*</span></label>
                            <div className='grid grid-cols-12'>
                                <input type={show ? 'text' : 'password'} id="password" name="password" className={`col-span-10 ${passError ? 'bg-red-50 border border-red-500 text-red-500 placeholder-red-500 focus:ring-red-500 focus:border-red-500' : 'bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500'}  text-xl rounded-tl-lg rounded-bl-lg  block w-full py-2 px-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`} placeholder="your password" required />
                                <div onClick={handleShow} className='col-span-2 bg-gray-50 flex items-center justify-center rounded-tr-lg rounded-br-lg p-1'>
                                    {
                                        show ?
                                            <EyeIcon className=' w-6 h-6  text-black'></EyeIcon> :
                                            <EyeSlashIcon className=' w-6 h-6  text-black'></EyeSlashIcon>
                                    }
                                </div>

                            </div>
                            {
                                passError && <p className="mt-2 text-red-500 dark:text-red-300 text-md"><span className="font-medium ">{passError}</span></p>
                            }
                        </div>

                        <input type="submit" value="Submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl w-full sm:w-auto px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" />
                    </form>

                    <h3 className='font-semibold text-lg text-center text-white mt-5'>
                        Already have an account ? <Link to="/login" className='text-emerald-300 border-b border-emerald-300'>Login</Link>
                    </h3>
                </div>
            </div>

        </div>
    );
};

export default SignUp;