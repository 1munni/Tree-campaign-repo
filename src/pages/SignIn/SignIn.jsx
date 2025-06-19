import React, { use, useState } from 'react';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import signInLottie from '../../assets/lotties/signIn (2).json'
import Lottie from 'lottie-react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router';
import SocialLogIn from '../Shared/SocialLogIn';

const SignIn = () => {
const [showPassword, setShowPassword]=useState(false);
const { signInUser } = use(AuthContext);


const handleSignIn = (e) => {
    e.preventDefault();


        const form=e.target;
     const email=form.email.value;
     const password=form.password.value;
     console.log(email,password);

signInUser(email,password)
 .then(result=>{
    console.log(result.user)
 })
.catch(error=>{
console.log(error)
})
    }


    return (
        <div className='hero bg-base-200 min-h-screen'>
        <div className='hero-content flex-col lg:flex-row-reverse'>
            <div className='text-center lg:text-left'>
                <Lottie style={{width:'500px'}} animationData={signInLottie} loop={true}></Lottie>
            </div>
                  <div className=' flex justify-center item-center p-10'>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
            <h2 className='font-semibold text-2xl text-center'>Please Sign up!</h2>
              <form onSubmit={handleSignIn} className="card-body">
                <fieldset className="fieldset">
                  {/* email */}
                  <label className="label">Email</label>
                  <input type="email"
                   className="input" 
                   placeholder="Email" 
                   name='email'
                   required />
                 
                  <div className='relative'>
                     {/* password */}
                  <label className="label">Password</label>
                  <input 
                  type={showPassword ? 'text' :'password'}
                  className="input" 
                  placeholder="Password"
                   name='password'
                   pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}" 
                   title="Must be more than 6 characters, including number, lowercase letter, uppercase letter" 
                   required />
                   <button onClick={()=>{setShowPassword(!showPassword)}}
                   className='btn btn-xs absolute top-6 right-6'>
                    
                   {
                    showPassword? <FaEyeSlash></FaEyeSlash>:
                    <FaEye/>
                   }
                    
                    </button>
          
                  </div>
                 
                  <button
                 type='submit' className="btn bg-gray-800 btn-neutral mt-4">Sign In</button>

                  
                  <p className='font-semibold text-center pt-5'>Don't have any account?{''} <Link className='text-secondary' to='/register'>Register</Link></p>
                </fieldset>
              </form>
              <SocialLogIn></SocialLogIn>
            </div>
        </div>
        </div>
     </div>
    );
};

export default SignIn;