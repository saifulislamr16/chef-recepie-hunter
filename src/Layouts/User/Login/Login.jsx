import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid'
import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FireAuthContext } from '../../../Providers/FireAuthProvider';

const Login = () => {
    const [show, setShow] = useState(false);
    const [emailError, setEmailError] = useState(null);
    const [passError, setPassError] = useState(null);
    const [netStat, setNetStat] = useState(false);
    const { LogIn, GoogleLogIn, GitHubLogIn, LogOut, user } = useContext(FireAuthContext);
    const path = useLocation();
    const navigate = useNavigate();

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
        setNetStat(false);
        LogIn(email, password)
            .then(user => {
                form.reset();
                redirect(user.user)
            })
            .catch((error) => {
                console.log(error.message)
                if (error.message.includes("user-not-found")) {
                    setEmailError("User Not Found")
                }
                if (error.message.includes("wrong-password")) {
                    setPassError("Wrong password")
                }
                if (error.message.includes("network-request-failed")) {
                    setNetStat(true)
                }
            })
    }
    const handleGoogleLogIn = () => {
        GoogleLogIn()
            .then(user => {
                console.log()
                redirect(user.user)
            })
            .catch((error) => {
                console.log(error.message)
            })
    }

    const handleGitHubLogIn = () => {
        GitHubLogIn()
            .then(user => {
                console.log()
                redirect(user.user)
            })
            .catch((error) => {
                console.log(error.message)
            })
    }

    const handleAlart = ()=>{
        setNetStat(false)
    }

    const redirect = (user)=>{
        if(user){
            if(path.state?.history){
                navigate(`${path.state?.history}`)
            }
            else{
                navigate('/')
            }
        }
    }
    return (
        <div className=' bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-[100vh] flex items-center  justify-center'>
            <div className='md:w-2/4 md:grid grid-cols-7'>
                <img className='hidden md:block pl-1 rounded-tl-lg rounded-bl-lg col-span-3 h-full w-full backdrop-blur-sm bg-white/70' src={'https://i.ibb.co/SKjKbv9/Tablet-login-pana.png'} />
                <div className='md:col-span-4 backdrop-blur-sm bg-black/40 md:p-10 p-8 md:rounded-tr-lg md:rounded-br-lg'>
                    <div className=' text-center font-semibold text-3xl border-b-2 pb-2 mb-2 text-white'>Log In</div>

                    <div id="alert-2" className={`${netStat ? 'flex' : 'hidden'} p-4 mb-4 text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400`} role="alert">
                        <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"></path></svg>
                        <span className="sr-only">Info</span>
                        <div className="ml-3 text-sm font-medium">
                            Network connection error
                        </div>
                        <button onClick={handleAlart} type="button" className="ml-auto -mx-1.5 -my-1.5 bg-red-50 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex h-8 w-8 dark:bg-gray-800 dark:text-red-400 dark:hover:bg-gray-700" data-dismiss-target="#alert-2" aria-label="Close">
                            <span className="sr-only">Close</span>
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path></svg>
                        </button>
                    </div>

                    <form onSubmit={handleSubmit} className=' text-white'>
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
                        <button onClick={handleGitHubLogIn} className="rounded-lg flex items-center justify-between outline outline-1 outline-white hover:bg-amber-300 ">
                            <div className='bg-white p-2 rounded-tl-lg rounded-bl-lg'>
                                <img src='https://i.ibb.co/3m3Jj9t/github.png' className='w-6 h-6' />
                            </div>
                            <div className='text-xl font-semibold text-white mx-3'>Github</div>
                        </button>
                    </div>
                    <h3 className='font-semibold text-lg text-center text-white mt-5'>
                        Do not have an account ? <Link to="/signup" className='text-emerald-300 border-b border-emerald-300'>Register</Link>
                    </h3>
                    <button onClick={() => user && LogOut()}>out</button>
                </div>
            </div>

        </div>
    );
};

export default Login;