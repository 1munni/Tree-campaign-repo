import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const UpdateEvents = () => {
 const {_id,title,description,eventType,thumbnailUrl,location,date,createdBy}=useLoaderData();

   const [formData, setFormData] = useState({
  title,
  description,
  eventType,
  thumbnailUrl,
  location,
  date: date ? new Date(date) : null,
});

    const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, date });
  };
    const handleUpdateEvent = (e) => {
  e.preventDefault();
  const form=e.target;
  const formData=new FormData(form);
  const updatedEvents=Object.fromEntries(formData.entries())
  console.log(updatedEvents);

  //send updated events
  fetch(`http://localhost:3000/events/${_id}`,{
    method:'PUT',
    headers:{
        'content-type':'application/json'
    },
    body:JSON.stringify(updatedEvents)
  })
  .then(res=>res.json())
  .then(data=>{
   if(data.modifiedCount){
    Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Event Updated successfully",
            showConfirmButton: false,
            timer: 1500,
          });
   }
  })

}
    return (
        <div>
       <div className="min-h-screen bg-gray-50 py-10 px-4">
         <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-10">
           <div className="text-center mb-10">
             <h2 className="text-4xl font-bold text-gray-800 mb-2">Update your Event</h2>
           </div>
   
           <form onSubmit={handleUpdateEvent} className="space-y-6">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div>
                 <label className="block text-gray-700 font-medium mb-1">Title</label>
                 <input
                   name="title"
                   defaultValue={title}
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
                   defaultValue={eventType}
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
                  defaultValue={description}
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
                   defaultValue={thumbnailUrl}
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
                   defaultValue={location}
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
                 Update Event
               </button>
             </div>
   
   
           </form>
         </div>
       </div>
        </div>
    );
};

export default UpdateEvents;