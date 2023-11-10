import React from 'react';
import {BsArrowRightCircle} from 'react-icons/bs'

const DestinationCard = () => {
    return (
        <div className='border border-secondary p-3 rounded-md'>
            <img className='h-36 w-full' src="https://i.ibb.co/1nBnSTD/jaflong.jpg" alt="" />

           <div className='flex justify-between items-center mt-2'>
           <h1 className='font-semibold'>Dhaka</h1>
            <BsArrowRightCircle className='text-secondary hover:bg-secondary hover:text-white rounded-full cursor-pointer duration-300' size={24} />
           </div>
        </div>
    );
};

export default DestinationCard;