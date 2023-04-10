import React from 'react';
import pic from '../../assets/Images/woman.png'
const HomeBanner = () => {
    return (
        <div className="bg-indigo-50 py-16 mb-10">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap items-center">
                    {/* Banner Text */}
                    <div className="w-full md:w-1/2 mt-8 md:mt-0 pl-0 md:pl-12">
                        <h1 className="text-4xl md:text-5xl text-black font-bold mb-4">Your Career</h1>
                        <h1 className="text-4xl md:text-5xl text-black font-bold mb-4">Your Way</h1>
                        <h1 className="text-2xl md:text-5xl text-purple-500 font-bold mb-4">Work Wise Today</h1>
                        <p className="text-gray-500 leading-loose mb-5">
                            Welcome to WorkWise, the ultimate job portal that helps you find your perfect match in the professional world. 
                            Our cutting-edge platform is designed to streamline the job search process, providing you with a personalized and intuitive experience. 
                        </p>
                        <button className="bg-purple-600 text-white px-6 py-4">Get Started</button>
                    </div>
                    {/* Banner Image */}
                    <div className="w-full md:w-1/2">
                        <img
                            src={pic}
                            alt="Banner Image"
                            className="w-full h-auto rounded-md"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;