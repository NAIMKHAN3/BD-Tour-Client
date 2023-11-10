import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetTouristSpotQuery } from '../redux/features/destination/destinationApi';
import Button from '../components/Button';
import VideoPopup from '../components/VideoPopup';

const DestinationDetails = () => {
    const [src, setSrc] = useState(null)
    const { id } = useParams();
    const { data, isLoading } = useGetTouristSpotQuery(id)
    console.log(data)
    if (isLoading) {
        return <div class="flex items-center justify-center h-screen">
            <div class="relative">
                <div class="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
                <div class="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-secondary animate-spin">
                </div>
            </div>
        </div>
    }
    const destination = data.data[0].destinationId;
    return (
        <div className='max-w-6xl mx-auto'>
            <div>
                <h1 className='text-secondary text-center text-3xl font-semibold uppercase my-5'>{destination.name}</h1>
                <img className='w-full h-[512px] rounded-md' src={destination?.image} alt="" />
                <button className="bg-primary px-6 py-2 text-white mt-5 hover:text-white hover:bg-gray-600 duration-200 my-5" onClick={() => setSrc(destination.video)}>Video popup</button>
            </div>
            <h1 className='text-secondary text-center text-3xl font-semibold uppercase my-10'>Tourist Spot</h1>
            {
                data.data.map((spot, i) => <div key={spot._id} className={`flex flex-col md:flex-row items-center ${i % 2 === 1 ? "flex-row-reverse" : "flex-row"}  my-10`}>
                    <div className='w-full md:w-1/2'>
                        <img className='rounded-md' src={spot.image} alt="" />
                    </div>
                    <div className='w-full md:w-1/2'>
                        <h1 className='mb-3 text-secondary text-2xl font-semibold'>{spot.name}</h1>
                        <h1>{spot.description}</h1>
                    </div>
                </div>)
            }
            {
                src ? <VideoPopup src={src} setSrc={setSrc} /> : null
            }
        </div>
    );
};

export default DestinationDetails;