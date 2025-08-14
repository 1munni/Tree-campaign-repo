import React from 'react';
import { FaLeaf, FaHandshake, FaGlobe, FaSeedling } from 'react-icons/fa';
import { Link } from 'react-router';

const AboutUs = () => {
    return (
        <div className="py-12 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-2xl">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Hero Section */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-green-700 dark:text-green-400">
                        Our Story: Nurturing a Greener Planet
                    </h1>
                    <p className="mt-4 text-lg max-w-2xl mx-auto">
                        At Planty, our journey began with a simple belief: that every single tree planted is a step towards a healthier, more sustainable world.
                    </p>
                </div>

                {/* Mission & Vision Section */}
                <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
                            <FaLeaf className="mr-3 text-green-600" />
                            Our Mission
                        </h2>
                        <p className="text-lg">
                            Our mission is to empower individuals and communities to combat deforestation and climate change through accessible, effective, and collaborative tree planting campaigns. We believe in harnessing the power of collective action to create a lasting, positive impact on our planet.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
                            <FaGlobe className="mr-3 text-green-600" />
                            Our Vision
                        </h2>
                        <p className="text-lg">
                            We envision a world where lush forests thrive, biodiversity is restored, and communities are educated and engaged in environmental stewardship. We strive to be a global platform that connects passionate planters with critical reforestation projects, one tree at a time.
                        </p>
                    </div>
                </div>

                {/* Our Impact Section (Dynamic) */}
                <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg mb-12 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                        Our Impact So Far
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-6 border rounded-lg bg-gray-100 dark:bg-gray-600">
                            <p className="text-5xl font-extrabold text-green-600">25,000+</p>
                            <p className="mt-2 text-xl font-semibold">Trees Planted</p>
                        </div>
                        <div className="p-6 border rounded-lg bg-gray-100 dark:bg-gray-600">
                            <p className="text-5xl font-extrabold text-green-600">150+</p>
                            <p className="mt-2 text-xl font-semibold">Campaigns Launched</p>
                        </div>
                        <div className="p-6 border rounded-lg bg-gray-100 dark:bg-gray-600">
                            <p className="text-5xl font-extrabold text-green-600">1,200+</p>
                            <p className="mt-2 text-xl font-semibold">Volunteers Mobilized</p>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                        Join Our Mission
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto mb-6">
                        Whether you are a seasoned environmentalist or just starting out, there's a place for you.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link to="/upEvents" className="btn btn-primary bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition duration-300">
                            View Upcoming Events
                        </Link>
                        <Link to="/register" className="btn btn-secondary bg-gray-700 hover:bg-gray-600 text-white dark:text-gray-200 font-bold py-3 px-8 rounded-full transition duration-300">
                            Register Now
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AboutUs;