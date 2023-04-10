import React, { useEffect, useState } from 'react';
import JobCategory from '../JobCategory/JobCategory';

const JobCategories = () => {
    const [jobCategories, setJobCategories] = useState([]);
    useEffect(
        ()=>{
            fetch('job-categories.json')
            .then(res => res.json())
            .then(data => setJobCategories(data))
        }
    )
    return (
        <div>
            <div className='text-center'>
            <h2 className="text-3xl font-semibold mb-4">Job Categories</h2>
            <p className="text-gray-500">Tech Talent, Meet Your Perfect Match - Explore Diverse IT Job Categories at Work Wise!</p>
            <div className="container flex mx-auto py-8">
                {
                    jobCategories.map(
                        (jobCategory) => <JobCategory
                        key = {jobCategory.id}
                        jobCategory = {jobCategory}
                        >

                        </JobCategory>
                    )
                }
            </div>

            </div>
        </div>
    );
};

export default JobCategories;