import React from 'react';
import { FaCircle } from "react-icons/fa";  
import about from "../../assets/about.png"


const AboutSection = () => {
    return (
        <div className='mx-20 my-24 font-pppins'>
            <div className='grid grid-cols-2 gap-6 justify-between'>
                <div> 

                  {/* sub heading  */}
                  <div className='flex items-center justify-start gap-2 mb-3'>
                     <div className='text-[#4a36ff]'>
                      <FaCircle />
                        </div>
                     <p className='text-xl'>About Us</p>
                  </div> 
                  <h1 className='text-4xl font-bold'>
                  Complete Medical Solutions In <br /> one Place and Good Health</h1>  
                  <br /> 
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis tempus orci ut lacinia. Sed tempor hendrerit fermen Pellentesque ac diam commodo.</p>
                  <br /> 

                  <div className='flex text-xl font-pppins'>
                    <div className='ms-4'>
                    <ul className='list-disc font-semibold'>
                    <li>From Scientific Jumar</li>
                    <li>Positive Feedback</li>
                  </ul>
                    </div>
                    <div className='ms-10'>
                    <ul className='list-disc font-semibold'>
                    <li>100% Expert Doctors</li>
                    <li>Medicine & instrument</li>
                  </ul>
                    </div>
                  </div> 
                  <button className='bg-[#4a36ff] text-white text-xl py-4 px-6 mt-16 rounded-full hover:bg-lime-500'>ABOUT MORE +</button>
                </div>
                <div>
                    <img className='h-[400px]' src={about} alt="" />
                </div>
                </div>       
        </div>
    );
};

export default AboutSection;          