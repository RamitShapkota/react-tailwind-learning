import { useState } from 'react'
import Button from './components/Button'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className='w-full h-screen duration-200'
      style={{ backgroundColor: color }}>
      <div className=' fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-2'>
        <div className='flex flex-wrap bg-white px-3 py-2 justify-center shadow-lg rounded-2xl gap-2 text-center'>

          <Button bgColor="red" onClick={() => setColor("red")} />
          <Button bgColor="yellow" onClick={() => setColor("yellow")} />
          <Button bgColor="green" onClick={() => setColor("green")} />
          <Button bgColor="black" onClick={() => setColor("black")} />
          <Button bgColor="purple" onClick={() => setColor("purple")} />
          <Button bgColor="blue" onClick={() => setColor("blue")} />
          <Button bgColor="pink" onClick={() => setColor("pink")} />

        </div>
      </div>
    </div>
  )
}

export default App
