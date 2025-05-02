import React from 'react'

export default function Books() {
  return (
    <div className='p-6 bg-white/15 min-h-screen'>
      <h1 className='font-bold text-gray-900  text-2xl flex justify-center'>Books</h1>

      <div className='bg-gray-500 p-4 rounded-xl shadow'>
        <p className='text-black text-1xl'>This is where the list of books will disapear!</p>

      </div>
      <div className='bg-white p-4 rounded-shadow overflow-x-auto'>
        <table className='w-full text-left border border-collapse border-gray-300 '>
            <thead>
         <tr className='font-bold text-2xl bg-gray-400'>
            <th>Title</th>
            <th>Author</th>
            <th>Year</th>
         </tr>
         </thead>
         <tbody>
            <tr className='hover:bg-green-300 text-black text-lg font-bold'>
                <td className='border border-black'>Brave Journey</td>
                <td className='border border-black'>John Doe</td>
                <td className='border border-black'>2005</td>

            </tr>
           
            <tr className='hover:bg-green-300 text-black text-lg font-bold'>
              <td className='border border-black'>Heart of faithful</td>
              <td className='border border-black'>Gatete OG</td>
              <td className='border border-black'>2004</td>
            
            </tr>
            <tr className='hover:bg-green-300 text-black text-lg font-bold'>
              <td className='border border-black'>Five love language</td>
              <td className='border border-black'>AKARIZA Brune</td>
              <td className='border border-black'>2006</td>
              
              </tr>
         </tbody>
        </table>
      </div>
    </div>
  )
}



