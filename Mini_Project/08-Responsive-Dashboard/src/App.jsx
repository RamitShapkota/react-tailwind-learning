import { useState } from "react"
import "./App.css"
import "./index.css"
import Card from "./components/Card"

function App() {

  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  const navItems = [
    { name: "Dashboard", icon: "📊" },
    { name: "Projects", icon: "📁" },
    { name: "Calendar", icon: "📅" },
    { name: "Documents", icon: "📄" },
    { name: "Reports", icon: "📈" },
  ]
  return (
    <div className={`flex bg-gray-100 h-screen transition-transform duration-300 ease-in-out ${darkMode ? "dark":""} dark:bg-gray-900`}>
      {/* sidebar */}
      <div
        className={`z-100 dark:bg-gray-900 fixed bg-white w-64 h-screen shadow
  transform transition-transform duration-300 ease-in-out
  ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:static"}
  lg:translate-x-0 `}
      >
        <div className="p-4 flex justify-between border-b shadow ">
          <div className="text-xl font-bold dark:text-gray-100">Logo</div>
          <button
            className="border p-1 rounded-full hover:bg-red-300 lg:hidden dark:text-gray-100 "
            onClick={() => setSidebarOpen(false)}
          >
            X
          </button>
        </div>

        {/* navigation bar */}

        <div className="p-4 space-y-2">
          {navItems.map((item) => {
            return (
              <div className="flex items-center gap-2 hover:bg-gray-100 cursor-pointer dark:text-gray-100 dark:hover:text-gray-900">
                <div className="text-xl">{item.icon}</div>
                <div className="text-xl">{item.name}</div>
              </div>
            );
          })}
        </div>

          {/* dark mode button */}
      <div className="flex text-2xl justify-left p-4">
        {darkMode ? (
          <button
          className="p-1 bg-white rounded-full"
          onClick={() => setDarkMode(false)}
          >
            ☀️
          </button>
        ):(
          <button
          className="p-1 bg-black rounded-full"
          onClick={() => setDarkMode(true)}
          >
            🌙
          </button>
        )}
      </div>
      </div>


      {/* main content */}
      <main className="flex-1 pt-20">
        <header className="fixed top-0 left-0 right-0 z-50 lg:ml-64 bg-white flex justify-between p-4 dark:bg-gray-900 dark:text-gray-100">
          <button
            className="p-2 text-xl font-bold lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            ☰
          </button>
          <h1 className="text-2xl font-bold">Dashboard </h1>
          <div className="bg-gray-300 w-10 h-10 rounded-full"></div>
        </header>

        {/* all cards */}

        <div className=" z -25 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 dark:bg-gray-900">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
      </main>
    </div>
  )
}

export default App