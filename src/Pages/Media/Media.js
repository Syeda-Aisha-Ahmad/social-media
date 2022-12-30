import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaHeart, FaComment, FaBookmark } from 'react-icons/fa';

const Media = () => {

    const url = " https://server-ashy-eta.vercel.app/allPosts";

    const { data = [], isLoading } = useQuery({
        queryKey: [],
        queryFn: async () => {
            const res = await fetch(url);
            const data = res.json();
            return data;
        }
    });

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    return (
        <div>
            {
                data.map(dt => <div className='w-11/12 lg:mx-10 my-10 mx-5 p-5 bg-white rounded-xl border shadow-xl'>
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
                        <p>{dt.post}</p>
                    </div>

                    <div className="flex items-center">
                        <img className='' alt='' src={dt.photo} />
                    </div>

                    <div className='flex justify-between px-3 mt-5'>
                        <span className=' text-red-500'><FaHeart className='mx-auto text-3xl' /><small>Love</small></span>
                        <span className='text-teal-600 text-center'><FaComment className='mx-auto text-3xl' /><small>Comment</small> </span>
                        <span className='text-indigo-600'><FaBookmark className='mx-auto text-3xl' /><small>Save</small> </span>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Media;