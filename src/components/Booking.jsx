import React from 'react';
import { useForm } from 'react-hook-form';
import { signupSchema } from '../schema/signupSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import FormInput from '../components/FormInput';
import Paragraph from '../components/Paragraph';
import { Link } from 'react-router-dom';
import Image from './Image';


const Booking = () => {

    const { register, handleSubmit, formState: { errors }, setValue } = useForm({ resolver: yupResolver(signupSchema) });
    const onSubmit = async (data) => {
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


                <FormInput register={register} type='text' name='name' lebel='Your name' placeholder='name' error={errors} />
                <FormInput register={register} type='text' name='phoneNumber' lebel='Your phone' placeholder='phone' error={errors} />
                <FormInput register={register} type='email' name='email' lebel='Your email' placeholder='email' error={errors} />
                <div className='flex flex-col my-3 w-full mx-1'>
                        <label className="font-semibold text-secondary text-xs" htmlFor="">Destination</label>
                        <select name="" id="" className="text-sm border my-2 w-full px-2 py-1.5  focus:outline-none" >
                            <option value="Book A Table">Book A Table</option>
                            <option value="Collection">Collection</option>
                            <option value="Dine In">Dine In</option>
                            <option value="Home Delivery">Home Delivery</option>
                        </select>
                        
                    </div>
                <FormInput register={register} type='date' name='date' lebel='Tour Date' placeholder='date' error={errors} />

                <button className='w-full bg-primary my-5 text-white py-1 rounded-md' type="submit">Signin</button>
            </form>
        </div>
       </div>
    );
};

export default Booking;