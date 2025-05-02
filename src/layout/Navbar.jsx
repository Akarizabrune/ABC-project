import React from 'react'
import { Link } from 'react-router-dom'
import { FaUserPlus } from "react-icons/fa";

function Navbar() {
  return (
    <div className='bg-gray-700 flex justify-center p-4 h-25 w-full '>
      <nav className='w-full h-full gap-3 text-2xl flex flex-row items-center'>
        <img src="" alt="image/not found" />
        <h1>ABC Company</h1>
      </nav>
      <p className='h-full w-full flex justify-end items-center gap-7 '>
        <h1 className='flex items-center flex-row text-2xl '>
          <FaUserPlus />username</h1>
        <Link to='/' className='border-2 h-10 w-25 flex justify-center items-center text-1xl font-bold'>Logout</Link>
      </p>
    </div>
  )
}

export default Navbar

