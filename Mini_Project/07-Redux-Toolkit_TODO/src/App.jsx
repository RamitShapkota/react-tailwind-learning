import AddTodo from "./components/AddTodo"
import Todos from "./components/Todos"

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 px-4 py-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-white mb-10 tracking-tight">
          TODO App
        </h1>
        <AddTodo />
        <Todos />
      </div>
    </div>
  )
}

export default App
