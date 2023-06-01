import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid'
import { useContext, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { FireAuthContext } from '../../../Providers/FireAuthProvider';

const Login = () => {
    const [show, setShow] = useState(false);
    const [emailError, setEmailError] = useState(null);
    const [passError, setPassError] = useState(null);
    const { LogIn, GoogleLogIn, GitHubLogIn, LogOut } = useContext(FireAuthContext);

    const handleShow = () => {
        setShow(!show);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        setEmailError(null);
        setPassError(null);
        LogIn(email, password)
            .then(user => {
                form.reset();
            })
            .catch((error) => {
                console.log(error.message)
                if (error.message.includes("user-not-found")) {
                    setEmailError("User Not Found")
                }
                if (error.message.includes("wrong-password")) {
                    setPassError("Wrong password")
                }
            })
    }
    const handleGoogleLogIn = () =>{
        GoogleLogIn()
        .then(user => {
            console.log(user.user)
        })
        .catch((error) => {
            console.log(error.message)
        })
    }

    const handleGitHubLogIn = ()=>{
        GitHubLogIn()
        .then(user => {
            console.log(user.user)
        })
        .catch((error) => {
            console.log(error.message)
        })
    }
    return (
        <div className=' bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-[100vh] flex items-center  justify-center'>
            <div className='md:w-2/4 md:grid grid-cols-7'>
                <img className='hidden md:block pl-1 rounded-tl-lg rounded-bl-lg col-span-3 h-full w-full backdrop-blur-sm bg-white/70' src={'https://i.ibb.co/SKjKbv9/Tablet-login-pana.png'} />
                <div className='md:col-span-4 backdrop-blur-sm bg-black/40 md:p-10 p-8 md:rounded-tr-lg md:rounded-br-lg'>
                    <div className=' text-center font-semibold text-3xl border-b-2 pb-2 mb-2 text-white'>Log In</div>

                    <form onSubmit={handleSubmit} className='md:m-5 text-white'>
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

                    <div className='grid grid-cols-5 text-center font-semibold text-lg  m-2 w-full text-white'><div className='col-span-2 my-auto'><hr /></div><span className='col-span-1'>OR</span><div className='col-span-2 my-auto'><hr /></div></div>
                    <div className='flex justify-between mt-5'>
                        <button onClick={handleGoogleLogIn} className="rounded-lg flex hover:bg-amber-300 items-center justify-between outline outline-1 outline-white">
                            <div className='bg-white  p-2 rounded-tl-lg rounded-bl-lg'>
                                <img src='https://i.ibb.co/C23yX99/google-1.png' className='w-6 h-6' />
                            </div>
                            <div className='text-xl font-semibold text-white mx-3'>Google</div>
                        </button>
                        <button onClick={handleGitHubLogIn} className="rounded-lg flex items-center justify-between outline outline-1 outline-white hover:bg-amber-300">
                            <div className='bg-white p-2 rounded-tl-lg rounded-bl-lg'>
                                <img src='https://i.ibb.co/3m3Jj9t/github.png' className='w-6 h-6' />
                            </div>
                            <div className='text-xl font-semibold text-white mx-3'>Github</div>
                        </button>
                    </div>
                    <h3 className='font-semibold text-lg text-center text-white mt-5'>
                        Don't have an account ? <Link to="/signup" className='text-emerald-300 border-b border-emerald-300'>Register</Link>
                    </h3>
                    <button onClick={() =>LogOut()}>out</button>
                </div>
            </div>

        </div>
    );
};

export default Login;