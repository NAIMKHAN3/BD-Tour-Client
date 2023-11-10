import React from 'react';
import Banner from '../components/Banner';
import Booking from '../components/Booking';
import DestinationCard from '../components/DestinationCard';
import Destination from '../components/Destination';
import TestimonialCarousel from '../components/Testimonial';

const Home = () => {
    return (
        <div>
           <Banner/>
           <Booking/>
           <Destination/>
           <TestimonialCarousel/>
        </div>
    );
};

export default Home;