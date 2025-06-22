import React from 'react';

const JoinEventRow = ({application,index}) => {
    const{applicant,name,phone,role,reason,date}=application;
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
                  src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{name}</div>
              <div className="text-sm opacity-50">{phone}</div>
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