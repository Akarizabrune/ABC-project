import React from 'react'
import { NavLink } from 'react-router-dom'
import { MdDashboard } from "react-icons/md";
import { IoBookSharp } from "react-icons/io5";
import { FaUserPen, FaUserSecret } from "react-icons/fa6";


function Sidebar() {
    const element=[
        {icons:<MdDashboard /> , label: 'Dashboard', path: '/Dashboard',},
        {icons: <IoBookSharp />, label: 'Books', path:'/Books' ,},
        {icons: <FaUserPen />, label: 'Author', path:'Author' ,},
        {icons:<FaUserSecret /> , label: 'Customer', path:'/Customer' ,},
    ]
  return (
    <div className='bg-gray-700 w-full h-screen text-white font-bold flex flex-col gap-4 rounded-md '>
    <div className='font-serif w-full bg-gray-800 font-bold p-7 font-2xl flex flex-col justify-center items-center '> 
      ABC project
    </div>
     <div className='bg-gray-700/45 w-full flex flex-col pt-4 gap-2'>
        {
            element.map((item,index) =>(
                <NavLink key={index}
                to={item.path}
                className='bg-white/20 flex flex-row justify-center items-center h-15 gap-1'
                >
              {item.icons}
              <span>{item.label}</span>      

                </NavLink>
            ))
        }
     </div>
   </div>
  )
}

export default Sidebar
