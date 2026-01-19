import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  return (
    <>
     <h1 className='bg-amber-500 p-2 px-6 rounded-2xl hover:bg-amber-700 cursor-pointer text-black font-bold mb-10'>
        Tailwind test
      </h1>

      {/* <Card  myName = "Ramit" myboj = {{name : "Ramit" , age : 19 }}  myarr = {[1,2,3,4]}/> */}

      <Card username = "Ramit Sonar" rank= "first" />
      <Card username = "Dikshya Khanal" rank= "second"  />
      <Card username = "Yasan Basnet"  />
      
    </>
  )
}

export default App