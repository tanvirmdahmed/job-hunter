import React, { useEffect, useState } from 'react';
import FeaturedJob from '../FeaturedJob/FeaturedJob';

const FeaturedJobs = () => {
    const [featuredJobs, setFeaturedJobs] = useState([]);

    useEffect(() => {
        fetch('jobDetails.json')
        .then(res => res.json())
        .then(data => setFeaturedJobs(data))
    },[])

    return (
        <div>
            <h1 className='text-4xl font-bold mb-3 text-center'>Featured Jobs</h1>
            <p className='text-[#87878b] text-center'>Sometimes a highly motivated client will pay to have their project listed as a featured job.</p>
            <div className='grid grid-cols-1 md:lg:grid-cols-2 my-6 items-center justify-around'>
                {
                    featuredJobs.map(featuredJob => <FeaturedJob
                        key={featuredJob.id}
                        featuredJob={featuredJob}
                    ></FeaturedJob>)
                }
            </div>
        </div>
    );
};

export default FeaturedJobs;