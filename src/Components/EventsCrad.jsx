import React, { use, useContext } from 'react';
import { useNavigate } from 'react-router';
import { AuthContext } from '../context/AuthContext/AuthContext';
import Swal from 'sweetalert2';


const EventsCard = ({ events }) => {
  const { _id, title, eventType, description, thumbnailUrl, location, date, createdBy } = events;
  const { user } = use(AuthContext)
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/events/${_id}`);
  };

  const handleUpdate = () => {
    if (user?.email === createdBy) {
      navigate(`/updateEvents/${_id}`);
    } else {
      Swal.fire({
            title: "stop",
            text: "You are not eligible to update try your won events.",
            icon: "warning",
          });
    }
  };

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
            📅 <span className="font-medium">{new Date(date).toLocaleDateString()}</span>
          </p>
        </div>

        <div className="card-actions justify-end items-center mt-6 flex gap-2">
          <button
            className="btn btn-primary rounded-full px-4"
            onClick={handleViewDetails}
          >
            View
          </button>
          <button
            className="btn btn-secondary rounded-full px-4"
            onClick={handleUpdate}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventsCard;
