import { useState , useRef } from 'react'
import DownloadButton from './DownloadButton'

function App() {
  // 1. Initial States
  const [name, setName] = useState("Guest")
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [fontSize, setFontSize] = useState(20)

  // Handlers
  const handleNameChange = (e) => setName(e.target.value)
  const toggleTheme = () => setIsDarkMode(!isDarkMode)

  // 2. Reset Function: This updates all states back to their defaults
  const resetAll = () => {
    setName("Guest")
    setIsDarkMode(false)
    setFontSize(20)
  }

//We need this 'ref' to tell the download button what to capture  
  const cardRef = useRef(null);

  return (
    <div style={{ 
      backgroundColor: isDarkMode ? "#333" : "#eee", 
      color: isDarkMode ? "white" : "black",
      height: "100vh",
      padding: "20px",
      textAlign: "center",
      transition: "all 0.3s ease",
      display: "flex",
      flexDirection: "column",
      placeItems: "center",
      gap: "10px"
    }}>
      <h1>Identity Card Creator</h1>

      <input 
        type="text" 
        placeholder="Enter your name" 
        onChange={handleNameChange}
        style={{ padding: "10px", borderRadius: "5px" }}
      />

      <div style={{ margin: "20px" }}>
        <button onClick={toggleTheme}>
          Switch to {isDarkMode ? "Light" : "Dark"} Mode
        </button>
        
        <button onClick={() => setFontSize(fontSize + 2)} style={{ marginLeft: "10px" }}>
          Make Text Bigger
        </button>
        
        <button onClick={() => setFontSize(fontSize - 2)} style={{ marginLeft: "10px" }}>
          Make Text Smaller
        </button>
      </div>

      {/* 3. The Reset Button */}
      <button 
        onClick={resetAll} 
        style={{ 
          backgroundColor: "#ff4757", 
          color: "white", 
          border: "none", 
          padding: "10px 20px", 
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        Reset Everything
      </button>

       <DownloadButton cardRef={cardRef} fileName={name} />

      <hr style={{ margin: "30px 0" }} />

      <div
      ref={cardRef} 
      style={{  
        border: "4px solid",
        borderColor: isDarkMode ? "white" : "black", 
        padding: "20px",
        maxWidth: "300px",
        backgroundColor: isDarkMode ? "#222" : "#fff",
        borderRadius: "10px"
      }}>
        <h2 style={{ fontSize: `${fontSize}px` }}>Hello, {name}!</h2>
        <p>Verified Identity Card</p>
        <div style={{ 
            marginTop: "15px", 
            height: "4px", 
            width: "260px", 
            backgroundColor: "#4CAF50", 
            margin: "0 auto" 
        }}></div>
      </div>
       

    </div>
  )
}

export default App