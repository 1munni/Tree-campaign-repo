import React, { use } from 'react';
import { Link, useParams } from 'react-router';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import axios from 'axios';
import Swal from 'sweetalert2';

const JoinEvents = () => {
    const {id: joinEventId}=useParams();
    const{user}=use(AuthContext);
    console.log(joinEventId, user)

const handleJoinEventSubmit=e=>{
    e.preventDefault();
    const form=e.target;
    const name=form.name.value;
    const email=form.email.value;
    const phone=form.phone.value;
    const reason=form.reason.value;
    const role=form.role.value;
    const date=form.date.value;
    console.log(name,email,phone,reason,role,date);

    const application={
        joinEventId,
        applicant:user.email,
        name,
        phone,
        role,
        date,
        reason,
    }
    axios.post('http://localhost:3000/applications',application)
    .then(res=>{
        console.log(res.data)
        if(res.data.insertedId){
            Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Your application has been submitted",
  showConfirmButton: false,
  timer: 1500
});
        }
    })

    .catch(error=>{
        console.log(error)
    })
}
    
    return (
        <div className='p-20'>
            <h2 className='font-bold text-3xl pb-10'>Join event:<Link to={`/events/${joinEventId}`}>Details</Link></h2>
 <form onSubmit={handleJoinEventSubmit}>
         <fieldset className="bg-base-200 border-base-300 rounded-box w-xs border space-y-4">
  <label className="label">Full Name</label>
  <input type="text" name='name' className="input input-bordered w-full" placeholder="Your full name" required />

  <label className="label">Email</label>
  <input type="email" name='email' className="input input-bordered w-full" placeholder="Your email address" required defaultValue={user?.email} />

  <label className="label">Phone Number</label>
  <input type="tel" name='phone' className="input input-bordered w-full" placeholder="Optional phone number" />

  <label className="label">Why do you want to join this event?</label>
  <textarea className="textarea textarea-bordered w-full" placeholder="Brief reason or motivation" name='reason' rows={3}></textarea>

  <label className="label">Preferred Role</label>
  <select name="role" className="select select-bordered w-full">
    <option>Volunteer</option>
    <option>Organizer</option>
    <option>Media Support</option>
    <option>Documentation</option>
    <option>Other</option>
  </select>

  <label className="label">Available Date(s)</label>
  <input type="date" name='date' className="input input-bordered w-full" />

  <button type="submit" className="btn btn-primary w-full mt-4">
    Join Event
  </button>
</fieldset>
 </form>

        </div>
    );
};

export default JoinEvents;