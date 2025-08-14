import React from 'react';
import { FaLeaf, FaHandshake, FaGlobe, FaSeedling, FaUsers, FaHeart } from 'react-icons/fa';
import { Link } from 'react-router';

const AboutUs = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-16 md:py-24 transition-colors duration-300 rounded-3xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero Section */}
        <div className="text-center mb-16">
          <p className="text-lg font-semibold text-green-600 dark:text-green-400 uppercase tracking-wider">
            Our Story, Our Mission
          </p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
            Nurturing a Greener Planet
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            At Planty, our journey began with a simple belief: that every single tree planted is a powerful step towards a healthier, more sustainable world.
          </p>
        </div>

        {/* Mission & Vision Section */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 mb-16">
          {/* Mission Card */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-3xl font-bold text-green-700 dark:text-green-400 mb-4 flex items-center">
              <FaLeaf className="mr-4 text-4xl text-green-600 dark:text-green-500" />
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Our mission is to empower individuals and communities to combat deforestation and climate change through accessible, effective, and collaborative tree planting campaigns. We believe in harnessing the power of collective action to create a lasting, positive impact on our planet.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-3xl font-bold text-green-700 dark:text-green-400 mb-4 flex items-center">
              <FaGlobe className="mr-4 text-4xl text-green-600 dark:text-green-500" />
              Our Vision
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              We envision a world where lush forests thrive, biodiversity is restored, and communities are educated and engaged in environmental stewardship. We strive to be a global platform that connects passionate planters with critical reforestation projects, one tree at a time.
            </p>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-12">
            Our Core Values
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md transition-transform duration-300 hover:scale-105">
              <FaHandshake className="text-green-600 dark:text-green-400 text-5xl mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Community</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                Building strong partnerships and fostering a sense of shared purpose.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md transition-transform duration-300 hover:scale-105">
              <FaSeedling className="text-green-600 dark:text-green-400 text-5xl mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Growth</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                Committing to personal and planetary growth, one tree at a time.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md transition-transform duration-300 hover:scale-105">
              <FaUsers className="text-green-600 dark:text-green-400 text-5xl mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Empowerment</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                Giving everyone the tools and opportunities to make a real impact.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md transition-transform duration-300 hover:scale-105">
              <FaHeart className="text-green-600 dark:text-green-400 text-5xl mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Passion</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                Driving our work with a deep love and respect for nature and all life.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-green-700 dark:bg-green-800 text-white p-10 md:p-16 rounded-3xl shadow-xl">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-4">
            Join Our Movement Today
          </h2>
          <p className="text-lg font-medium max-w-2xl mx-auto mb-8">
            Whether you are a seasoned environmentalist or just starting out, there's a place for you to grow with us.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/upEvents" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-green-700 bg-white hover:bg-gray-100 transition duration-300">
              View Upcoming Events
            </Link>
            <Link to="/register" className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-base font-medium rounded-full shadow-lg text-white hover:bg-white hover:text-green-700 transition duration-300">
              Register Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;