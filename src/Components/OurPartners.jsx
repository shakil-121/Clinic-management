import React from 'react'; 
import pic1 from '../assets/partner/meditest-partner-1.png'
import pic2 from '../assets/partner/meditest-partner-3.png'
import pic3 from '../assets/partner/meditest-partner-6.png'
import pic4 from '../assets/partner/meditest-partner-7.png'
import pic5 from '../assets/partner/meditest-partner-8.png'

const OurPartners = () => {
    return (
        <div>
            <h1 className='text-4xl font-bold text-center'>Our Partners</h1>  
            <div className='grid grid-cols-4 gap-2  justify-center items-center mx-16 my-10'> 
                
                 <img className='justify-self-center' src={pic1} alt="" />
                
                
                <img className='justify-self-center' src={pic2} alt="" />
                
                
                <img className='justify-self-center' src={pic3} alt="" />
                
            
                <img className='justify-self-center' src={pic4} alt="" />
                
            
                <img className='justify-self-center' src={pic5} alt="" />
                
            
                <img className='justify-self-center' src={pic3} alt="" />
                
            
                <img className='justify-self-center' src={pic1} alt="" />
                
                <img className='justify-self-center' src={pic4} alt="" />
                
            </div>
        </div>
    );
};

export default OurPartners;