import React from 'react';

const Blog = () => {
    return (
        <div className='text-center w-screen mt-10'>
            <h2 className='text-2xl font-bold mb-3'>1. When to use context API</h2>
            <p className='mx-10 p-5 rounded border border-gray-400'>Context API is used to manage and share states among components in a react app. It provides an easy way of passing data. We use it when we need to -
                <ul>
                    <li>Style a component</li>
                    <li>Authentication management where there is an interaction with the user. It also helps to manage user data in the process.</li>
                    <li>Manage Configuration</li>
                    <li>Manage current language and localization settings of an application</li>
                </ul>
            </p>

            <h2 className='text-2xl font-bold mt-10'>2. What is Custom Hook?</h2>
            <p className='mx-10 p-5 rounded border border-gray-400'>Hooks are special reusable functions. Custom hooks are hooks that the user can make on his own to add unique features to his app. Custom hooks are used when no built in hooks are available for a particular task. They are usually composed of built-in hooks or other custom hooks.Like react hooks their name must begin with "use".</p>

            <h2 className='text-2xl font-bold mt-10'>3. What is useRef?</h2>
            <p className='mx-10 p-5 rounded border border-gray-400'>The useRef hook allows to retain values across renders. It is also used to store values that when changed does not require re-render. It can be used to access the DOM directly. It does so by creating a DOM element in the functional component. The hook is initialized with a value passed as an argument.</p>

            <h2 className='text-2xl font-bold mt-10'>4. What is useMemo?</h2>
            <p className='mx-10 p-5 rounded border border-gray-400'>useMemo is a built-in hook in React that allows you to memoize the result of a computation and recompute it only when its dependencies change. It helps optimize performance by preventing unnecessary recomputations of expensive calculations or operations in functional components. It is used for functions whose execution cost is high. It takes as input a callback function and a dependency array.</p>
           
           
        </div>
    );
};

export default Blog;