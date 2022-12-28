import React from 'react';
import { FaHeart, FaComment, FaBookmark } from 'react-icons/fa';
const Popular = () => {
    return (
        <div className='lg:mx-10 my-10 mx-5 p-5 bg-white rounded-xl border shadow-xl'>
            <div className='flex items-center'>
                <div className="w-12 mr-5">
                    <img className='rounded-full' src="https://placeimg.com/80/80/people" />
                </div>
                <div className='text-left'>
                    <div className='font-bold'>Dan Walker</div>
                    <div className='text-sm text-gray-500'>July 26 2018, 01:03pm</div>
                </div>
            </div>

            <div className='text-left my-5'>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus ipsa neque sed maiores vel ipsum ut, officia nemo illo provident. Odit sint esse maiores quod earum, repudiandae velit veritatis eaque quo fugiat culpa..</p>
            </div>

            <div className="flex items-center">
                <img className='' src="https://www.w3schools.com/css/img_forest.jpg" />
            </div>

            <div className='flex justify-between px-3 mt-5'>
                <span className=' text-red-500'><FaHeart className='mx-auto text-3xl' /><small>Love</small></span>
                <span className='text-teal-600 text-center'><FaComment className='mx-auto text-3xl' /><small>Comment</small> </span>
                <span className='text-indigo-600'><FaBookmark className='mx-auto text-3xl' /><small>Save</small> </span>
            </div>
        </div>
    );
};

export default Popular;