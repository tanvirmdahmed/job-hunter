import React from 'react';

const FeaturedJob = ({featuredJob}) => {
    const {companyLogo, jobTitle, companyName, remoteOrOnsite, location, salary} = featuredJob;
    return (
        <div className='my-10'>
            <img className='mb-3' src={companyLogo} alt="" />
            <h3 className='text-xl font-bold mb-2'>{jobTitle}</h3>
            <p className='text-base font-semibold text-[#87878b] mb-2'>{companyName}</p>
            <p className='border-[#9873ff] border-[1px] px-3 py-1 w-fit text-base font-semibold text-[#9873ff] rounded mb-2'>{remoteOrOnsite}</p>
            <div className='flex mb-2'>
                <p className='text-[#87878b]'>{location}</p>
                <p className='text-[#87878b]'>{salary}</p>
            </div>
            <button className='bg-gradient-to-r from-[#7f8ffe] to-[#9873ff] px-3 py-2 text-base font-semibold text-white rounded'>View Details</button>
        </div>
    );
};

export default FeaturedJob;