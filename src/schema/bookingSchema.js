import * as yup from 'yup';

export const bookingSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().email().required("Email is required"),
    phoneNumber: yup.string().min(11).max(11).required("Phone Number is required"),
    destinationId: yup.string().required("Destination is required"),
    date: yup.string().required("Date is required")
})