import React from 'react';
import './Header.css'


const Header = () => {
    return (
        <div>
            <nav className="bg-white flex items-center justify-between px-4 py-3 shadow-sm">
                {/* Logo */}
                <div className="flex-shrink-0 mr-4">
                    <a href="#">
                        <h2 className='text-2xl text-purple-700 font-semibold'>work<span className="text-slate-500 font-extrabold">wise.</span></h2>
                    </a>
                </div>
                {/* Nav Links */}
                <ul className="flex-grow flex items-center justify-center">
                    <li className="mr-10">
                        <a href="/" className="text-black hover:text-purple-500">
                            Home
                        </a>
                    </li>
                    <li className="mr-10">
                        <a href="statistics" className="text-black hover:text-purple-500">
                            Statistics
                        </a>
                    </li>
                    <li className="mr-10">
                        <a href="applied-jobs" className="text-black hover:text-purple-500">
                            Applied Jobs
                        </a>
                    </li>
                    <li className="mr-10">
                        <a href="#" className="text-black hover:text-purple-500">
                            Blog
                        </a>
                    </li>
                </ul>
                {/* Button */}
                <div>
                    <button
                        
                        className="bg-purple-500 text-white hover:bg-purple-700 px-6 py-4 rounded-2 font-bold"
                    >
                       Start Applying 
                    </button>
                </div>
            </nav>
        </div>
    );
};

export default Header;