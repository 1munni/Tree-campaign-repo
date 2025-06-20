import React from 'react';
import { useLoaderData } from 'react-router';
import EventsCrad from '../../Components/EventsCrad';

const UpEvents = () => {
    const events=useLoaderData();
    console.log(events);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 p-5'>
           {events.map(events=><EventsCrad key={events._id} events={events}></EventsCrad>)}
        </div>
    );
};

export default UpEvents;