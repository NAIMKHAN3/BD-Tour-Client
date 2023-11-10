import React from 'react';
import { useForm } from 'react-hook-form';
import { signupSchema } from '../schema/signupSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import FormInput from '../components/FormInput';
import Paragraph from '../components/Paragraph';
import { Link, useNavigate } from 'react-router-dom';
import Image from './Image';
import { useGetDestinationsQuery } from '../redux/features/destination/destinationApi';
import { bookingSchema } from '../schema/bookingSchema';
import { useSelector } from 'react-redux';
import { useCreateBookingMutation } from '../redux/features/booking/bookingApi';
import toast from 'react-hot-toast';
import { getInfoToLocal } from '../helper/getInfoToLocal';



const Booking = () => {
    const { data: destinations, isLoding } = useGetDestinationsQuery();
    const navigate = useNavigate();
    const { email } = useSelector(state => state.user)
    let bookingInfo = JSON.parse(getInfoToLocal('book-info'))
    const [createBooking] = useCreateBookingMutation();
    const { register, handleSubmit, formState: { errors }, setValue, reset } = useForm({ resolver: yupResolver(bookingSchema) });
    const onSubmit = async (data) => {
        if(!email){
            localStorage.setItem('book-info', JSON.stringify(data))
            return navigate('/signin')
        }
        try {
            const result = await createBooking(data).unwrap();
            console.log(result);
            if (result.status) {
                localStorage.removeItem('book-info')
                bookingInfo = null
                toast.success("Booking Success")
                navigate('/my-booking')
            }
            reset()
        }
        catch (err) {
            toast.error(err?.data?.message)
        }
        console.log(data)

    }
    return (
        <div className='max-w-6xl mx-auto'>
            <h1 className='text-2xl text-secondary mt-10 font-semibold ml-4'>Booking</h1>
            <div className='w-full flex-col md:flex-row flex mx-auto mt-5 gap-3 p-3 py-5'>
                <div className='w-full md:w-1/2'>
                    <Image className="h-full rounded-md" src="https://i.ibb.co/YbwgbWB/tour-operator-hero-1.jpg" />
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className='w-full md:w-1/2'>


                    <FormInput register={register} type='text' name='name' lebel='Your name' placeholder='name' error={errors} defaultValue={bookingInfo ? bookingInfo.name : ""} />
                    <FormInput register={register} type='text' name='phoneNumber' lebel='Your phone' placeholder='phone' error={errors} defaultValue={bookingInfo ? bookingInfo.phoneNumber : ""} />
                    <FormInput register={register} type='email' name='email' lebel='Your email' placeholder='email' error={errors} defaultValue={bookingInfo ? bookingInfo.email : ""} />
                    <div className='flex flex-col my-3 w-full mx-1'>
                        <label className="font-semibold text-secondary text-xs" htmlFor="">Destination</label>
                        <select name="" id="" className="text-sm border my-2 w-full px-2 py-1.5  focus:outline-none" {...register(`destinationId`)} defaultValue={bookingInfo ? bookingInfo.destinationId : ""}>
                            {
                                destinations?.data.map(destination => <option key={destination._id} value={destination._id}>{destination.name}</option>)
                            }

                        </select>

                    </div>
                    <FormInput register={register} type='date' name='date' lebel='Tour Date' placeholder='date' error={errors} defaultValue={bookingInfo ? bookingInfo.date : ""} />

                    <button className='w-full bg-primary my-5 text-white py-1 rounded-md' type="submit">Booking</button>
                </form>
            </div>
        </div>
    );
};

export default Booking;