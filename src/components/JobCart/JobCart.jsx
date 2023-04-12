import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faMoneyCheckDollar } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const JobCart = ({ appliedJob }) => {
    const { id, companyLogo, jobTitle, companyName, remoteOrOnsite, fulltimeOrPartTime, location, salary } = appliedJob;
    return (
        <div>
            <div className='flex flex-col md:lg:flex-row justify-between items-center my-3 p-10 border-[1px] shadow mb-12'>
                <div className='flex flex-col md:lg:flex-row gap-12 items-center'>
                    <div className='bg-[#f4f4f4] md:lg:h-[200px] md:lg:w-[200px] p-auto rounded-lg flex justify-center items-center'>
                        <img className='mb-3 mx-auto md:lg:mx-0 h-10' src={companyLogo} alt="" />
                    </div>
                    <div>
                        <h3 className='text-2xl font-bold mb-2 text-center md:lg:text-left'>{jobTitle}</h3>
                        <p className='text-lg font-semibold text-[#87878b] mb-2 text-center md:lg:text-left'>{companyName}</p>
                        <div className='flex gap-3 mb-4 justify-center md:lg:justify-start'>
                            <p className='border-[#9873ff] border-[1px] px-3 py-1 w-fit text-base font-semibold text-[#9873ff] rounded'>{remoteOrOnsite}</p>
                            <p className='border-[#9873ff] border-[1px] px-3 py-1 w-fit text-base font-semibold text-[#9873ff] rounded'>{fulltimeOrPartTime}</p>
                        </div>
                        <div className='flex flex-col md:lg:flex-row items-center md:lg:items-start gap-2 md:lg:gap-4 mb-5 text-lg'>
                            <p className='text-[#87878b]'><FontAwesomeIcon icon={faLocationDot} /> {location}</p>
                            <p className='text-[#87878b]'><FontAwesomeIcon icon={faMoneyCheckDollar} /> {salary}</p>
                        </div>
                    </div>
                </div>
                <div className='text-center md:lg:text-left'>
                    <Link to={`/job_details/${id}`} className='bg-gradient-to-r from-[#7f8ffe] to-[#9873ff] px-3 py-2 text-base font-semibold text-white rounded hover:bg-none hover:text-[#9873ff] hover:border-[#9873ff] hover:border-2'>View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default JobCart;