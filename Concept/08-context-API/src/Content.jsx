import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'


function Content() {
    const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className={`h-screen flex flex-col items-center justify-center transition-all duration-500 ${theme === 'dark' ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'}`}>
      
      <h1 className='text-4xl font-bold mb-4'>
        {theme === 'dark' ? 'Dark Mode Active' : 'Light Mode Active'}
      </h1>

      <button 
      onClick={toggleTheme}
      className='px-6 py-2 rounded-full font-semibold border-2 border-current hover:scale-105 transition-transform'
      >
        Switch to {theme === 'dark' ? 'Light' : 'Dark'}
      </button>
    </div>
  )
}

export default Content
