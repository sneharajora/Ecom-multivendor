import React, { useState } from 'react'
import { Link } from 'react-router';

const Register = () => {
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const[name,setName] = useState(""); 


   const handleSubmit = (e)=>{
    e.preventDefault();
    crossOriginIsolated.log("User Registered:",{name,email,password})
   };

  return (
    <div>
        <div className='w-full flex md:w-1/2 flex-col justify-center items-center p-8 md:p-12'>
        <form onChange={handleSubmit} className='w-full max-w-md bg-white p-8 rounded-lg border shadow-sm'>
          <div className='flex justify-center mb-6'>
              <h2 className='tex-xl font-medium'>
                Rabbit
              </h2>
          </div>
          <h2 className='text-2xl font-bold text-center mb-6'>Hey there! </h2>
          <p className='text-center mb-6'>
            Enter your username and password to Register
          </p>
           <div className='mb-4'>
            <label className='block text-sm font-semibold mb-2'>Name</label>
            <input placeholder='Enter your password' className='w-full p-2 border rounded' type="password" value={name} onChange={(e)=>setName(e.target.value)}></input>
          </div>
          <div className='mb-4'>
            <label className='block text-sm font-semibold mb-2'>Email</label>
            <input placeholder='Enter your email address' className='w-full p-2 border rounded' type="email" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
          </div>
          <div className='mb-4'>
            <label className='block text-sm font-semibold mb-2'>Password</label>
            <input placeholder='Enter your password' className='w-full p-2 border rounded' type="password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
          </div>
           
          <button type='submit' className='w-full bg-black text-white p-2 rounded-lg font-semibold hover:bg-gray-800  transition'>Sign Up</button>
         <p className='mt-6 text-center text-sm'>Don't have an acount</p>
              <Link to="/login" className='text-center text-blue-500'>Login</Link>
        </form>
        </div>
    </div>
  )
}

export default Register;