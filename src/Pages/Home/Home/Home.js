import React from 'react';
import Popular from './Popular/Popular';
import Post from './Post/Post';

const Home = () => {
    return (
        <div className=''>
            <Post></Post>
            <Popular></Popular>
        </div>
    );
};

export default Home;