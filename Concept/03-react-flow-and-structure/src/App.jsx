import Greeting from "./Greeting"; //pull the block in

function App() {

  return (
    <div>
      <h1>Main App component</h1>
      <br />
      {/* use the block like an HTML tag */}
      <Greeting />
      <p>This text is inside App.jsx.</p>

      {/*  You can reuse the same block as many times as you want! */}

      <Greeting />
    </div>
  )
}

export default App
