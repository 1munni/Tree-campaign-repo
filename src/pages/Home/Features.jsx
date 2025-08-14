import React from 'react';
import tree3 from '../../assets/tree/6441868.jpg'

const Features = () => {
    return (
<section className="bg-white text-gray-800 mb-20 rounded-2xl">
  <div className="container mx-auto p-4 my-6 space-y-2 text-center">
     <h2 className="text-5xl font-extrabold text-green-700 dark:text-green-400">
          Dream to empower the earth
        </h2>

    <p className="text-gray-600">Join us in planting trees for a greener future</p>
  </div>
  <div className="container flex flex-col-reverse mx-auto lg:flex-row">
    <div className="flex flex-col px-6 py-8 space-y-6 sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 bg-green-100 text-green-900 rounded-tl-2xl rounded-bl-2xl">
      <div className="flex space-x-2 sm:space-x-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 flex-shrink-0 text-green-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 2C8 7 4 9 4 13a4 4 0 008 0 4 4 0 008 0c0-4-4-6-8-11z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14v8" />
        </svg>
        <div className="space-y-2">
          <p className="text-lg font-medium leading-snug">
            Planting Healthy Trees
          </p>
          <p className="leading-snug">
            We focus on planting native trees that support local ecosystems and
            biodiversity.
          </p>
        </div>
      </div>

      <div className="flex space-x-2 sm:space-x-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 flex-shrink-0 text-green-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <circle
            cx="12"
            cy="12"
            r="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path strokeLinecap="round" strokeLinejoin="round" d="M2 12h20M12 2c2.5 5 2.5 15 0 20" />
        </svg>
        <div className="space-y-2">
          <p className="text-lg font-medium leading-snug">
            Fighting Climate Change
          </p>
          <p className="leading-snug">
            Our trees absorb carbon dioxide to reduce greenhouse gases and
            cool the planet.
          </p>
        </div>
      </div>

      <div className="flex space-x-2 sm:space-x-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 flex-shrink-0 text-green-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21c-4.97-4.97-8-8-8-11a5 5 0 0110 0 5 5 0 0110 0c0 3-3.03 6.03-8 11z"
          />
        </svg>
        <div className="space-y-2">
          <p className="text-lg font-medium leading-snug">
            Caring for Our Future
          </p>
          <p className="leading-snug">
            We nurture every sapling to ensure they grow strong and healthy for
            generations.
          </p>
        </div>
      </div>
    </div>

    <div className="lg:w-1/2 xl:w-3/5 bg-gray-100 rounded-tr-2xl rounded-br-2xl  ">
      <div className="flex items-center justify-center p-4 md:p-8 lg:p-12 ">
        <img
          src={tree3}
          className="rounded-lg shadow-lg aspect-video sm:min-h-96 object-cover border-s-6 border-b-6 rounded-t-[40px]  rounded-br-[40px]"
        />
      </div>
    </div>
  </div>
</section>



    );
};

export default Features;