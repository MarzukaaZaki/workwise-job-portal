import React from 'react';

const AppliedJob = ({appliedJob}) => {
    const {id, companyLogo, jobTitle, company, jobType, location, salaryRange} = appliedJob;
    return (
        <div>
            <div className='flex mx-10 my-6 justify-around'>
                {/*Company Logo */}
                <div>
                <img src={companyLogo} alt="" className='h-16' />
                </div>
                {/* Details */}
                <div className=''>
                    <h2 className='text-2xl font-bold '>{jobTitle}</h2>
                    <p className='mb-4'>{company}</p>
                    <button className='me-4 border-purple-400 bg-white text-purple-500'>{jobType}</button>
                    <button className='me-4 border-purple-400 bg-white text-purple-500'>Fulltime</button>
                </div>
                {/* View Details Button */}
                <div className='me-0'>
                    <button className='me-4 bg-purple-500 text-white'>View Details</button>
                </div>
            </div>
        </div>
    );
};

export default AppliedJob;