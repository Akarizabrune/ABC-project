import React from 'react'

function Dashboard() {
  return (
    <div className='p-6'>
      <h1 className='font-bold text-2xl mb-4 text-gray-800'>Dashboard</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        
          <div className='bg-blue-300 p-4 rounded-xl shadow'>
            <h2 className='text-lg font-semibold'>Total Books</h2>
            <p className='text-2xl mt-2'>120</p>
          </div>

          <div className='bg-green-300 p-4 rounded-xl shadow'>
            <h2 className='text-lg font-semibold'>Total Authors</h2>
            <p className='text-2xl mt-2'>130</p>
          </div>
          <div className='bg-yellow-400 p-4 rounded-xl shadow'>
            <h2 className='text-lg font-semibold'>Total Customers</h2>
            <p className='text-2xl mt-2'>100</p>
          </div>
        </div>

    </div>
  )
}

export default Dashboard
