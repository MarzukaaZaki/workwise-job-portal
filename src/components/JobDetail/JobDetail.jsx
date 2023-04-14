import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import bannerImage from '../../assets/Images/Vector.png'
import bannerImage2 from '../../assets/Images/Vector-1.png'
import { CurrencyDollarIcon, BriefcaseIcon, PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';
import { list } from 'postcss';
import { addToDb } from '../../utilities/fakeDb';

const JobDetail = () => {
    // Collect the id of the selected job.
    const selectedJobId = useParams().id;
    const jobs = useLoaderData();
    const selectedJobData = jobs.find(job => job.id == selectedJobId);
   

    // Destructuring the selected job object
    const { jobTitle, jobDescription, jobType, educationalQualifications, experiences, workHours, jobResponsibilities, location, salaryRange, companyName, companyLogo, phone, email, address } = selectedJobData;

    // Handle the apply now button functionality

    const handleApplyToJob = id =>{
        console.log(id);
        addToDb(id);

    }

    return (

        <div className="relative text-start pe-5">
            <div className='flex'>
            <img src={bannerImage} alt="Example" className="p-4 mx-20 h-auto" />
           
            <p className="absolute mx-20 p-20 text-black text-3xl font-semibold">
                Job Details
            </p>
            <img src={bannerImage2} alt="Example" className="w-1/3 p-4 mx-20 h-auto" />
            </div>
            
            <div className='flex'>
                {/* Job Information Paragraphs */}
                <div className='mb-5 p-5 w-3/4 mx-5'>
                    <div className='mb-5'>
                        <h2 className='text-2xl font-semibold'>Job Description</h2>
                        <p>{jobDescription}</p>

                    </div>
                    <div className='mb-5'>
                        <h2 className='text-2xl font-semibold'>Job Responsibilities</h2>
                        <p>{jobResponsibilities}</p>
                    </div>
                    <div>
                        <h2 className='text-2xl font-semibold'>Educational Qualifications</h2>
                        <p>{educationalQualifications}</p>
                    </div>
                    <div>
                        <h2 className='text-2xl font-semibold'>Experience</h2>
                        <p>{experiences} years</p>
                    </div>


                </div>
                {/*Job Information Sidebar */}
                <div className='bg-purple-100 p-5 rounded mb-6 me-5'>
                    <div>
                        <h2 className='text-2xl mb-5'>Job Details</h2>
                        <hr className='border-t border-gray-400 border-solid font-bold mb-5' />

                        <p className='flex pb-3'><CurrencyDollarIcon className='h-6 w-6 text-purple-600 me-3'></CurrencyDollarIcon><span className='font-semibold pe-2'> Salary:</span>{salaryRange} </p>
                        <p className='flex pb-3'> <BriefcaseIcon className='h-6 w-6 text-purple-600 me-3'></BriefcaseIcon><span className='font-semibold pe-2'>Job Title:</span>{jobTitle}</p>
                        <p className='flex pb-3'> <ClockIcon className='h-6 w-6 text-purple-600 me-3'></ClockIcon><span className='font-semibold pe-2'>Type:</span>{jobType}, {workHours}</p>



                        <h2 className='text-2xl my-5'>Contact Information</h2>
                        <hr className='border-t border-gray-400 border-solid font-bold mb-5' />

                        <p className='flex pb-3'><PhoneIcon className='h-6 w-6 text-purple-600 me-3'></PhoneIcon><span className='font-semibold pe-2'> Call:</span>{phone} </p>
                        <p className='flex pb-3'> <EnvelopeIcon className='h-6 w-6 text-purple-600 me-3'></EnvelopeIcon><span className='font-semibold pe-2'>Mail:</span>{email}</p>
                        <p className='flex pb-3 text-start'> <MapPinIcon className='h-6 w-6 text-purple-600 me-3'></MapPinIcon><span className='font-semibold pe-2'>Address:</span>{address}</p>


                    </div>
                    <div>
                        {/* Apply Button */}
                        <button onClick={() => handleApplyToJob(selectedJobId)} className='bg-purple-500 px-6 py-4 w-full text-white mt-6'>Apply Now</button>
                    </div>

                </div>


            </div>


        </div>

    );
};

export default JobDetail;