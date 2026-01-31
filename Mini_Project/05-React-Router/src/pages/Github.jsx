import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/RamitShapkota')
    //     .then(response => response.json())
    //     .then( data => {
    //         setData(data);
    //     })
    // })
  return (
    <div className='text-center w-screen m-4 bg-gray-600 text-white p-4 text-3xl'>
      Github Follower: {data.followers}
      <img src="{data.avatar_url}" alt="my picture" width={300} />
    </div>
  )
}

export default Github


//it is better if you write this code in another folder
export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/RamitShapkota')
    return response.json();
}
