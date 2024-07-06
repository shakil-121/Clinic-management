// eslint-disable-next-line no-unused-vars
import React from 'react';
import HeroSection from './HeroSection';
import BookAnAppointment from '../../Components/BookAnAppointment';
import OurPartners from '../../Components/OurPartners';
import Footer from './Footer';
import AboutSection from './AboutSection';
import OurServiceSection from './OurServiceSection';

const Home = () => {
    return (
        <div> 
            <HeroSection></HeroSection> 
            <BookAnAppointment></BookAnAppointment> 
            <OurPartners></OurPartners> 
            <AboutSection></AboutSection> 
            <OurServiceSection></OurServiceSection>

            <Footer></Footer>
        </div>
    );
};

export default Home;