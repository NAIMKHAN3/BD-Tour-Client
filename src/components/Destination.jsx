import React from 'react';
import DestinationCard from './DestinationCard';
import { useGetDestinationsQuery } from '../redux/features/destination/destinationApi';

const Destination = () => {
    const { data: destinations, isLoding } = useGetDestinationsQuery();
    return (
          <div className='max-w-6xl mx-auto my-5'>
             <h1 className='text-2xl text-secondary mt-10 font-semibold ml-4'>Destination</h1>
        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-5'>
            {
                destinations?.data.map(destination => <DestinationCard key={destination._id} destination={destination} />)
            }
           </div>
          </div>
    );
};

export default Destination;