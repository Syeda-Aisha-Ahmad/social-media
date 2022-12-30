import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Nav = () => {
    const { user, logOut } = useContext(AuthContext)
    // Logout
    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err));
    }
    return (
        <nav className='relative z-10'>
            <div className="navbar bg-teal-50 drop-shadow-lg fixed px-10">
                <div className="navbar-start">
                    <a className="btn btn-ghost normal-case text-xl">Social</a>
                </div>
                <div className="navbar-end">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>

                        {/* Mobile Screen */}
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 right-0 shadow rounded-box w-52 bg-teal-50">
                            <li><Link to={'/'}>Home</Link></li>
                            <li><Link to={'/media'}>Media</Link></li>
                            <li><Link to={'/about'}>About</Link></li>
                            <li><a>Photos</a></li>
                            <li><a>Video Streaming</a></li>
                            <li><a>Saved</a></li>
                            {
                                user ?
                                    <Link to={'/'} onClick={handleLogout} className="btn bg-teal-600 border-none">Sign out</Link>
                                    :
                                    <Link to={'/signin'} className="btn bg-teal-600 border-none">Sign In</Link>
                            }
                        </ul>
                    </div>

                </div>

                <div className="navbar-end hidden lg:flex">

                    {/* Large screen */}
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/media'}>Media</Link></li>
                        <li><Link to={'/about'}>About</Link></li>
                    </ul>
                    {
                        user ?
                            <Link to={'/'} onClick={handleLogout} className="btn bg-teal-600 border-none">Sign out</Link>
                            :
                            <Link to={'/signin'} className="btn bg-teal-600 border-none">Sign In</Link>
                    }
                </div>
            </div>
        </nav>
    );
};

export default Nav;