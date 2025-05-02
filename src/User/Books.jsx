import React from 'react'

export default function Books() {
  return (
    <div className='p-6 bg-white/15 min-h-screen'>
      <h1 className='font-bold text-gray-900  text-2xl flex justify-center'>Books</h1>

      <div className='bg-gray-500 p-4 rounded-xl shadow'>
        <p className='text-black text-1xl'>This is where the list of books will disapear!</p>

      </div>
      <div className='bg-white p-4 rounded-shadow overflow-x-auto'>
        <table className='w-full text-left '>
            <thead>
         <tr className='font-bold text-2xl bg-gray-400'>
            <th>Title</th>
            <th>Author</th>
            <th>Year</th>
         </tr>
         </thead>
         <tbody>
            <tr className='border-t'>
                <td>Brave Journey</td>
                <td>John Doe</td>
                <td>2005</td>

            </tr>
         </tbody>
        </table>
      </div>
    </div>
  )
}



