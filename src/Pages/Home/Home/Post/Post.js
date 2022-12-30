import React, { useContext, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { FaPhotoVideo, FaSmile } from 'react-icons/fa';
import { AuthContext } from '../../../../Context/AuthProvider';

const Post = () => {

    const [data, setData] = useState([]);
    const { loading } = useContext(AuthContext)

    const postInfo = (event) => {
        event.preventDefault();
        const form = event.target;
        const post = form.post.value;
        const photo = form.photo.value;
        form.reset()

        const postDetails = {
            post,
            photo
        }

        fetch(' https://server-ashy-eta.vercel.app/posts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(postDetails),
        })
            .then(res => res.json())
            .then(data => {
                setData(data)
                if (data.acknowledged) {
                    toast.success('Successfully Posted!')
                    loading(true)
                }
                else {
                    alert(data.message);
                }
            })
            .catch(error => console.error(error));
    }

    return (
        <div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <div className='lg:mx-10 my-10 mx-5 p-5 bg-white rounded-xl border shadow-xl'>
                <form onSubmit={postInfo}>
                    <div>
                        <div className='flex mb-8'>
                            <label for="inputTag" className='px-3 py-1 mr-5 text-center rounded-xl border border-teal-300 '><span className='flex items-center'><FaPhotoVideo className='mr-2 text-xl text-teal-500' />Photo<input id='inputTag' type="file" name='photo' placeholder="Photo" className="" /></span></label>
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
    );
};

export default Post;