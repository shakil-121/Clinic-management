import React from 'react';
import animation from '../../assets/animations/Animation - 1715616255061.json'
import Lottie from 'lottie-react';
import { FaPhone } from "react-icons/fa6";


const HeroSection = () => {
    return (
        <div className='md:h-[95vh] bg-[#0b0b38] grid grid-cols-2 px-12'>
            <div>
                <p className='font-bold text-white border-l-4 mt-20 px-4 rounded-sm'>  Quality therapy starts from here</p>
                <h1 className='text-white text-5xl font-semibold font-sans pt-8'>Take The Worlds Best <br />Quality Treatment</h1>
                <p className='text-white pt-5 leading-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis tempus orci ut lacinia. Sed tempor hendrerit fermen Pellentesque ac diam commodo.</p>
                <div className='flex'>
                    <button className="px-8 me-3 py-4 mt-6 rounded-3xl bg-[#4a36ff] border-none text-white uppercase font-semibold">Appointment</button>

                    <button className="px-8 py-4 mt-6 rounded-3xl bg-white border-none text-black uppercase font-bold"><span className='flex justify-center items-center'><FaPhone />+01871426050</span></button>
                </div> 
                <div className='grid grid-cols-3 text-white  mt-5 '>
                    <div className=''>
                       <h1 className='text-5xl font-extrabold'>20+</h1> 
                       <p className='text-gray-400'>Years Of <br /> Experience</p>
                    </div>
                    <div className='border-l-2 px-4'>
                    <h1 className='text-5xl font-extrabold'>110+</h1> 
                       <p className='text-gray-400'>Service <br /> Area</p>
                    </div>
                    <div className='border-l-2 px-4'>
                    <h1 className='text-5xl font-extrabold'>50+</h1> 
                       <p className='text-gray-400'>Expert<br />Doctor</p>
                    </div>
                </div>
            </div>
            <div>
                <Lottie className='md:h-[90vh]' animationData={animation} loop={true} />
            </div>
        </div>
    );
};

export default HeroSection;