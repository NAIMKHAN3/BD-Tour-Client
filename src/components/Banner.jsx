import React from 'react';
import Button from './Button';

const Banner = () => {
    return (
        <div className='relative bg-primary h-[512px]'>
            <div className='flex justify-between h-full'>
                <div className='w-[70%] my-auto ml-10 text-white'>
                    <h1 className=' text-xl font-semibold'>Discover Your Next Adventure </h1>
                    <h1 className='mt-5  w-1/2'>Uncover Hidden Gems, Capture Breathtaking Views, and Create Timeless Memories with Our Ultimate Travel Guide. Your Journey Starts Here!</h1>

                    <Button className="bg-white px-6 py-2 text-secondary mt-5 hover:text-white hover:bg-gray-600 duration-200">Booking Now</Button>
                </div>
                <div className='w-[30%]'>

                    <img className='h-full w-full rounded-tl-full' src="https://i.ibb.co/GMVcwGY/fpdl-in-tourist-take-photo-phu-sub-lek-viewpoint-sunset-lopburi-thailand-335224-1392-normal.jpg" alt="" />
                </div>
            </div>
            {/* <div className='absolute top-0 left-0 right-0 bottom-0 bg-gray-600 opacity-30'></div> */}
        </div>
    );
};

export default Banner;