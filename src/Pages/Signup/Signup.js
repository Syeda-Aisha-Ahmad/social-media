import React, { useContext, useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaCamera } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';
import './Signup.css'

const Signup = () => {

    const { createUser, googleLogin, updateUser, loading } = useContext(AuthContext)
    const [createdUserEmail, setCreatedUserEmail] = useState('')

    const signupInfo = (event) => {
        event.preventDefault()
        const form = event.target;
        const fname = form.fname.value;
        const email = form.email.value;
        const location = form.location.value;
        const photo = form.photo.value;
        const password = form.password.value;
        form.reset()

        createUser(email, password)
            .then(result => {
                const user = result.user;
                toast.success('Account Created Successfully!')
                saveUser(fname, email, photo, location);
                const userInfo = {
                    displayName: fname
                }
                updateUser(userInfo)
                    .then(() => {

                    })
                    .catch(error => console.log(error));
            })
            .catch(error => {
                console.error(error)
            })


    }

    const saveUser = (name, email, photo, location) => {
        const user = { name, email, photo, location };
        fetch(' https://server-ashy-eta.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setCreatedUserEmail(email);
            })
    }


    const googleHandle = () => {
        googleLogin()
            .then((result => {
                const user = result.user;
                saveUser(user?.displayName, user?.email, "none", "none")
            }))
            .catch = (error => {
                console.error(error)
            })
    }



    return (
        <div className="hero min-h-screen bg-base-200">
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <h1 className='text-3xl font-bold text-teal-700 text-center mt-5'>Create An Account</h1>
                <form onSubmit={signupInfo}>
                    <div className="card-body">

                        <div className="form-control mt-2">
                            <input type="text" name='fname' placeholder="Full Name" className="input input-bordered" />
                        </div>

                        <div className="form-control mt-2">
                            <input type="text" name='email' placeholder="Email" className="input input-bordered" />
                        </div>

                        <div className="form-control mt-2">
                            <input type="text" name='location' placeholder="Location" className="input input-bordered" />
                        </div>

                        <div className="form-control mt-2">
                            <label for="inputTag" className='cursor-pointer input input-bordered pr-10 flex items-center bg-teal-100'>
                                <FaCamera className='mr-2 text-xl' /> Upload Image
                                <input id='inputTag' type="file" name='photo' placeholder="Photo" className="" />
                            </label>
                        </div>

                        <div className="form-control mt-2">
                            <input type="password" name='password' placeholder="Password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover mt-3 text-teal-700 text-sm font-semibold">Forgot password?</a>
                            </label>
                        </div>

                        <div className="form-control mt-1 mb-2">
                            <button className="btn bg-teal-600 border-none">Sign up</button>
                            <div className="divider text-sm">OR</div>
                            <button onClick={googleHandle} className="btn border btn-outline border-teal-600">Sign In with <FcGoogle className='text-2xl ml-2' /></button>
                        </div>
                        <p>Already have an account? <Link to={"/signin"} className="text-teal-600 font-semibold link"> Sign In.</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;