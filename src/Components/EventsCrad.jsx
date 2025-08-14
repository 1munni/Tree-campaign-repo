// EventsCard.jsx
import React from 'react';
import { useNavigate } from 'react-router';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext/AuthContext';
import Swal from 'sweetalert2';

const EventsCard = ({ events }) => {
  const { _id, title, eventType, description, thumbnailUrl, location, date, createdBy } = events;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleViewDetails = () => navigate(`/events/${_id}`);
  const handleUpdate = () => {
    if (user?.email === createdBy) navigate(`/updateEvents/${_id}`);
    else Swal.fire({ title: 'Stop', text: 'You can only update your own events.', icon: 'warning' });
  };

  return (
    <div className="flex flex-col h-full bg-white dark:bg-gray-800 shadow-xl rounded-2xl overflow-hidden transition-transform hover:scale-105 hover:shadow-2xl duration-300">
      <div className="h-48 w-full overflow-hidden">
        <img src={thumbnailUrl} alt={title} className="object-cover w-full h-full" />
      </div>
      <div className="flex-1 p-6 flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{title}</h3>
          <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm">{eventType}</span>
        </div>
        <p className="text-gray-600 dark:text-gray-300 text-sm flex-1">{description}</p>
        <div className="mt-4 space-y-1 text-gray-500 dark:text-gray-400 text-sm">
          <p>📍 <span className="font-medium">{location}</span></p>
          <p>📅 <span className="font-medium">{new Date(date).toLocaleDateString()}</span></p>
        </div>
        <div className="mt-6 flex gap-3">
          <button
            onClick={handleViewDetails}
            className="flex-1 bg-green-600 hover:bg-green-700 text-white text-sm font-medium py-2 rounded-full transition-colors duration-200"
          >
            View
          </button>
          <button
            onClick={handleUpdate}
            className="flex-1 bg-green-100 hover:bg-green-200 text-green-600 text-sm font-medium py-2 rounded-full transition-colors duration-200"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventsCard;
