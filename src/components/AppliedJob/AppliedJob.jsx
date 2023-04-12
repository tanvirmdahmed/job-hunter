import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getShoppingCart } from '../../utilities/fakeDb';
import './AppliedJob.css'

const AppliedJob = () => {
    const allJobs = useLoaderData();

    const getLSData = getShoppingCart()
    const appliedJobs = [];
    for (const id in getLSData) {
        const applied = allJobs.find(job => job.id === id);
        appliedJobs.push(applied);
    }
    console.log(appliedJobs);


    return (
        <div>
            <div className='bgImage flex items-center justify-center mb-8'>
                <h1 className='text-4xl font-bold my-12 md:lg:my-36'>Applied Job</h1>
            </div>
            <div className='flex gap-8 items-end justify-end md:lg:px-[15%]'>
                <button className='bg-gradient-to-r from-[#ff9347] to-[#c39f2b] px-3 py-2 text-base font-semibold text-white rounded hover:bg-none hover:text-[#fed54a] hover:border-[#fed54a] hover:border-2'>Filter by Onsite</button>
                <button className='bg-gradient-to-r from-[#7f8ffe] to-[#9873ff] px-3 py-2 text-base font-semibold text-white rounded hover:bg-none hover:text-[#9873ff] hover:border-[#9873ff] hover:border-2'>Filter by Remote</button>
            </div>
            <div className='md:lg:px-[15%]'>
                {
                    appliedJobs.map(appliedJob => <p
                        key={appliedJob.id}
                    >{appliedJob.jobTitle}</p>)
                }
            </div>
        </div>
    );
};

export default AppliedJob;