import React from 'react';
import { useForm } from 'react-hook-form';
import { signupSchema } from '../schema/signupSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import FormInput from '../components/FormInput';
import { loginSchema } from '../schema/loginSchema';
import Paragraph from '../components/Paragraph';
import { Link } from 'react-router-dom';

const Signin = () => {

    const { register, handleSubmit, formState: { errors }, setValue } = useForm({ resolver: yupResolver(loginSchema) });
    const onSubmit = async (data) => {
        console.log(data)

    }
    return (
        <div className='w-full md:w-1/3 mx-auto my-10 border border-secondary p-3 py-5'>
             <h1 className='text-center text-xl font-semibold text-secondary'>Sign in</h1>
            <form onSubmit={handleSubmit(onSubmit)} resol>


                <FormInput register={register} type='email' name='email' lebel='Your Email' placeholder='email' error={errors} />
                <FormInput register={register} type='password' name='password' lebel='Your password' placeholder='password' error={errors} />

                <button className='w-full bg-primary my-5 text-white py-1 rounded-md' type="submit">Signin</button>
            </form>
                <Paragraph className="text-center">
                    New to BD Tour please <Link to='/signup'><span className="text-secondary">sign up</span></Link>
                </Paragraph>
        </div>
    );
};

export default Signin;