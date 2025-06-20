import { div } from 'motion/react-client';
import React from 'react';

const Newsletter = () => {
    return (
       
<div className='pb-20'>    <section className="bg-green-50 py-12 px-6 rounded-lg max-w-xl mx-auto shadow-lg ">
      <h2 className="text-3xl font-bold text-black mb-4 text-center">
        Join Our Green Movement 🌳
      </h2>
      <p className="text-green-700 mb-6 text-center">
        Subscribe to our newsletter for updates, tree planting tips, and ways to help the planet.
      </p>
      <form className="flex flex-col sm:flex-row items-center gap-4">
        <input
          type="email"
          placeholder="Your email address"
          className="w-full px-4 py-3 rounded-md border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-600"
          required
        />
        <button
          type="submit"
          className="bg-green-700 text-white px-6 py-3 rounded-md hover:bg-green-800 transition"
        >
          Subscribe
        </button>
      </form>
    </section></div>
  );
}

export default Newsletter;