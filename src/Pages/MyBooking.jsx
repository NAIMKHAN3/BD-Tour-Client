import React from 'react';
import { useGetBookingsQuery } from '../redux/features/booking/bookingApi';
import Button from '../components/Button';

const MyBooking = () => {
const {data:bookings, isLoading} = useGetBookingsQuery()
if(isLoading){
  return
}else if (bookings?.data.length < 0){
   return <h1 className='text-center'>Your Booking Is Empty Please <Button className="bg-white px-6 py-2 text-secondary mt-5 hover:text-white hover:bg-gray-600 duration-200">Booking Now</Button></h1>
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
                        bookings?.data?.map(({date, name, email,phoneNumber, status, destinationId }, i) => <tr key={i} className={`${i % 2 === 1 ? "bg-green-50" : "bg-white"}`}>
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