import React, { useEffect, useState } from 'react';
import Job from '../Job/Job';

const JobCategory = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('JobCategory.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])

    return (
        <div className='my-20'>
            <h1 className='text-4xl font-bold mb-3 text-center'>Job Category List</h1>
            <p className='text-[#87878b] text-center'>Explore thousands of job opportunities with all the information you need.</p>
            <div className='flex my-6 items-center justify-around'>
                {
                    jobs.map(job => <Job
                        key={job.id}
                        job={job}
                    ></Job>)
                }
            </div>
        </div>
    );
};

export default JobCategory;