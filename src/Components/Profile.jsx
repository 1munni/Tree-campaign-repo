import React, { use, useContext } from 'react';
import { AuthContext } from '../context/AuthContext/AuthContext';


const Profile = () => {
  const { user } = use(AuthContext)

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <div className="flex flex-col items-center">
          <img
            className="w-24 h-24 rounded-full object-cover border-4 border-primary"
            src={user?.photoURL || 'https://i.ibb.co/ZYW3VTp/brown-brim.png'}
            alt="User avatar"
          />
          <h2 className="text-xl font-semibold mt-4">{user?.displayName || 'Anonymous User'}</h2>
          <p className="text-sm text-gray-500">{user?.email}</p>
        </div>

        <div className="mt-6">
          <p className="text-gray-600">📧 <span className="font-medium">Email:</span> {user?.email}</p>
          <p className="text-gray-600 mt-2">🆔 <span className="font-medium">UID:</span> {user?.uid}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
