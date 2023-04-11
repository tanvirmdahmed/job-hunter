import React from 'react';

const Banner = () => {
    return (
        <div className='flex flex-col-reverse md:lg:flex-row items-center py-10 bg-[#f9f9ff]'>
            <div className='w-[80%] md:lg:w-[50%]'>
                <h1 className='text-4xl md:lg:text-7xl text-center md:lg:text-left font-bold leading-relaxed  mb-5'><span>One Step</span> <br /> <span>Closer To Your</span> <br /> <span className='text-[#7f90fe]'>Dream Job</span></h1>
                <p className='text-[#87878b] text-lg text-center md:lg:text-left mb-5'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <div className='text-center md:lg:text-left'>
                    <button className='bg-gradient-to-r from-[#7f8ffe] to-[#9873ff] px-3 py-2 text-base font-semibold text-white rounded hover:bg-none hover:text-[#9873ff] hover:border-[#9873ff] hover:border-2'>Get Started</button>
                </div>
            </div>
            <img className='w-[80%] md:lg:w-[50%] md:lg:relative md:lg:left-20' src="https://i.ibb.co/Ykkv8Gp/man.png" alt="" />
        </div>
    );
};

export default Banner;