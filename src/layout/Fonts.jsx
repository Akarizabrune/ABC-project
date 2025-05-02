import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

function Fonts() {
  return (
    <div className='w-full h-screen bg-white/30 flex'>
      <div className='w-60'>
        <Sidebar/>
      </div>
      <div className='w-full ml-2 flex flex-col gap-4'>
        <Navbar/>
        <main className='w-full h-full'>
          <Outlet/>


        </main>

      </div>
    </div>
  )
}

export default Fonts
