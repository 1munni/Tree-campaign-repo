import React from 'react';
import { useLoaderData } from 'react-router';
import EventsCrad from '../../Components/EventsCrad';

const UpEvents = () => {
    const events = useLoaderData();
    console.log(events);

    return (
        <section className="py-12 bg-gray-50 dark:bg-gray-900 rounded-2xl transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-2">
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-3xl text-center pb-4 transition-colors duration-300">
                    Upcoming Events
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-5">
                    {events.map(event => (
                        <EventsCrad key={event._id} events={event}></EventsCrad>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UpEvents;
