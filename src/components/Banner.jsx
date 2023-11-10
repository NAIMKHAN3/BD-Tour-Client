import React from 'react';
import Button from './Button';

const Banner = () => {
    return (
        <div className='relative bg-primary h-[512px]'>
            <div className='flex flex-col md:flex-row justify-between h-full'>
                <div className='w-full md:w-[70%] my-auto mx-5 text-white'>
                    <h1 className=' text-xl font-semibold mt-5'>Discover Your Next Adventure </h1>
                    <h1 className='mt-5  md:w-1/2'>Uncover Hidden Gems, Capture Breathtaking Views, and Create Timeless Memories with Our Ultimate Travel Guide. Your Journey Starts Here!</h1>

                    <a href="#booking"> <Button className="bg-white px-6 py-2 text-secondary mt-5 hover:text-white hover:bg-gray-600 duration-200">Booking Now</Button></a>
                </div>
                <div className='w-full md:w-[30%]'>

                    <img className=' h-52 md:h-full w-full rounded-tl-full' src="https://i.ibb.co/GMVcwGY/fpdl-in-tourist-take-photo-phu-sub-lek-viewpoint-sunset-lopburi-thailand-335224-1392-normal.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;