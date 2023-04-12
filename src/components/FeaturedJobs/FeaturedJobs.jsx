import React, { useEffect, useState } from 'react';
import FeaturedJob from '../FeaturedJob/FeaturedJob';

const FeaturedJobs = ({ jobData6 }) => {
    const jobData4 = jobData6.slice(0, 4);
    const [jobs, setJobs] = useState(jobData4);

    const handleShowAllJobs = () => {
        setJobs(jobData6);
        document.getElementById('show-all').classList.add('hidden')
    }


    return (
        <div className='w-[100%] md:lg:w-full mb-8 mx-auto md:lg:px-[15%]'>
            <div className='px-10'>
                <h1 className='text-4xl font-bold mb-3 text-center'>Featured Jobs</h1>
                <p className='text-[#87878b] text-center'>Sometimes a highly motivated client will pay to have their project listed as a featured job.</p>
            </div>
            <div className='grid grid-cols-1 md:lg:grid-cols-2 items-center justify-around px-8 gap-4'>
                {
                    jobs.map(job => <FeaturedJob
                        key={job.id}
                        job={job}
                    ></FeaturedJob>)
                }
            </div>
            <div className='text-center'>
                <button onClick={handleShowAllJobs} id='show-all' className='bg-gradient-to-r from-[#7f8ffe] to-[#9873ff] px-3 py-2 text-base font-semibold text-white rounded hover:bg-none hover:text-[#9873ff] hover:border-[#9873ff] hover:border-2z'>Show All Jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;