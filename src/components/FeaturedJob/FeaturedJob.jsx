import React from 'react';
import { CurrencyDollarIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

const FeaturedJob = ({featuredJob}) => {
    const {id, companyLogo, jobTitle, companyName, jobType, location, salaryRange } = featuredJob;
    const navigate = useNavigate();
    return (
        <div>
            <div className='border border-gray-500 rounded p-5 mx-3 my-3'>
                <img src={companyLogo} alt="" className='h-20 w-30 mb-2' />
                <h2 className='text-2xl font-bold'>{jobTitle}</h2>
                <p className='text-gray-500 mb-3'>{companyName}</p>
                <button className='border-indigo-400 bg-white text-indigo-500 mr-3'>{jobType}</button>
                <button className='border-indigo-400 bg-white text-indigo-500 ml-3'>Fulltime</button>
                <div className='mt-3'>
                    <button onClick={() => navigate(`/job-detail/${id}`)} className='bg-purple-400 text-white'> View Details</button>
                </div>
                <div className='flex justify-start text-gray-500 mt-2'>
                    <MapPinIcon className='h-6 w-6 mt-4'></MapPinIcon> <p className='p-4'>{location}</p>
                    <CurrencyDollarIcon className='h-6 w-6 ms-3 mt-4'></CurrencyDollarIcon> <p className='p-4'>Salary: {salaryRange}</p>
                </div>
            </div>
        </div>
    );
};

export default FeaturedJob;