import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getShoppingCart } from '../../utilities/fakeDb';
import './AppliedJob.css'
import JobCart from '../JobCart/JobCart';

const AppliedJob = () => {
    const appliedJobsWithFilter = [];
    const [appliedJobs, setAppliedJobs] = useState(appliedJobsWithFilter);

    const allJobs = useLoaderData();

    const getLSData = getShoppingCart();

    for (const id in getLSData) {
        const applied = allJobs.find(job => job.id === id);
        appliedJobsWithFilter.push(applied);
    };

    const handleOnSiteJobs = () => {
        const onSiteJobs = appliedJobsWithFilter.filter(appliedJobWithFilter => appliedJobWithFilter.remoteOrOnsite === 'Onsite');
        setAppliedJobs(onSiteJobs);
    };

    const handleRemoteJobs = () => {
        const remoteJobs = appliedJobsWithFilter.filter(appliedJobWithFilter => appliedJobWithFilter.remoteOrOnsite === 'Remote');
        setAppliedJobs(remoteJobs);
    };
    
    const handleAllJobs = () => {
        setAppliedJobs(appliedJobsWithFilter);
    };


    return (
        <div>
            <div className='bg-[#f9f9ff] bgImage flex items-center justify-center mb-8'>
                <h1 className='text-4xl font-bold my-12 md:lg:my-28'>Applied Job</h1>
            </div>
            <div className='flex gap-3 md:lg:gap-8 justify-center md:lg:items-end md:lg:justify-end md:lg:px-[15%] mb-10'>
                <button onClick={handleOnSiteJobs} className='bg-gradient-to-r from-[#ff9347] to-[#c39f2b] px-3 py-2 text-base font-semibold text-white rounded hover:bg-none hover:text-[#ff9347] hover:border-[#ff9347] hover:border-2'>Onsite Jobs</button>
                <button onClick={handleRemoteJobs} className='bg-gradient-to-r from-[#7f8ffe] to-[#9873ff] px-3 py-2 text-base font-semibold text-white rounded hover:bg-none hover:text-[#9873ff] hover:border-[#9873ff] hover:border-2'>Remote Jobs</button>
                <button onClick={handleAllJobs} className='bg-gradient-to-r from-[#ff9347] to-[#c39f2b] px-3 py-2 text-base font-semibold text-white rounded hover:bg-none hover:text-[#ff9347] hover:border-[#ff9347] hover:border-2'>Reset</button>
            </div>
            <div className='px-10 md:lg:px-[15%]'>
                {
                    appliedJobs.map(appliedJob => <JobCart
                        key={appliedJob.id}
                        appliedJob={appliedJob}
                    >{appliedJob.jobTitle}</JobCart>)
                }
            </div>
        </div>
    );
};

export default AppliedJob;