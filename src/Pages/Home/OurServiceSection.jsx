import React from 'react'; 
import { FaCircle } from "react-icons/fa";  
import { TbDental } from "react-icons/tb"; 
import { FaEye } from "react-icons/fa"; 
import { FaHeartbeat } from "react-icons/fa"; 
import { FaAmbulance } from "react-icons/fa";





const OurServiceSection = () => {
    return (
        <div className='mx-24 font-pppins my-16'>
            {/* sub heading  */}
            <div className='flex items-center justify-start gap-2 mb-3'>
                     <div className='text-[#4a36ff]'>
                      <FaCircle />
                        </div>
                     <p className='text-xl'>Our service</p> 
                  </div> 
                  <h1 className='text-4xl font-bold'>
                     High Quality Services <br /> for You.
                     </h1> 

              {/* parent div  */}
              <div> 
                {/* row div  */} 
                <div className='grid grid-cols-4 gap-4 my-4'>
                    {/* box div  */}  
                    <div className='p-3 bg-slate-200 rounded-xl shadow-2xl'>
                        <div className='flex items-center  justify-between'>
                          <div className='p-4 rounded-full bg-red-600 text-white text-2xl'>
                          <TbDental />
                          </div>
                          <h2 className='text-2xl'>Dental Care</h2> 
                        </div>
                        <p className='mt-4'>Hospitals are equipped with advanced medical technologies and facilities.</p>
                    </div>
                    {/* box div  */}  
                    <div className='p-3 bg-slate-200 rounded-xl shadow-2xl'>
                        <div className='flex items-center  justify-between'>
                          <div className='p-4 rounded-full bg-sky-500 text-white text-2xl'>
                          <FaHeartbeat />
                          </div>
                          <h2 className='text-2xl'>Heart Care</h2> 
                        </div>
                        <p className='mt-4'>Hospitals are equipped with advanced medical technologies and facilities.</p>
                    </div>
                    {/* box div  */}  
                    <div className='p-3 bg-slate-200 rounded-xl shadow-2xl'>
                        <div className='flex items-center  justify-between'>
                          <div className='p-4 rounded-full bg-red-600 text-white text-2xl'>
                          <FaEye></FaEye>
                          </div>
                          <h2 className='text-2xl'>Eye Care</h2> 
                        </div>
                        <p className='mt-4'>Hospitals are equipped with advanced medical technologies and facilities.</p>
                    </div>
                    {/* box div  */}  
                    <div className='p-3 bg-slate-200 rounded-xl shadow-2xl'>
                        <div className='flex items-center  justify-between'>
                          <div className='p-4 rounded-full bg-lime-500 text-white text-2xl'>
                          <FaAmbulance />
                          </div>
                          <h2 className='text-2xl'>Ambulance</h2> 
                        </div>
                        <p className='mt-4'>Hospitals are equipped with advanced medical technologies and facilities.</p>
                    </div>
                    

                </div>
                <div>
                <div className='grid grid-cols-4 gap-4 my-4'>
                    {/* box div  */}  
                    <div className='p-3 bg-slate-200 rounded-xl shadow-2xl'>
                        <div className='flex items-center  justify-between'>
                          <div className='p-4 rounded-full bg-red-600 text-white text-2xl'>
                          <TbDental />
                          </div>
                          <h2 className='text-2xl'>Dental Care</h2> 
                        </div>
                        <p className='mt-4'>Hospitals are equipped with advanced medical technologies and facilities.</p>
                    </div>
                    {/* box div  */}  
                    <div className='p-3 bg-slate-200 rounded-xl shadow-2xl'>
                        <div className='flex items-center  justify-between'>
                          <div className='p-4 rounded-full bg-green-600 text-white text-2xl'>
                          <TbDental />
                          </div>
                          <h2 className='text-2xl'>Dental Care</h2> 
                        </div>
                        <p className='mt-4'>Hospitals are equipped with advanced medical technologies and facilities.</p>
                    </div>
                    {/* box div  */}  
                    <div className='p-3 bg-slate-200 rounded-xl shadow-2xl'>
                        <div className='flex items-center  justify-between'>
                          <div className='p-4 rounded-full bg-red-600 text-white text-2xl'>
                          <FaEye></FaEye>
                          </div>
                          <h2 className='text-2xl'>Eye Care</h2> 
                        </div>
                        <p className='mt-4'>Hospitals are equipped with advanced medical technologies and facilities.</p>
                    </div>
                    {/* box div  */}  
                    <div className='p-3 bg-slate-200 rounded-xl shadow-2xl'>
                        <div className='flex items-center  justify-between'>
                          <div className='p-4 rounded-full bg-red-600 text-white text-2xl'>
                          <TbDental />
                          </div>
                          <h2 className='text-2xl'>Dental Care</h2> 
                        </div>
                        <p className='mt-4'>Hospitals are equipped with advanced medical technologies and facilities.</p>
                    </div>
                    

                </div>
                </div>
                
                </div>        
              <div className='flex items-center justify-center'>
              <button className='bg-[#4a36ff] text-white text-lg py-3 px-6 mt-4  rounded-full hover:bg-lime-500'>Make An Appointment</button>
              </div>
        </div>
    );
};

export default OurServiceSection;