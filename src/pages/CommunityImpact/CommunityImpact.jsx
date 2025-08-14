import React, { useRef, useEffect } from 'react';
import CountUp from 'react-countup';
import { FaTree, FaUsers, FaGlobe, FaLeaf } from 'react-icons/fa';

const stats = [
  { icon: <FaTree className="text-green-600" />, label: 'Trees Planted', end: 12500 },
  { icon: <FaUsers className="text-green-600" />, label: 'Volunteers', end: 3200 },
  { icon: <FaGlobe className="text-green-600" />, label: 'Regions Covered', end: 45 },
  { icon: <FaLeaf className="text-green-600" />, label: 'CO₂ Offset (tons)', end: 850 },
];

const ImpactStats = () => {
  const sectionRef = useRef(null);
  const [viewed, setViewed] = React.useState(false);

  // Trigger count-up when section scrolls into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setViewed(true),
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="dark:bg-gray-900 py-10 mb-20 rounded-2xl bg-green-50"
    >
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-10">
          Our Impact So Far
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map(({ icon, label, end }, i) => (
            <div
              key={i}
              className="flex flex-col items-center space-y-2 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow"
            >
              <div className="text-4xl">{icon}</div>
              <div className="text-3xl font-semibold text-green-600">
                {viewed ? <CountUp end={end} duration={2.5} /> : '0'}
              </div>
              <p className="text-gray-600 dark:text-gray-300">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
