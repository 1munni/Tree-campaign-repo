import Lottie from 'lottie-react';
import React, { use,  useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router';
import registerLottie from '../../assets/lotties/register.json'
import { AuthContext } from '../../context/AuthContext/AuthContext';
import SocialLogIn from '../Shared/SocialLogIn';

const Register = () => {
    const [nameError, setNameError]=useState('');
const [showPassword, setShowPassword]=useState(false);
 const { createUser } = use(AuthContext);

const handleRegister = (e) => {
    e.preventDefault();


        const form=e.target;
     const email=form.email.value;
     const password=form.password.value;
     console.log(email,password);

 createUser(email,password)
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
                <Lottie style={{width:'500px'}} animationData={registerLottie} loop={true}></Lottie>
            </div>
                  <div className=' flex justify-center item-center p-10'>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
            <h2 className='font-semibold text-2xl text-center'>Register Your Account</h2>
              <form onSubmit={handleRegister} className="card-body">
                <fieldset className="fieldset">
                    {/* name */}
                  <label className="label">Name</label>
                  <input 
                  type="text"
                   className="input" 
                   placeholder="Name"
                    name='name'
                    required/>
                    {nameError && <p className='text-red-400 text-xs'>{nameError}</p>}
                  {/* (photo-url) */}
                  <label className="label">Photo Url</label>
                  <input 
                  type="text"
                   className="input"
                    placeholder="Photo Url" 
                    name='photo'
                    required/>
                  {/* (phone number) */}
                  <label className="label">Phone</label>
                  <input 
                  type="number"
                   className="input"
                    placeholder="Phone" 
                    name='phone'
                    required/>
                    {/* address
                  <label className="label">Address</label>
                  <input 
                  type="text"
                   className="input"
                    placeholder="Address" 
                    name='Address'
                    required/> */}
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
                 type='submit' className="btn bg-gray-800 btn-neutral mt-4">Register</button>

                  
                  <p className='font-semibold text-center pt-5'>Already have an account?{''} <Link className='text-secondary' to='/signin'>SignIn</Link></p>
                </fieldset>
              </form>
              <SocialLogIn></SocialLogIn>
            </div>
        </div>
        </div>
     </div>
    );
};

export default Register;