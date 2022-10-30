import React from 'react';

const Welcome = () => {
  return (
    <div className="mb-16">
      <div className="bg-gray-100">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              <span className="relative inline-block">
                <span className="relative">Welcome</span>
              </span>{' '}
              To Dashboard
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Navigate as much as possible since no reload is required.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
