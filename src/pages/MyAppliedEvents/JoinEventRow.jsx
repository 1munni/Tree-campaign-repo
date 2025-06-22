import React from 'react';

const JoinEventRow = ({application,index}) => {
    const{applicant,thumbnailUrl,role,reason,date,eventType}=application;
    return (
            <tr>
        <th>
          <label>
          {index+1}
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={thumbnailUrl}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{eventType}</div>
              <div className="text-sm opacity-50">{applicant}</div>
            </div>
          </div>
        </td>
        <td>
          {role}
          <br />
          <span className="badge badge-ghost badge-sm">{reason}</span>
        </td>
        <td>{date}</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
    );
};

export default JoinEventRow;