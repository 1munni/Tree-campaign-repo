import React from 'react';
import { useNavigate } from 'react-router';

const EventsCard = ({ events }) => {
  const { _id, title, eventType, description, thumbnailUrl, location,date } = events;
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/events/${_id}`);  };

  return (
    <div className="card lg:card-side bg-white shadow-xl rounded-2xl overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-2xl duration-300">
      <figure className="w-full lg:w-1/3 h-60 overflow-hidden">
        <img
          src={thumbnailUrl}
          alt={title}
          className="object-cover w-full h-full"
        />
      </figure>

      <div className="card-body w-full lg:w-2/3 p-6">
        <div className="flex justify-between items-start mb-2">
          <h2 className="card-title text-2xl font-semibold text-gray-800">{title}</h2>
          <span className="badge badge-success text-sm">{eventType}</span>
        </div>
        
        <p className="text-gray-600 text-sm">{description}</p>

        <div className="mt-4">
          <p className="text-gray-500 text-sm">
            📍 <span className="font-medium">{location}</span>
          </p>
          <p className="text-gray-500 text-sm">
             <span className="font-medium">{date}</span>
          </p>
        </div>

        <div className="card-actions justify-end mt-6">
          <button className="btn btn-primary rounded-full px-6"
          onClick={handleViewDetails}
          
          >View Details</button>
        </div>
      </div>
    </div>
  );
};

export default EventsCard;
