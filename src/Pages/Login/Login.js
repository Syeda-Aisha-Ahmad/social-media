import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <h1 className='text-3xl font-bold text-teal-700 text-center mt-5'>Sign In</h1>
                <div className="card-body">
                    <div className="form-control">
                        <input type="text" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control mt-2">
                        <input type="text" placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover mt-3 text-teal-700 text-sm font-semibold">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-2 mb-2">
                        <button className="btn bg-teal-600 border-none">Sign In</button>
                        <div className="divider text-sm">OR</div>
                        <button className="btn border btn-outline border-teal-600">Sign In with <FcGoogle className='text-2xl ml-2' /></button>
                    </div>
                    <p>Didn't have an account? <Link to={"/signup"} className="text-teal-600 font-semibold link">Create Account.</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;