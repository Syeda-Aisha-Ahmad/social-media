import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className='relative z-10'>
            <div className="navbar bg-teal-50 drop-shadow-lg fixed px-10">
                <div className="navbar-start">
                    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                </div>
                <div className="navbar-end">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>

                        {/* Mobile Screen */}
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 right-0 shadow bg-blue-100 rounded-box w-52">
                            <li><Link to={'/'}>Home</Link></li>
                            <li><Link to={'/media'}>Media</Link></li>
                            <li><Link to={'/about'}>About</Link></li>
                            <li><a>Sidebar Item 1</a></li>
                            <li><a>Sidebar Item 2</a></li>
                            <Link to={'/signin'} className="btn bg-teal-600 border-none">Sign In</Link>
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
                    <Link to={'/signin'} className="btn bg-teal-600 border-none">Sign In</Link>
                </div>
            </div>
        </nav>
    );
};

export default Nav;