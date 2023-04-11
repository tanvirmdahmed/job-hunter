import React from 'react';
import Banner from '../Banner/Banner';
import JobCategory from '../JobCategory/JobCategory';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';
import { useLoaderData } from 'react-router-dom';

const FrontPage = () => {
    const jobData6 = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <JobCategory></JobCategory>
            <FeaturedJobs
                jobData6={jobData6}
            ></FeaturedJobs>
        </div>
    );
};

export default FrontPage;