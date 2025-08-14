import React from 'react';
import tree4 from '../../assets/tree/6368342.jpg';
import tree5 from '../../assets/tree/6417852.jpg';
import tree6 from '../../assets/tree/6432892.jpg';
import tree7 from '../../assets/tree/6432897.jpg';

const galleryImages = [
  { src: tree4, alt: 'Tree Plantation 1' },
  { src: tree5, alt: 'Tree Plantation 2' },
  { src: tree6, alt: 'Tree Plantation 3' },
  { src: tree7, alt: 'Tree Plantation 4' },
];

const Gellary = () => {
  return (
    <div className="mb-20 bg-base-200 py-10 rounded-2xl ">
      <div className="container mx-auto px-4 text-center mb-8">
        <h2 className="text-5xl font-extrabold text-green-700 dark:text-green-400">
          Explore Our Happiness!
        </h2>
        <p className="mt-2 text-lg text-gray-600 dark:text-white">
          See the moments we've captured during our tree plantation campaigns.
        </p>
      </div>

      <section className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map(({ src, alt }, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-2xl"
              tabIndex={0} // makes it keyboard focusable
              aria-label={`View image: ${alt}`}
            >
              <img
                src={src}
                alt={alt}
                loading="lazy"
                className="w-full aspect-square object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Gellary;
