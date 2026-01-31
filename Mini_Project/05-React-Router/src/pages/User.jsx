import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams();
  return (
    <div className='bg-gray-500 flex h-14 w-screen text-center text-3xl font-bold items-center justify-center shadow-amber-300 rounded-2xl'>
      hii i am user: <span className='text-white m-1'>{userid}</span>
    </div>
  )
}

export default User
