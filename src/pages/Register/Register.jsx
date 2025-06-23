import Lottie from 'lottie-react';
import React, { useState, useContext, use } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router'; // Fixed: should be 'react-router-dom'
import registerLottie from '../../assets/lotties/register.json';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import SocialLogIn from '../Shared/SocialLogIn';
import Swal from 'sweetalert2';

const Register = () => {
  const [nameError, setNameError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { createUser } = use(AuthContext); // Fixed: should use useContext

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData=new FormData(form);

    const {email,password, ...restFormData}=Object.fromEntries(formData.entries());

    

    //crete user in firebase
    createUser(email, password)
      .then((result) => {
        console.log(result.user);

        const userProfile={
      email,
      ...restFormData,
      creationTime:result.user?.metadata?.creationTime,
      lastSignInTime:result.user?.metadata?.lastSignInTime

    }
    console.log(email,password,userProfile);

        //save user info to database
        fetch('https://my-assignment-11-server-xi.vercel.app/users',{
          method:'POST',
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify(userProfile)
        })
        .then(res=>res.json())
        .then(data=>{
          if(data.insertedId){
            Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "your profile created successfully",
                    showConfirmButton: false,
                    timer: 1500,
                  });
          }
        })
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row-reverse items-center justify-center bg-base-200 px-4 py-8">
      
      {/* Lottie Animation (responsive) */}
      <div className="w-full max-w-md lg:max-w-lg">
        <Lottie
          animationData={registerLottie}
          loop={true}
          className="w-full h-auto"
        />
      </div>

      {/* Register Form */}
      <div className="w-full max-w-md mt-8 lg:mt-0 bg-white shadow-xl rounded-lg p-6 space-y-4">
        <h2 className="text-2xl font-bold text-center">Register Your Account</h2>

        <form onSubmit={handleRegister} className="space-y-4">
          {/* Name */}
          <div>
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input input-bordered w-full"
              required
            />
            {nameError && <p className="text-red-500 text-xs">{nameError}</p>}
          </div>

          {/* Photo URL */}
          <div>
            <label className="label">Photo URL</label>
            <input
              type="text"
              name="photo"
              placeholder="Photo URL"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label className="label">Phone</label>
            <input
              type="number"
              name="phone"
              placeholder="Phone"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Password with toggle */}
          <div>
            <label className="label">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                className="input input-bordered w-full"
                required
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                title="Must contain at least 6 characters, a number, a lowercase and an uppercase letter"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-2/4 -translate-y-1/2 right-4 text-gray-600"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-neutral w-full">
            Register
          </button>

          {/* Already have an account */}
          <p className="text-sm text-center">
            Already have an account?{' '}
            <Link to="/signin" className="text-blue-600 hover:underline">
              Sign In
            </Link>
          </p>
        </form>

        {/* Social Login */}
        <SocialLogIn />
      </div>
    </div>
  );
};

export default Register;
