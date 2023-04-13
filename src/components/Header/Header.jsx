import './Header.css'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars4Icon, XMarkIcon } from '@heroicons/react/24/solid'


const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <div>
            <nav className='justify-between lg:flex items-center px-5'>
                <div className='flex justify-between'>
                    <h2 className='text-2xl text-purple-700 font-semibold'>work<span className="text-slate-500 font-extrabold">wise.</span></h2>
                    <div onClick={() => setOpenMenu(!openMenu)} className='mx-5 mt-2 md:hidden'>

                        {
                            openMenu ? <XMarkIcon className="h-6 w-6 text-purple-500"></XMarkIcon> :
                                <Bars4Icon className="h-6 w-6 text-purple-500"></Bars4Icon>
                        }


                    </div>
                </div>

                <div>
                    <ul className={`lg:flex pl-4 py-2 duration-500 md:hidden ${openMenu ? 'w-1/3 border border-gray-100 shadow-md' : 'hidden'}`}>
                        <li className='mr-8 p-2 font-semibold text-black'><Link to='/'>Home</Link>  </li>
                        <li className='mr-8 p-2 font-semibold text-black'><Link to='statistics'>Statistics</Link>  </li>
                        <li className='mr-8 p-2 font-semibold text-black'><Link to='applied-jobs'>Applied Jobs</Link></li>
                        <li className='mr-8 p-2 font-semibold text-black'><Link to='blog'>Blog</Link></li>
                    </ul>
                </div>

                <div>
                    <button

                        className="lg:flex bg-purple-500 text-white hover:bg-purple-700 my-2 px-6 py-4 rounded font-bold"
                    >
                        Start Applying
                    </button>
                </div>
            </nav>

        </div>
    );

};

export default Header;