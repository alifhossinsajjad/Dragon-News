import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { Authcontex } from '../Provider/AuthContext';
import { FaEyeSlash, FaRegEye } from 'react-icons/fa';
import { toast } from 'react-toastify';

const Login = () => {

    const { logInUser } = use(Authcontex);
    const [showPassword, setShowPassword] = useState(false)

    const location = useLocation()
    const navigate = useNavigate();



    const hanleLogIn = (event) => {
        event.preventDefault();


        const email = event.target.email.value;
        const password = event.target.password.value;


        logInUser(email, password)
            .then((result) => {
                console.log(result.user);
                toast.success('LogIn successful')
                navigate(location?.state || '/')
                event.target.reset()
                
            })
            .catch((error) => {
                console.log(error);
                
            })

    }

     const handleShowPassord = () => {
        setShowPassword(!showPassword)
    }

    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className='font-semibold text-2xl text-center '>Login your account</h2>
                <div className="card-body">
                    <form onSubmit={hanleLogIn}>
                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input type="email"
                            name='email'
                            className="input" placeholder="Email" />

                            <div className="relative" >
                                <label className="label">Password</label>
                                <input type={showPassword ? 'text' : 'password'}
                                    name='password'
                                    className="input" placeholder="Password" />
                                <span
                                    onClick={handleShowPassord}
                                    className="absolute right-8 top-8 cursor-pointer z-50"
                                >
                                    {showPassword ? <FaRegEye /> : <FaEyeSlash />}
                                </span>
                            </div>
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Login</button>
                        </fieldset>
                    </form>
                </div>
                <p className='text-center'>Dont’t Have An Account ? <Link to={'/auth/register'} className='text-secondary'>Register</Link></p>
            </div>
        </div>
    );
};

export default Login;