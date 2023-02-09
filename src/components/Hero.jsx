import React from 'react'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
const Hero = () => {
  return (
    <div className=' '>
        <div className='flex flex-col sm:flex-row items-center sm:justify-between justify-start left pl-6 pr-6 sm:pt-0 pt-8 sm:w-[100vw] sm:h-[80vh] w-[100vw] h-[900px]  '>
            <div className='flex  bg-[#292d0d] shadow-lg shadow-[#77b036] items-center justify-center backdrop-filter backdrop-blur-lg bg-opacity-30  rounded-3xl border-[#292d0d] sm:w-[800px]  '>
               <div className='sm:max-w-[800px]  flex flex-col  p-8 sm:p-14'>
                <p  className=' uppercase font-bold text-[#292d0d]  text-[20px] sm:text-[40px]'>Start Your </p>
                <p className=' uppercase font-bold text-[30px] sm:text-[60px] text-[#5f8d2c] '>Sustainability</p>
                <p  className=' uppercase font-bold text-[#292d0d]  text-[20px] sm:text-[40px]'> journey today!!!</p>
                <p  className='font-bold pt-6  text-[#eeeaea] text-[15px] sm:text-[20px]'>The Sustainable Kit is an all-in-one solution for eco-friendly living. With five essential products, it makes sustainability easy and affordable. Start your journey today and make a positive impact on the environment</p>
               </div>
            </div>
            <div className='flex flex-col items-center justify-center sm:pt-0 pt-8'>
              <h1 className='uppercase text-white pb-4 m-2 sm:text-[25px] text-[20px] bg-[#292d0d] rounded-lg  sm:bg-transparent  '>Sustainable starter kit</h1>
              <div className=''>
                <img className='rounded-full sm:h-[400px] sm:w-[600px] h-[300px]  object-cover' src="/sustainable starter kit.webp" alt="" />
              </div>
            </div>
        </div>
        <div className='text-white text-[30px] md:flex items-center justify-center w-[20px] m-auto animate-bounce hidden  '>
                <a href="#kit"> <ArrowDownwardIcon className='svg_icons text-[#292d0d]'/></a>
        </div>
    </div>
    
  )
}

export default Hero