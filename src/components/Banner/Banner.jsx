import React from 'react';

const Banner = () => {
    return (
        <div className='flex items-center py-10 bg-[#f9f9ff]'>
            <div className='w-[50%]'>
                <h1 className='text-7xl font-bold leading-tight mb-5'><span>One Step</span> <br /> <span>Closer To Your</span> <br /> <span className='text-[#7f90fe]'>Dream Job</span></h1>
                <p className='text-[#87878b] text-lg mb-5'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className='bg-gradient-to-r from-[#7f8ffe] to-[#9873ff] px-3 py-2 text-base font-semibold text-white rounded'>Get Started</button>
            </div>
            <img className='w-[50%] md:lg:relative md:lg:left-20' src="https://i.ibb.co/Ykkv8Gp/man.png" alt="" />
        </div>
    );
};

export default Banner;