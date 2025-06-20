import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ViewDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3000/events')
      .then(res => res.json())
      .then(data => {
        const selectedEvent = data.find(item => item._id === id);
        setEvent(selectedEvent);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching event:', error);
        setLoading(false);
      });
  }, [id]);

  const handleJoin = () => {
    const joinedData = {
      eventId: event._id,
      title: event.title,
      userId: 'sample-user-id',
      joinedAt: new Date()
    };

    fetch('http://localhost:3000/joined-events', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(joinedData)
    })
      .then(res => res.json())
      .then(() => {
        alert('You successfully joined the event!');
      })
      .catch(() => {
        alert('Failed to join the event.');
      });
  };

  if (loading) {
    return <p className="text-center text-gray-600 mt-10">Loading...</p>;
  }

  if (!event) {
    return <p className="text-center text-red-500 mt-10">Event not found</p>;
  }

  return (
    <div className="max-w-3xl mx-auto mt-10 bg-white shadow-md rounded-xl overflow-hidden">
      <img
        src={event.thumbnailUrl}
        alt={event.title}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h2 className="text-3xl font-semibold text-gray-800 mb-2">{event.title}</h2>
        <p className="text-gray-600 mb-4">{event.description}</p>

        <ul className="text-gray-700 space-y-1 mb-6">
          <li><span className="font-semibold">Type:</span> {event.eventType}</li>
          <li><span className="font-semibold">Location:</span> {event.location}</li>
          {event.date && (
            <li>
              <span className="font-semibold">Date:</span>{' '}
              {new Date(event.date).toLocaleDateString()}
            </li>
          )}
          {event.createdBy && (
            <li><span className="font-semibold">Created By:</span> {event.createdBy}</li>
          )}
        </ul>

        <button
          onClick={handleJoin}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full transition"
        >
          Join Event
        </button>
      </div>
    </div>
  );
};

export default ViewDetails;
