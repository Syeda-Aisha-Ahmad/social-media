import React from 'react';

const Post = () => {
    return (
        <div>
            <div className='m-10 p-5 bg-white rounded-xl border shadow-xl'>
                <div>
                    <div className='flex mb-8'>
                        <div className='px-3 py-1 mr-5 text-center rounded rounded-xl bg-teal-300 '><span>Photos</span></div>
                        <div className='px-3 py-1 mr-5 text-center rounded rounded-xl bg-teal-300'><span>Activity</span></div>
                    </div>
                    <div className='flex'>
                        <div className="w-1/12 ">
                            <img className='rounded-full' src="https://placeimg.com/80/80/people" />
                        </div>
                        <div className="w-11/12 ">
                            <textarea name='post' className="h-20 textarea w-full text-base focus:outline-none overflow-auto resize-y " placeholder="What's in your mind....?"></textarea>
                        </div>
                    </div>
                </div>
                <button className='btn mt-5 w-full bg-teal-600 border-none'>Submit</button>
            </div>
        </div>
    );
};

export default Post;