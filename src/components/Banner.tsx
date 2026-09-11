import React from 'react';
import Banner from "../assets/banner-stack.png"

const Hero = () => {
    return (
        <div className='flex justify-cente container mx-auto'>
            <div className='w-[60%]'>
            <p className="text-7xl font-bold leading-tight text-slate-900 mt-16">Build Your Ideal
                <span className="block bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                    Development Stack</span></p>


            <p className="mt-6 max-w-lg text-xl text-gray-500">
              Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
            </p>


              <div className="mt-8 flex gap-3">

              <button className="rounded-md bg-gradient-to-r from-orange-500 to-pink-500 px-5 py-3 text-sm font-medium text-white">
                Explore Technologies
              </button>

              <button className="rounded-md border border-gray-200 px-6 py-3 text-sm text-gray-600">
                Learn More
              </button>

            </div>

            </div>
        
            <div className='w-[40%]'>
                <img src={Banner} alt="" />
            </div>

        </div>
        
    );
};

export default Hero;