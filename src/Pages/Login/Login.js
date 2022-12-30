import React, { useContext, useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Login = () => {
    const { loginUser, googleLogin } = useContext(AuthContext);

    const [loading, setLoading] = useState(false)
    const [load, setLoad] = useState(false)
    const location = useLocation();
    let navigate = useNavigate();

    const from = location?.state?.from?.pathname || '/';

    const formHandler = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        setLoad(true)
        loginUser(email, password)
            .then(result => {
                setLoad(false)
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true });
                form.reset();
            })
            .catch(error => console.error(error));
    }

    //Google Login
    const googleHandler = () => {
        setLoading(true)
        googleLogin()
            .then(result => {
                const user = result.user;
                console.log(user)
                setLoading(false)
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <h1 className='text-3xl font-bold text-teal-700 text-center mt-5'>Sign In</h1>
                <div className="card-body">
                    <form onSubmit={formHandler}>
                        <div className="form-control">
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-2">
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover mt-3 text-teal-700 text-sm font-semibold">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-2 mb-2">
                            <button className="btn bg-teal-600 border-none">Sign In</button>
                            <div className="divider text-sm">OR</div>
                            <button onClick={googleHandler} className="btn border btn-outline border-teal-600">Sign In with <FcGoogle className='text-2xl ml-2' /></button>
                        </div>
                        <p>Didn't have an account? <Link to={"/signup"} className="text-teal-600 font-semibold link">Create Account.</Link></p>
                    </form>
                </div>
            </div>
        </div >
    );
};

export default Login;