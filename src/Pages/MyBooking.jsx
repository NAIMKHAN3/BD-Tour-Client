import React from 'react';
import { useGetBookingsQuery } from '../redux/features/booking/bookingApi';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const MyBooking = () => {
    const { data: bookings, isLoading } = useGetBookingsQuery()
    if (isLoading) {
        return <div class="flex items-center justify-center h-screen">
            <div class="relative">
                <div class="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
                <div class="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-secondary animate-spin">
                </div>
            </div>
        </div>
    } else if (bookings?.data.length < 0) {
        return <h1 className='text-center'>Your Booking Is Empty Please <Link to="/"><Button className="bg-white px-6 py-2 text-secondary mt-5 hover:text-white hover:bg-gray-600 duration-200">Booking Now</Button></Link> </h1>
    }

    return (
        <div className='max-w-6xl mx-auto my-10 overflow-scroll' >
            <table class="table-auto overflow-scroll w-[1000px] md:w-full text-secondary mt-4">
                <thead>
                    <tr>
                        <th className='p-2 border'>SL</th>
                        <th className='p-2 border'>Name</th>
                        <th className='p-2 border'>Email</th>
                        <th className='p-2 border'>Phone</th>
                        <th className='p-2 border'>Destination</th>
                        <th className='p-2 border'>Booking date</th>
                        <th className='p-2 border'>Status</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        bookings?.data?.map(({ date, name, email, phoneNumber, status, destinationId }, i) => <tr key={i} className={`${i % 2 === 1 ? "bg-green-50" : "bg-white"}`}>
                            <td className="p-2 border text-center">{i + 1}</td>
                            <td className="p-2 border text-center">{name}</td>
                            <td className="p-2 border text-center">{email}</td>
                            <td className="p-2 border text-center font-bold text-sm">{phoneNumber}</td>
                            <td className="p-2 border text-center font-bold text-sm">{destinationId.name}</td>
                            <td className="p-2 border text-center font-bold text-sm">{date}</td>
                            <td className="p-2 border text-center font-bold text-sm">{status}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyBooking;