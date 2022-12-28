import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import Nav from '../../Shared/Nav/Nav';

const Main = () => {
    return (
        <div>
            <Nav></Nav>
            <div className='flex absolute top-65 mt-16'>
                {/* left side bar */}
                <div className='lg:w-3/12 hidden lg:block bg-teal-100 relative'>
                    <ul className="menu p-4 text-base-content fixed">
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>
                </div>

                {/* Contents */}
                <div className='lg:w-6/12 w-full bg-teal-50'>
                    <Outlet></Outlet>
                </div>

                {/* right side bar */}
                <div className='lg:w-3/12 hidden lg:block bg-teal-100 relative'>
                    <ul className="menu p-4 text-base-content fixed">
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Main;