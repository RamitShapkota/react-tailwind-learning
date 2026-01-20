import { useState } from 'react'

function App() {

  const [color , setColor] = useState('yellow');

  const setBackground = () => {
    setColor('lightblue')
  }
  return (
   <div style={{ backgroundColor: color, height: '100vh', width: '100vw' }}>
      
      {/* 3. Attach the function to the button's onClick event */}
      <button onClick={setBackground}>
        Change Background
      </button>
      
    </div>
  )
}

export default App
