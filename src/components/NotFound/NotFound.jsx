import React from 'react';

const NotFound = () => {
    return (
        <div className="w-screen h-screen flex items-center justify-center mx-auto">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-gray-800">404</h1>
                <p className="mt-4 text-xl text-gray-600">Uh-oh! It seems that you've navigated to the void.</p>
                <p className="mt-4 text-gray-500">The page you are looking for does not exist.</p>
                
            </div>
        </div>
    );
};

export default NotFound;