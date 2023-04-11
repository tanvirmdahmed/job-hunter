import { useLoaderData, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSackDollar } from '@fortawesome/free-solid-svg-icons'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

const ViewDetails = ({ }) => {
    const jobs = useLoaderData();
    const { id } = useParams();


    const job = jobs.find(jb => jb.id === id);
    const { jobDescription, jobResponsibility, educationalRequirements, experiences, salary, jobTitle, contactInformation, location } = job;

    return (
        <div>
            <h1 className='text-4xl font-bold my-16 text-center'>Job Details</h1>
            <div className='my-10 w-full flex flex-col items-center md:lg:items-start md:lg:flex-row gap-8 md:lg:gap-2 mx-auto'>
                <div className='w-[80%] md:lg:w-[70%]'>
                    <p className='text-xl mb-8 leading-relaxed'><strong>Job Description:</strong> <span className='text-[#87878b]'>{jobDescription}</span></p>
                    <p className='text-xl mb-8 leading-relaxed'><strong>Job Responsibility:</strong> <span className='text-[#87878b]'>{jobResponsibility}</span></p>
                    <div className='mb-8'>
                        <p className='text-xl'><strong>Educational Requirements:</strong></p>
                        <p className='text-xl text-[#87878b] mt-3'>{educationalRequirements}</p>
                    </div>
                    <div className=''>
                        <p className='text-xl'><strong>Experiences:</strong></p>
                        <p className='text-xl text-[#87878b] mt-3'>{experiences}</p>
                    </div>

                </div>
                <div className='w-[90%] md:lg:w-[30%] mx-auto md:lg:mx-0'>
                    <div className='bg-[#f4f1ff] rounded-md p-5 mb-5'>
                        <div className='mb-4'>
                            <h2 className='text-xl font-bold mb-5'>Job Details</h2>
                            <hr className='border-x-2 border-[#d1d3ff]' />
                        </div>
                        <p className='text-lg mb-3'><FontAwesomeIcon className='text-[#9873ff]' icon={faSackDollar} /><strong className='text-[#474747] ml-4'>Salary:</strong> <span className='text-[#87878b] font-medium'>{salary}</span></p>
                        <p className='text-lg mb-3'><FontAwesomeIcon className='text-[#9873ff]' icon={faBriefcase} /><strong className='text-[#474747] ml-4'>Job Title:</strong> <span className='text-[#87878b] font-medium'>{jobTitle}</span></p>
                        <div className='mb-4'>
                            <h2 className='text-xl font-bold mb-5'>Contact Information</h2>
                            <hr className='border-x-2 border-[#d1d3ff]' />
                        </div>
                        <p className='text-lg mb-3'><FontAwesomeIcon className='text-[#9873ff]' icon={faPhone} /><strong className='text-[#474747] ml-4'>Phone:</strong> <span className='text-[#87878b] font-medium'>{contactInformation.phone}</span></p>
                        <p className='text-lg mb-3'><FontAwesomeIcon className='text-[#9873ff]' icon={faEnvelope} /><strong className='text-[#474747] ml-4'>Email:</strong> <span className='text-[#87878b] font-medium'>{contactInformation.email}</span></p>
                        <p className='text-lg mb-3'><FontAwesomeIcon className='text-[#9873ff]' icon={faLocationDot} /><strong className='text-[#474747] ml-4'>Address:</strong> <span className='text-[#87878b] font-medium'>{location}</span></p>
                    </div>
                    <button className='bg-gradient-to-r from-[#7f8ffe] to-[#9873ff] px-3 py-2 text-base font-semibold text-white rounded w-full hover:bg-none hover:text-[#9873ff] hover:border-[#9873ff] hover:border-2'>Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;