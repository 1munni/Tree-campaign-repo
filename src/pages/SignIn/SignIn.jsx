import React, { use, useState } from 'react';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import signInLottie from '../../assets/lotties/signIn (2).json';
import Lottie from 'lottie-react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router';
import SocialLogIn from '../Shared/SocialLogIn';

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { signInUser } = use(AuthContext);
   const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';


  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(from, { replace: true });

        const signInInfo={
          email,
          lastSignInTime:result.user?.metadata?.lastSignInTime
        }
        // update last sign in to the database
fetch('http://localhost:3000/users',{
  method:'PATCH',
  headers:{
    'content-type':'application/json'
  },
  body:JSON.stringify(signInInfo)
})
.then(res=>res.json())
.then(data=>{
console.log('after update patch', data)
})
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen px-4">
      <div className="hero-content flex-col-reverse lg:flex-row-reverse gap-10">
        {/* Lottie Section */}
        <div className="w-full max-w-md mx-auto">
          <Lottie animationData={signInLottie} loop={true} />
        </div>

        {/* Sign In Form */}
        <div className="flex justify-center items-center w-full">
          <div className="card bg-base-100 w-full max-w-sm shadow-2xl p-6">
            <h2 className="text-2xl font-semibold text-center mb-4">Please Sign In</h2>

            <form onSubmit={handleSignIn} className="space-y-3">
              <fieldset className="fieldset space-y-2">
                {/* Email */}
                <div>
                  <label className="label">Email</label>
                  <input
                    type="email"
                    className="input input-bordered w-full"
                    placeholder="Email"
                    name="email"
                    required
                  />
                </div>

                {/* Password */}
                <div className="relative">
                  <label className="label">Password</label>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    className="input input-bordered w-full"
                    placeholder="Password"
                    name="password"
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                    title="Must be more than 6 characters, including number, lowercase letter, uppercase letter"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="btn btn-xs absolute top-9 right-3"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>

                {/* Submit */}
                <button type="submit" className="btn btn-neutral w-full bg-gray-800 mt-3">
                  Sign In
                </button>

                <p className="text-center text-sm pt-3">
                  Don’t have an account?{' '}
                  <Link className="text-secondary font-semibold" to="/register">
                    Register
                  </Link>
                </p>
              </fieldset>
            </form>

            <SocialLogIn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
