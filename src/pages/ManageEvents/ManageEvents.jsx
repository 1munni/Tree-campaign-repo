import React, { useContext } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import EventsCard from '../../Components/EventsCrad';
import Loading from '../../Components/Loading';

const ManageEvents = () => {
  const allEvents = useLoaderData();
  const { user, loading } = useContext(AuthContext);

  // 1) Show loading spinner if auth is still loading
  if (loading) {
    return <Loading />;
  }

  // 2) Require login
  if (!user) {
    return (
      <div className="text-center mt-10 text-red-600">
        You must be logged in to view your events.
      </div>
    );
  }

  // 3) Filter events by logged-in user's email (case-insensitive)
  const myEvents = Array.isArray(allEvents)
  ? allEvents.filter(event => event.
createdBy === user.email)
  : [];

  // 4) Empty state
  if (myEvents.length === 0) {
    return (
      <div className="text-center mt-10 text-gray-600">
        You haven’t created any events yet.
      </div>
    );
  }

  // 5) Render grid of user-created events
  return (
    <div className="py-10 max-w-7xl mx-auto">
      <h2 className="text-3xl font-semibold mb-6 text-center">
        My Events ({myEvents.length})
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {myEvents.map(event => (
          <EventsCard
            key={event._id}
            events={event}
            showActions={true}
          />
        ))}
      </div>
    </div>
  );
};

export default ManageEvents;
