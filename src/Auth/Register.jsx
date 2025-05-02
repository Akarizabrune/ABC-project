import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <div className='w-full h-screen bg-white flex flex-col justify-center items-center
   gap-10 p-6 '> 
  <h1 className='text-gray-950 font-bold text-2xl font-serif'>Registration</h1>
  <form action="" method="" className='bg-gray-900 w-150 h-160 flex flex-col justify-center items-center rounded-lg p-6 gap-4'>
    <div className='border-2 border-cyan-200 w-full h-80 flex flex-col justify-center gap-4 p-6 rounded-md'>
      <label for="" className='text-white font-bold'>User name:</label>
      <input type="user name" name='user name' className='bg-white/15 w-full h-7 rounded p-2'/>
    </div>
    <div className='border-2 border-cyan-200 w-full h-80 flex flex-col justify-center gap-4 p-6 rounded-md'>
      <label for="" className='text-white font-bold'>Email:</label>
      <input type="email" name='email' className='bg-white/15 w-full h-7 rounded p-2'/>
    </div>
    <div className='border-2 border-cyan-200 w-full h-80 flex flex-col justify-center gap-4 p-6 rounded-md'>
      <label for="" className='text-white font-bold'>Password:</label>
      <input type="password" name='password' className='bg-white/15 w-full h-7 rounded p-2'/>
    </div>
    <div className='border-2 border-cyan-200 w-full h-80 flex flex-col justify-center gap-4 p-6 rounded-md'>
      <input type="submit" name='btn' value="Submit" className='bg-cyan-600 w-full h-8 rounded font-bold'/>
      <h1 className='text-white/40 flex justify-between '>you already have an account!<Link to='/'
      className='text-cyan-500 hover:text-cyan-200'
      >
      Login
      </Link></h1>
    </div>
    </form>
    </div>
  )
}

export default Register