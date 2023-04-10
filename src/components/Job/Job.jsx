import React from 'react';

const Job = ({ job }) => {
    const { category_logo, category_name, jobs_available } = job;
    return (
        <div className='w-[315px] h-[245px] hover:border-[1px] hover:border-[#9774ff] rounded-lg p-6'>
            <div className='h-20 w-20 bg-[#efecff] p-4 flex justify-center items-center rounded-lg mb-3'>
                <img className='h-12 w-12' src={category_logo} alt="" />
            </div>
            <h4 className='text-xl font-bold mb-2'>{category_name}</h4>
            <p className='text-[#87878b] font-semibold'>{jobs_available} Jobs Available</p>
        </div>
    );
};

export default Job;