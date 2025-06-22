import React, { use } from 'react';
import JoinEventRow from './JoinEventRow';

const Applicationlist = ({myApplicationPromise}) => {
    const applications=use(myApplicationPromise);
    return (
        <div>
            <h3 className='text-2xl font-bold'>Event join so far:{applications.length}</h3>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>JoinEvent</th>
        <th>Date</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
{applications.map((application,index)=><JoinEventRow
key={application._id}
index={index}
application={application}

></JoinEventRow>)}
    </tbody>

  </table>
</div>
        </div>
    );
};

export default Applicationlist;