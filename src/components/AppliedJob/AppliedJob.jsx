import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CurrencyDollarIcon, MapPinIcon } from '@heroicons/react/24/outline';

const AppliedJob = ({ appliedJob }) => {
    const { id, companyLogo, jobTitle, company, jobType, location, salaryRange, workHours } = appliedJob;
    const navigate = useNavigate();
    return (
        <div>
            <div className='flex mx-10 my-6 justify-around px-2 py-5 border border-gray-400 rounded'>
                {/*Company Logo */}
                <div>
                    <img src={companyLogo} alt="" className='h-16 my-5' />
                </div>
                {/* Details */}
                <div className='mx-0'>
                    <h2 className='text-2xl font-bold '>{jobTitle}</h2>
                    <p className='mb-4'>{company}</p>
                    <div className='flex justify-between text-gray-500 mb-5'>

                        <p> <MapPinIcon className='h-6 w-6 mt-4'></MapPinIcon> {location}</p>
                        <span><CurrencyDollarIcon className='h-6 w-6 mt-5'></CurrencyDollarIcon><p> {salaryRange}</p></span>


                    </div>

                    <button className='me-4 border-purple-400 bg-white text-purple-500'>{jobType}</button>
                    <button className='me-4 border-purple-400 bg-white text-purple-500'>{workHours}</button>
                </div>
                {/* View Details Button */}
                <div className='me-0'>
                    <button onClick={() => navigate(`/job-detail/${id}`)} className='me-4 bg-purple-500 text-white'>View Details</button>
                </div>
            </div>
        </div>
    );
};

export default AppliedJob;