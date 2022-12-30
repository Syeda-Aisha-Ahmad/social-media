import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { MdSchool, MdWork, MdHome, MdLocationOn, MdPerson, MdEmail, MdCake } from "react-icons/md";
import { AuthContext } from '../../Context/AuthProvider';

const About = () => {
    const { user } = useContext(AuthContext);

    const url = ` https://server-ashy-eta.vercel.app/users?email=${user?.email}`;

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

    console.log(data)


    return (
        <div className='lg:mx-10 my-10 mx-5 p-5 bg-white rounded-xl border shadow-xl'>
            <h1 className='text-3xl font-bold text-teal-700 text-center mt-5 mb-10'>About</h1>

            {
                data.map(dt => <div key={dt._id} className='flex items-center'>
                    <div className='w-6/12'>
                        <img className='rounded-xl' src={dt.photo} alt="" />
                    </div>
                    <div className='pl-5 text-xl leading-loose'>
                        <p className='flex items-center'><MdPerson className='mr-3 text-2xl text-teal-900' /> {dt?.name}</p>
                        <p className='flex items-center'><MdEmail className='mr-3 text-2xl text-teal-900' /> {dt?.email}</p>
                        <p className='flex items-center'><MdLocationOn className='mr-3 text-2xl text-teal-900' />{dt?.location}</p>
                    </div>
                </div>)
            }


            <hr className='my-5' />
            <div className='text-left my-5 text-lg w-full'>
                <h3 className='font-bold bg-teal-100 opacity-75 text-black text-xl text-center py-2'>Short Self Description</h3>
                <p className='my-5'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus ipsa neque sed maiores vel ipsum ut, officia nemo illo provident. Odit sint esse maiores quod earum, repudiandae velit veritatis eaque quo fugiat culpa..</p>
            </div>
            {/* 
            <hr />

            <div className='text-left my-5 text-lg'>
                <h3 className='font-bold bg-teal-100 opacity-75 text-black text-xl text-center py-2'>Self Details</h3>
                <p className='my-5 flex items-center text-lg'>
                    <MdCake className='mr-3 text-xl text-teal-900' />Birth Day is<span className="font-semibold ml-1">11/12/2001</span>
                </p>
                <p className='my-5 flex items-center text-lg'>
                    <MdWork className='mr-3 text-xl text-teal-900' />Works at<span className="font-semibold ml-1"> Dhonia univercity and collage</span>
                </p>
                <p className='my-5 flex items-center text-lg'>
                    <MdSchool className='mr-3 text-xl text-teal-900' /> Studies at<span className="font-semibold ml-1"> Dhonia univercity and collage</span>
                </p>
                <p className='my-5 flex items-center text-lg'>
                    <MdHome className='mr-3 text-xl text-teal-900' />Went to<span className="font-semibold ml-1"> Dhonia univercity and collage</span>
                </p>
                <p className='my-5 flex items-center text-lg'>
                    <MdLocationOn className='mr-3 text-xl text-teal-900' /> Studies at<span className="font-semibold ml-1"> Dhonia univercity and collage</span>
                </p>
            </div> */}

        </div>
    );
};

export default About;
