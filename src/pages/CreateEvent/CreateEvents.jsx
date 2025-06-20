import React, { use, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const CreateEvents = () => {
  const { currentUser } = use(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    eventType: '',
    thumbnailUrl: '',
    location: '',
    date: null,
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, date });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  // Validate date
  if (!formData.date || formData.date < new Date()) {
    Swal.fire({
      title: "Invalid Date",
      text: "Please select a future date.",
      icon: "warning",
    });
    return;
  }

  const eventData = {
    ...formData,
    date: formData.date.toISOString(), // Convert Date object to string
    createdBy: currentUser?.email || 'unknown',
  };

  try {
    const res = await fetch('http://localhost:3000/events', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(eventData), 
    });

    const data = await res.json();

    if (data.insertedId) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Event created successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      setTimeout(() => navigate('/upEvents'), 1500);
    }
  } catch (err) {
    console.error("Event creation failed:", err);
  }
};




  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-10">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">Create an Event</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Organize a Tree Plantation Drive to promote environmental sustainability and community engagement.
            Encourage participants to plant trees and contribute to a greener future.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Title</label>
              <input
                name="title"
                type="text"
                className="input input-bordered w-full"
                placeholder="Event title"
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">Event Type</label>
              <select
                name="eventType"
                className="select select-bordered w-full"
                onChange={handleChange}
                required
              >
                <option value="">Select type</option>
                <option value="Cleanup">Cleanup</option>
                <option value="Plantation">Plantation</option>
                <option value="Donation">Donation</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-gray-700 font-medium mb-1">Description</label>
              <textarea
                name="description"
                className="textarea textarea-bordered w-full"
                rows="4"
                placeholder="Describe the event..."
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">Thumbnail Image URL</label>
              <input
                name="thumbnailUrl"
                type="text"
                className="input input-bordered w-full"
                placeholder="https://example.com/image.jpg"
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">Location</label>
              <input
                name="location"
                type="text"
                className="input input-bordered w-full"
                placeholder="City or Venue"
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">Event Date</label>
              <DatePicker
                selected={formData.date}
                onChange={handleDateChange}
                className="input input-bordered w-full"
                minDate={new Date()}
                placeholderText="Select a future date"
                dateFormat="yyyy/MM/dd"
                required
              />
            </div>
          </div>

          <div className="text-center mt-8">
            <button type="submit" className="btn btn-primary px-8 py-2 text-lg shadow-md hover:scale-105 transition-transform">
              Create Event
            </button>
          </div>


        </form>
      </div>
    </div>
  );
};

export default CreateEvents;
