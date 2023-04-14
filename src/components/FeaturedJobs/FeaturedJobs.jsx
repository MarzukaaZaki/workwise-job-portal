import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import FeaturedJob from '../FeaturedJob/FeaturedJob';

const FeaturedJobs = () => {
    const jobs = useLoaderData();
    
    const [dataSize, setDataSize] = useState(4);

    const hideButton = dataSize > 4 ? 'hidden' : '';

    // Slice the jobs array
    const featuredJobs = jobs.slice(0, dataSize);
    return (
        <div>
            <div className='text-center mb-5 mt-3'>
                <h2 className='text-3xl font-semibold my-4'>Featured Jobs</h2>
                <p className='text-gray-500'>With WorkWise, you can confidently navigate the job market and find opportunities that align with your skills, interests, and career aspirations. </p>

            </div>

            <div className='md:grid lg:grid-cols-2 gap-3 mx-4'>
                {
                    featuredJobs.map(featuredJob =>
                        <FeaturedJob
                            key={featuredJob.id}
                            featuredJob={featuredJob}></FeaturedJob>
                    )
                }
            </div>
            <div className='text-center'>
                <button onClick={() => setDataSize(6)} id='btn-see-all' className={`bg-purple-500 text-white px-6 py-4 ${hideButton}`}> See More Jobs </button>
            </div>

        </div>
    );
};

export default FeaturedJobs;