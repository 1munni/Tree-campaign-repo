import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import EventsCard from '../../Components/EventsCrad';


const ManageEvents = () => {
  const { user } = useContext(AuthContext);
  const [myEvents, setMyEvents] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/events?createdBy=${user.email}`)
        .then(res => res.json())
        .then(data => setMyEvents(data))
        .catch(err => console.error('Failed to fetch user events:', err));
    }
  }, [user]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">My Created Events</h2>
      {myEvents.length === 0 ? (
        <p>No events found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {myEvents.map(event => (
            <EventsCard key={event._id} events={event} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ManageEvents;
