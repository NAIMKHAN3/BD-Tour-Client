import React from 'react';
import {BsArrowRightCircle} from 'react-icons/bs'

const DestinationCard = ({destination}) => {
    return (
        <div className='border border-secondary p-3 rounded-md'>
            <img className='h-52 w-full' src={destination.image} alt="" />

           <div className='flex justify-between items-center my-5'>
           <h1 className='font-semibold'>{destination.name}</h1>
            <BsArrowRightCircle className='text-secondary hover:bg-secondary hover:text-white rounded-full cursor-pointer duration-300' size={24} />
           </div>
        </div>
    );
};

export default DestinationCard;