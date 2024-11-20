import React from 'react';

const Login = () => {
    return (
        <div>
            {/* ----login--- */}
            <div className='flex flex-col justify-center'>
                <h1 className='text-2xl font-semibold text-center'>Login</h1>

                <div className="max-w-md w-full mx-auto p-6 space-y-6">
  <div className="space-y-2 grid gap-2 relative">
    <label 
      htmlFor="username" 
      className="absolute -top-1 left-2 px-1 bg-background text-sm font-medium text-gray-700 dark:text-gray-300 z-10"
    >
      Email
    </label>
    <input
      id="username"
      placeholder="Enter your email"
      className="w-full px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none  focus:ring-gray-500 transition duration-150 ease-in-out"
    />
  </div>
  <div className="space-y-2 grid gap-2 relative">
    <label 
      htmlFor="username" 
      className="absolute -top-1 left-2 px-1 bg-background text-sm font-medium text-gray-700 dark:text-gray-300 z-10"
    >
      Password
    </label>
    <input
      id="username"
      placeholder="Enter your password"
      className="w-full px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none  focus:ring-gray-500 transition duration-150 ease-in-out"
    />
  </div>

  
</div>

            </div>
        </div>
    );
};

export default Login;