
import React from 'react'; 
import { MdOutlineEmail } from "react-icons/md"; 
import { FaPhone } from "react-icons/fa6"; 
import { IoLocation } from "react-icons/io5";




const BookAnAppointment = () => {
    return (
        <div className='mx-16 bg-[#0b0b38] rounded-lg p-6 my-8'>
            <h1 className='font-bold text-3xl text-white'>Book an Appointment</h1> 
            <div className='grid grid-cols-4'>
                <div className='rounded-lg bg-white p-3 mt-5 flex justify-between'>
                    <div>
                        <p>E-mail Address</p> 
                        <h1>shakilmedclinic@gmail.com</h1>
                    </div>
                    <div className='ps-4'>
                      <div className='bg-slate-200 p-3 rounded-full'>
                      <MdOutlineEmail />
                      </div>
                    </div>
                </div>
                <div className='rounded-lg bg-white p-3 mt-5 flex mx-2 justify-between'>
                    <div>
                        <p>Phone No</p> 
                        <h1>+8801871426050</h1>
                    </div>
                    <div className='ps-4'>
                      <div className='bg-slate-200 p-3 rounded-full'>
                      <FaPhone />
                      </div>
                    </div>
                </div>
                <div className='rounded-lg bg-white p-3 mt-5 flex me-2 justify-between'>
                    <div>
                        <p>Location</p> 
                        <h1>Mirpur-15,ISTT Campus</h1>
                    </div>
                    <div className='ps-4'>
                      <div className='bg-slate-200 p-3 rounded-full'>
                      <IoLocation />
                      </div>
                    </div>
                </div>
                <div className='rounded-lg bg-[#4a36ff] p-3 mt-5 flex'>
                    <button className='text-white text-center m-auto justify-center text-3xl font-bold'>Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default BookAnAppointment;