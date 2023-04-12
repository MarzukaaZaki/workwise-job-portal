import React from 'react';
import bannerImage from '../../assets/Images/Vector.png'
import bannerImage2 from '../../assets/Images/Vector-1.png'
import { getLocalStorageData } from '../../utilities/fakeDb';
import { useLoaderData } from 'react-router-dom';
import AppliedJob from '../AppliedJob/AppliedJob'

const AppliedJobs = () => {
    const {all, jobs} = useLoaderData();
    // console.log(jobs);
    // console.log(all);
   
    return (
        <div>
            <div className='flex'>
                <img src={bannerImage} alt="Example" className="p-4 mx-20 h-auto" />

                <p className="absolute mx-20 p-20 text-black text-3xl font-semibold">
                    Applied Jobs
                </p>
                <img src={bannerImage2} alt="Example" className="w-1/3 p-4 mx-20 h-auto" />
            </div>

            {/* Applied Jobs */}
            <div className='w-full'>
                {
                    all.map(appliedJob => <AppliedJob
                    key = {appliedJob.id}
                    appliedJob ={appliedJob}></AppliedJob>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;