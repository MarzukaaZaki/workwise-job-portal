import React from 'react';

const JobCategory = ({ jobCategory }) => {
    const { name, jobsAvailable, icon } = jobCategory;
    return (
        <div className='bg-indigo-50 rounded shadow-md'>
            <img src={icon} alt="Card Icon" className="w-16 h-16 mb-4 mx-auto" />
            <h3 className="text-lg font-bold mb-2">{name}</h3>
            <p className="text-gray-500 text-sm text-center">{jobsAvailable} Jobs</p>
        </div>
    );
};

export default JobCategory;