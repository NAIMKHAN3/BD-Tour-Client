import React from 'react';
import { useForm } from 'react-hook-form';
import { signupSchema } from '../schema/signupSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import FormInput from '../components/FormInput';
import Paragraph from '../components/Paragraph';
import { Link } from 'react-router-dom';

const SignUp = () => {

    const { register, handleSubmit, formState: { errors }, setValue } = useForm({ resolver: yupResolver(signupSchema) });
    const onSubmit = async (data) => {
        console.log(data)

    }
    return (
        <div className='w-1/3 mx-auto my-10 border border-dashed border-secondary p-3 py-5'>
            <h1 className='text-center text-xl font-semibold text-secondary'>Sign Up</h1>
            <form onSubmit={handleSubmit(onSubmit)} resol>


                <FormInput register={register} type='text' name='name' lebel='Your name' placeholder='name' error={errors} />
                <FormInput register={register} type='text' name='address' lebel='Your address' placeholder='address' error={errors} />
                <FormInput register={register} type='text' name='phoneNumber' lebel='Your phone' placeholder='phone' error={errors} />
                <FormInput register={register} type='email' name='email' lebel='Your email' placeholder='email' error={errors} />
                <FormInput register={register} type='password' name='password' lebel='Your password' placeholder='password' error={errors} />

                <button className='w-full bg-primary my-5 text-white py-1 rounded-md' type="submit">Signin</button>
            </form>
                <Paragraph className="text-center">
                    Already have an account please <Link to='/signin'><span className="text-secondary">sign in</span></Link>
                </Paragraph>
        </div>
    );
};

export default SignUp;