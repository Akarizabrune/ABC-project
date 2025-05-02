import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className='w-full h-screen bg-white flex flex-col justify-center items-center
   gap-10 '> 
  <h1 className='text-gray-950 font-bold text-2xl font-serif'>Login</h1>
  <form action="" method="" className='bg-gray-900 w-150 h-120 flex flex-col justify-center items-center rounded-lg p-6 gap-4'>
    <div className='border-2 border-cyan-200 w-full h-30 flex flex-col justify-center gap-4 p-6 rounded-md'>
      <label for="" className='text-white font-bold'>Email:</label>
      <input type="email" name='email' className='bg-white/15 w-full h-7 rounded p-2'/>
    </div>
    <div className='border-2 border-cyan-200 w-full h-30 flex flex-col justify-center gap-4 p-6 rounded-md'>
      <label for="" className='text-white font-bold'>Password:</label>
      <input type="password" name='password' className='bg-white/15 w-full h-7 rounded p-2'/>
    </div>
    <div className='border-2 border-cyan-200 w-full h-30 flex flex-col justify-center gap-4 p-6 rounded-md'>
      <input type="submit" name='btn' value="Submit" className='bg-cyan-600 w-full h-full rounded font-bold'/>
      <h1 className='text-white/40 flex justify-between'>you don't have an account!<Link to='/Register'
      className='text-cyan-500 hover:text-cyan-200'
      >
      Register now
      </Link></h1>
    </div> 


  </form>
    </div>
  )
}
