import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
         <div className='flex justify-center items-center min-h-screen'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className='font-semibold text-2xl text-center '>Register your account</h2>
                <div className="card-body">
                    <form >
                        <fieldset className="fieldset">
                        {/* Name */}
                        <label className="text">Your Name</label>
                        <input type="text"
                        name='name'
                        className="input" placeholder="Enter your name" />

                            {/* Photo */}
                        <label className="url">Photo Url</label>
                        <input type="url"
                        name='photo'
                         className="input" placeholder="Enter your url" />

                        {/* emial */}
                        <label className="label">Email</label>
                        <input type="email"
                        name='email' 
                        className="input" placeholder="Email" />

                        {/* password */}
                        <label className="label">Password</label>
                        <input type="password"
                        name='password'
                         className="input" placeholder="Password" />

                        <button className="btn btn-neutral mt-4">Register</button>
                    </fieldset>
                    </form>
                </div>
                <p className='text-center'>Already Have An Account ? <Link to={'/auth/login'} className='text-secondary'>Login</Link></p>
            </div>
        </div>
    );
};

export default Register;