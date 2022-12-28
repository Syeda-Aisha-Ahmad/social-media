import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import Nav from '../../Shared/Nav/Nav';

const Main = () => {
    return (
        <div className='max-w-[1350px] mx-auto'>
            <Nav></Nav>
            <div className='flex absolute top-65 mt-16'>
                {/* left side bar */}
                <div className='lg:w-3/12 hidden lg:block bg-teal-100 relative text-center'>
                    <ul className="menu p-4 text-base-content fixed text-lg text-center px-10">
                        <li><a>Photos</a></li>
                        <li><a>Video Streaming</a></li>
                        <li><a>Saved</a></li>
                        <button className="btn border-none bg-teal-600"> Add A New Post</button>
                    </ul>
                </div>

                {/* Contents */}
                <div className='lg:w-6/12 w-full bg-teal-50'>
                    <Outlet></Outlet>
                </div>

                {/* right side bar */}
                <div className='lg:w-3/12 hidden lg:block bg-teal-100 relative'>
                    <ul className="menu p-4 text-base-content fixed">
                        <h3 className='font-semibold mt-5 mb-3 text-lg'>Sponsored</h3>
                        <div className='flex items-center mb-5 '>
                            <img className='w-5/12 mr-3 h-24' src="https://scontent.fdac41-1.fna.fbcdn.net/v/t45.1600-4/320393617_6289657611500_6969049752484591241_n.png?stp=dst-png_p476x249&_nc_cat=1&ccb=1-7&_nc_sid=eaa83b&_nc_ohc=EkIRl1dTRlkAX_p8q8I&_nc_ht=scontent.fdac41-1.fna&oh=00_AfCsd-r_LnGH-6DCWo9wYJGiznFXKQXmr4kfBOSIbQIwog&oe=63B04CBE" alt="" />
                            <div className='w-5/12'>
                                <p className='block'>33% off | End-of-year sale</p>
                                <small className='block'>Pluralsight.com</small>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <img className='w-5/12 mr-3' src="https://scontent.fdac41-1.fna.fbcdn.net/v/t45.1600-4/320988380_23852656400580556_6711088263251128140_n.png?stp=cp0_dst-jpg_p296x100_q90_spS444&_nc_cat=107&ccb=1-7&_nc_sid=67cdda&_nc_ohc=1gWz3Sgw0usAX88fgNS&_nc_ht=scontent.fdac41-1.fna&oh=00_AfC93NfzMBcy1m3OamK0Ex3wSZB-cgfKTvZyjmJpNzXCIA&oe=63B1AA9A" alt="" />
                            <div className='w-5/12'>
                                <p className='block'>British Council Digital  Library</p>
                                <small className='block'>britishcouncil.org.bd</small>
                            </div>
                        </div>
                    </ul>
                </div>
            </div>
        </div >
    );
};

export default Main;