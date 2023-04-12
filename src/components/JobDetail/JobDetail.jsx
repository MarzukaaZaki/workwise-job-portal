import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import bannerImage from '../../assets/Images/Vector.png'
import { CheckIcon, CurrencyDollarIcon, BriefcaseIcon, PhoneIcon, EnvelopeIcon,MapPinIcon } from '@heroicons/react/24/outline';
import { list } from 'postcss';

const JobDetail = () => {

    const selectedJobId = useParams().id;
    // console.log(selectedJobId);
    const jobs = useLoaderData();
    console.log(jobs);
    const selectedJobData = jobs.find(job => job.id == selectedJobId);
    console.log(selectedJobData);

    // Destructuring the selected job object
    const { jobTitle, jobDescription, jobType, educationalQualifications, experiences, jobResponsibilities, location, salaryRange, companyName, companyLogo, phone, email, address } = selectedJobData;


    return (

        <div className="relative text-start pe-5">
            <img src={bannerImage} alt="Example" className="w-1/2 h-auto" />
            <p className="absolute top-8 left-1/2 mb-4 ml-4 text-black text-3xl font-semibold">
                Job Details
            </p>
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


                </div>
                {/*Job Information Sidebar */}
                <div className='bg-purple-100 p-5 rounded mb-6 me-5'>
                    <div>
                        <h2 className='text-2xl mb-5'>Job Details</h2>
                        <hr className='border-t border-gray-400 border-solid font-bold mb-5'/>
                        
                        <p className='flex pb-3'><CurrencyDollarIcon className='h-6 w-6 text-purple-600 me-3'></CurrencyDollarIcon><span className='font-semibold pe-2'> Salary:</span>{salaryRange} </p>
                        <p className='flex pb-3'> <BriefcaseIcon className='h-6 w-6 text-purple-600 me-3'></BriefcaseIcon><span className='font-semibold pe-2'>Job Title:</span>{jobTitle}</p>

                        
                        
                        <h2 className='text-2xl my-5'>Contact Information</h2>
                        <hr className='border-t border-gray-400 border-solid font-bold mb-5'/>

                        <p className='flex pb-3'><PhoneIcon className='h-6 w-6 text-purple-600 me-3'></PhoneIcon><span className='font-semibold pe-2'> Call:</span>{phone} </p>
                        <p className='flex pb-3'> <EnvelopeIcon className='h-6 w-6 text-purple-600 me-3'></EnvelopeIcon><span className='font-semibold pe-2'>Mail:</span>{email}</p>
                        <p className='flex pb-3 text-start'> <MapPinIcon className='h-6 w-6 text-purple-600 me-3'></MapPinIcon><span className='font-semibold pe-2'>Address:</span>{address}</p>
                      

                    </div>
                    <div>
                    <button className='bg-purple-500 px-6 py-4 w-full text-white mt-6'>Apply Now</button>
                </div>

                </div>
                

            </div>
            

        </div>

    );
};

export default JobDetail;