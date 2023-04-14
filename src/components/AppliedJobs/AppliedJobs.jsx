import React, { useState } from 'react';
import bannerImage from '../../assets/Images/Vector.png'
import bannerImage2 from '../../assets/Images/Vector-1.png'
import { useLoaderData } from 'react-router-dom';
import AppliedJob from '../AppliedJob/AppliedJob'

const AppliedJobs = () => {
    // Collecting the applied jobs data by destructuring the value return by the loader
    const {all} = useLoaderData();
    // console.log(jobs);
    // console.log(all);

    const [filterJobs, setFilterJobs] = useState(all);
   
    return (
        <div className='w-screen min-h-screen'>
            
            <div className='flex text-center'>
                <img src={bannerImage} alt="Example" className="p-4 mx-20 h-auto" />

                <p className="absolute mx-20 p-20 text-black text-3xl font-semibold">
                    Applied Jobs
                </p>
                <img src={bannerImage2} alt="Example" className="w-1/3 p-4 mx-20 h-auto" />
            </div>
            <div className='mx-10 mt-2'>
                <p className='mb-3 text-gray-500'>Filter by:</p>
            <button onClick={() => setFilterJobs(all.filter(job => job.jobType === 'Remote'))}  className='me-4 border-purple-400 bg-white text-purple-500'>Remote </button>
            <button onClick={() => setFilterJobs(all.filter(job => job.jobType === 'Onsite'))} className='me-4 border-purple-400 bg-white text-purple-500'> Onsite</button>

            </div>
            {/* Applied Jobs */}
            <div className='mx-auto p-10'>
                {
                    filterJobs.map(appliedJob => <AppliedJob
                    key = {appliedJob.id}
                    appliedJob ={appliedJob}></AppliedJob>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;