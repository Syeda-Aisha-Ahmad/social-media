import React from 'react';
import { Outlet } from 'react-router-dom';
import { FaPhotoVideo, FaSmile } from 'react-icons/fa';
import Nav from '../../Shared/Nav/Nav';

const Main = () => {
    const postInfo = (event) => {
        event.preventDefault();
        const form = event.target;
        const post = form.post.value;
        console.log(post)
    }
    return (
        <div className='max-w-[1350px] mx-auto'>
            <Nav></Nav>
            <div className='flex absolute top-65 mt-16'>
                {/* left side bar */}
                <div className=' w-3/12 hidden lg:block bg-teal-100 text-center'>
                    <ul className="menu p-4 text-base-content text-lg text-center px-10">
                        <li><a>Photos</a></li>
                        <li><a>Video Streaming</a></li>
                        <li><a>Saved</a></li>

                        {/* The button to open modal */}

                        <label htmlFor="my-modal-3" className="btn border-none bg-teal-600"> Add A New Post</label>

                        {/* Put this part before </body> tag */}
                        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                        <div className="modal">
                            <div className="modal-box relative">
                                <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                <form onSubmit={postInfo}>
                                    <div>
                                        <div className='flex mb-8'>
                                            <div className='px-3 py-1 mr-5 text-center rounded-xl border border-teal-300 '><span className='flex items-center'><FaPhotoVideo className='mr-2 text-xl text-teal-500' />Photos</span></div>
                                            <div className='px-3 py-1 mr-5 text-center rounded-xl border border-teal-300'><span className='flex items-center'> <FaSmile className='text-yellow-500 mr-2 text-xl ' />Activity</span></div>
                                        </div>
                                        <div className='flex'>
                                            <div className="lg:w-1/12 w-12  ">
                                                <img className='rounded-full' src="https://placeimg.com/80/80/people" />
                                            </div>
                                            <div className="w-11/12 ">
                                                <textarea name='post' className="h-20 textarea w-full text-base focus:outline-none overflow-auto resize-y " placeholder="What's in your mind....?"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <button className='btn mt-5 w-full bg-teal-600 border-none'>Submit</button>
                                </form>
                            </div>
                        </div>

                    </ul>
                </div>

                {/* Contents */}
                <div className='w-6/12 bg-teal-50'>
                    <Outlet></Outlet>
                </div>

                {/* right side bar */}
                <div className=' w-3/12 hidden lg:block bg-teal-100'>
                    <ul className="menu p-4 text-base-content">
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
            </div >
        </div >
    );
};

export default Main;