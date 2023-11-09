import * as yup from 'yup';

export const signupSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().email().required("Email is required"),
    password: yup.string().min(6).max(24).required("Password is required"),
    phoneNumber: yup.string().min(11).max(11).required("Phone Number is required"),
    address: yup.string().min(6).max(24).required("Address is required"),
})